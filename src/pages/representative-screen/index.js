const deleteAccount = () => {
  const { userId } = getSignedInUser();
  signOut();
  deleteUser(userId);
  window.location.assign('../../index.html');
};

const logoutAccount = () => {
  signOut();
  window.location.assign('../signin/index.html');
}

document.addEventListener('DOMContentLoaded', () => {
  // Registrando função callback para o botão
  const deleteAccountbutton = document.getElementById('delete-account-button');
  deleteAccountbutton.addEventListener('click', () => {
    addDeleteAccountModalToDOM(deleteAccount);
  });

  const logoutButton = document.getElementById('logout-account-button');
  logoutButton.addEventListener('click', logoutAccount);
});
