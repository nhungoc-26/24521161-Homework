# AI Failure Audit

## Purpose

This report documents three defects identified during the AI-assisted development and review of the HW3 Resilient Landing Page. Each defect was reviewed and refactored before the final implementation was accepted.

---

## Defect 1: Countdown Timer Drift

### Defect Description

An initial countdown approach could rely on decrementing a counter every fixed interval. This can cause timer drift because setInterval() does not guarantee exact execution timing.

For example, assuming that every interval represents exactly one second can cause the displayed countdown to become inaccurate when the browser delays JavaScript execution.

### Diagnostic Method

The defect was identified through code review and Git diff inspection. The countdown implementation was checked against the requirement for a drift-free countdown using UTC ISO 8601 timestamps.

### Refactored Solution

The final implementation stores a fixed UTC target timestamp:

const targetTime = "2026-12-31T23:59:59Z";

Each update calculates the remaining time using the current timestamp:

const now = Date.now();
const target = Date.parse(targetTime);
const remaining = Math.max(0, target - now);

This makes the countdown depend on the actual elapsed time instead of assuming that each interval runs exactly on schedule.

---

## Defect 2: Unsafe HTML Output and XSS Risk

### Defect Description

An AI-generated implementation could use innerHTML to display user-controlled form input. This creates an XSS risk because HTML entered by a user could be interpreted as executable markup.

For example, an input containing HTML or JavaScript could be inserted into the page instead of being treated as plain text.

### Diagnostic Method

The defect was identified by reviewing the code for unsafe DOM sinks. A test payload such as:

<script>alert("XSS")</script>

was used during browser testing.

The code was also checked for the use of innerHTML with user-controlled input.

### Refactored Solution

The final implementation uses textContent instead of innerHTML:

formMessage.textContent = `Thanks! ${email} has joined the waitlist.`;

The input is trimmed before being used:

function sanitizeInput(value) {
return value.trim();
}

Using textContent ensures that the email is rendered as text rather than interpreted as HTML.

---

## Defect 3: Double Form Submission

### Defect Description

An initial form implementation could allow multiple submissions while the first submission was still being processed. Rapid repeated clicks could therefore trigger multiple submit operations.

### Diagnostic Method

The form was tested by rapidly clicking the submit button while the form was in the Submitting state. The event handler was also inspected using browser Developer Tools and code review.

### Refactored Solution

The final implementation uses an explicit state machine and blocks additional submissions while the form is in the Submitting state:

if (currentState === formStates.SUBMITTING) {
return;
}

The submit button is also disabled during submission:

if (state === formStates.SUBMITTING) {
submitButton.disabled = true;
formMessage.textContent = "Submitting...";
}

This prevents repeated submissions until the form reaches a terminal state such as Success or Error.

---

## Summary

The three reviewed defects were:

1. Countdown timer drift caused by relying on fixed timer intervals.
2. XSS risk caused by unsafe HTML output.
3. Duplicate submissions caused by missing submission-state protection.

The final implementation addresses these issues using timestamp-based countdown calculations, safe text output with textContent, and an explicit form state machine with double-submit protection.
