const inputOnKeyup = (event) => {
  event.target.classList.remove("primary-input--error");
};

// Funções de validação

const isEmpty = (value) => value === "";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasEmailError = !emailRegex.test(email);

  if (hasEmailError) {
    renderErrorFeedback("email");
  }

  return hasEmailError;
};

const validatePassword = (password, passwordConfirm) => {
  const hasPasswordError = password !== passwordConfirm;

  if (hasPasswordError) {
    renderErrorFeedback("password");
    renderErrorFeedback("passwordConfirm");
  }

  return hasPasswordError;
};

const validateFields = (payload) => {
  let hasError = false;

  for (key in payload) {
    if (isEmpty(payload[key])) {
      hasError = true;
      renderErrorFeedback(key);
    }
  }

  return hasError;
};

const renderErrorFeedback = (fieldName) => {
  const field = document.querySelector(
    `#sign-up-form input[name="${fieldName}"]`
  );
  field.classList.add("primary-input--error");
};

const getPayloadFromEvent = (event) => {
  const name = event.target.name.value;
  const email = event.target.email.value;
  const ddd = event.target.ddd.value;
  const phone = event.target.phone.value;
  const password = event.target.password.value;
  const passwordConfirm = event.target.passwordConfirm.value;
  return {
    name,
    phone,
    email,
    ddd,
    password,
    passwordConfirm,
    isRepresentative: event.target.isRepresentative.value === "yes",
  };
};

const signupFormOnSubmit = (event) => {
  const payload = getPayloadFromEvent(event);
  const hasError = validateFields(payload);
  const emailError = validateEmail(payload.email);
  const passwordError = validatePassword(
    payload.password,
    payload.passwordConfirm
  );

  if (hasError || emailError || passwordError) {
    return;
  }

  const { passwordConfirm, password, ...payloadRest } = payload;

  const user = {
    ...payloadRest,
    password: encrypt(password),
  };

  createUser(user);

  window.location.assign("../signin/index.html");
};

const getSignupForm = () => document.getElementById("sign-up-form");

const bindSignupFormOnSubmit = () => {
  const form = document.getElementById("sign-up-form");
  form.addEventListener("submit", signupFormOnSubmit);
};

const signupButtonOnClick = () => {
  const form = getSignupForm();
  const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);
};

const bindSignupButtonOnClick = () => {
  const button = document.querySelector('button[name="sign-up-button"]');
  button.addEventListener("click", signupButtonOnClick);
};

document.addEventListener("DOMContentLoaded", () => {
  bindSignupFormOnSubmit();
  bindSignupButtonOnClick();
});
