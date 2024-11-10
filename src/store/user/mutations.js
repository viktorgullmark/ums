const mutations = {
  ADD_USER: (state, user) => {
    const lastUserId =
      state.users.length > 0 ? state.users[state.users.length - 1].id : 0;
    state.users.push({ id: lastUserId + 1, ...user });
  },
  UPDATE_USER: (state, user) => {
    const userIndex = state.users.findIndex((obj) => obj.id == user.id);
    state.users[userIndex] = user;
    state.users = [...state.users];
  },
  REMOVE_USERS: (state, userIds) => {
    state.users = state.users.filter((user) => !userIds.includes(user.id));
  },
  SET_SELECTED_USERS: (state, userIds) => {
    state.selectedUserIds = userIds;
  },
};

export default mutations;
