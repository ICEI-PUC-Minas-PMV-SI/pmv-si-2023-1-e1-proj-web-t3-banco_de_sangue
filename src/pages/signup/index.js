// Funções de validação

const isEmpty = (value) => value === "";

const validatePassword = (password, passwordConfirm) => {
  const hasPasswordError = password !== passwordConfirm;

  if (hasPasswordError) {
    addInputErrorFeedback("password");
    addInputErrorFeedback("passwordConfirm");
  }

  return hasPasswordError;
};

const hasEmptyFields = (payload) => {
  let hasError = false;

  for (key in payload) {
    if (isEmpty(payload[key])) {
      hasError = true;
      addInputErrorFeedback(key);
    }
  }

  return hasError;
};

// Funções úteis ao submit

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
  const hasError = hasEmptyFields(payload);
  const emailError = isInvalidEmail(payload.email);
  const passwordError = validatePassword(
    payload.password,
    payload.passwordConfirm
  );

  if (emailError) {
    addInputErrorFeedback("email");
  }

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

const signupButtonOnClick = () => {
  const form = document.getElementById("signup-form");
  const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);
};

document.addEventListener("DOMContentLoaded", () => {
  // Registrando função callback para o formulário
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", signupFormOnSubmit);

  // Registrando função callback para o botão
  const button = document.querySelector('button[name="signup-button"]');
  button.addEventListener("click", signupButtonOnClick);
});
