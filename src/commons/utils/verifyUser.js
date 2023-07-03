const verifyLoggedUser = () => {
  console.log('entrou')
  const loggedUser = getSignedInUser();

  if (!loggedUser || !loggedUser?.userId) {
    window.location.assign('../signin/index.html');
  }
}

const verifyUserIsAlreadyLogged = () => {
  const loggedUser = getSignedInUser();

  if (loggedUser?.userId) {
    const { isRepresentative } = findUserById(loggedUser.userId);

    if (isRepresentative) {
      window.location.assign('../representative-screen/index.html');
    } else {
      window.location.assign('../donor-screen/index.html');
    }
  }
}

const verifyRepresentativeUser = () => {
  verifyLoggedUser();

  const { userId } = getSignedInUser();
  const { isRepresentative } = findUserById(userId);

  if (!isRepresentative) {
    window.location.assign('../donor-screen/index.html');
  }
}