const formStates = {
  IDLE: "Idle",
  SUBMITTING: "Submitting",
  SUCCESS: "Success",
  ERROR: "Error",
};

let currentState = formStates.IDLE;

const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-button");
const formMessage = document.getElementById("form-message");

function setFormState(state, message = "") {
  currentState = state;

  if (state === formStates.IDLE) {
    submitButton.disabled = false;
    formMessage.textContent = message;
  }

  if (state === formStates.SUBMITTING) {
    submitButton.disabled = true;
    formMessage.textContent = "Submitting...";
  }

  if (state === formStates.SUCCESS) {
    submitButton.disabled = false;
    formMessage.textContent = message;
  }

  if (state === formStates.ERROR) {
    submitButton.disabled = false;
    formMessage.textContent = message;
  }
}

function sanitizeInput(value) {
  return value.trim();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (currentState === formStates.SUBMITTING) {
    return;
  }

  const email = sanitizeInput(emailInput.value);

  if (!email) {
    setFormState(formStates.ERROR, "Please enter your email.");
    return;
  }

  setFormState(formStates.SUBMITTING);

  setTimeout(() => {
    formMessage.textContent = `Thanks! ${email} has joined the waitlist.`;
    setFormState(formStates.SUCCESS, formMessage.textContent);
  }, 1000);
});

setFormState(formStates.IDLE);
