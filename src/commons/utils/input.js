const removeErrorOnKeydown = (event) => {
  event.target.classList.remove("primary-input--error");
};

const addInputErrorFeedback = (fieldName) => {
  const field = document.querySelector(`form input[name="${fieldName}"]`);
  field.classList.add("primary-input--error");
};
