const formStates = {
  IDLE: "Idle",
  SUBMITTING: "Submitting",
  SUCCESS: "Success",
  ERROR: "Error",
};

let currentState = formStates.IDLE;

const form = document.getElementById("signup-form");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (currentState === formStates.SUBMITTING) {
    return;
  }

  setFormState(formStates.SUBMITTING);

  setTimeout(() => {
    setFormState(formStates.SUCCESS, "Thanks! You have joined the waitlist.");
  }, 1000);
});

setFormState(formStates.IDLE);
