const signinKey = "base-blood-signin";

const getSignedInUser = () => {
  return getItemLocalStorage(signinKey);
};

const signInUser = (user) => {
  setItemLocalStorage(signinKey, {
    userId: user.id,
  });
};
