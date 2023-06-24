const userDBKey = "base-blood-user-db";

const getAllUsers = () => {
  return getItemLocalStorage(userDBKey) || [];
};

const updateAllUsers = (users) => {
  setItemLocalStorage(userDBKey, users);
};

const createUser = (user) => {
  const users = getAllUsers();
  user.id = generateUUID();
  users.push(user);
  updateAllUsers(users);
};
