const deleteAccount = () => {
  const { userId } = getSignedInUser();
  deleteUser(userId);
  window.location.assign('../../index.html');
};

document.addEventListener('DOMContentLoaded', () => {
  // Registrando função callback para o botão
  const button = document.getElementById('delete-account-modal');
  button.addEventListener('click', () => {
    addDeleteAccountModalToDOM(deleteAccount);
  });
});
