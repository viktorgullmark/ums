const mutations = {
  SELECT_USER: (state, userId) => {
    state.selectedUserIds.push(userId);
  },
  DESELECT_USER: (state, userId) => {
    state.selectedUserIds.filter((id) => id !== userId);
  },
  ADD_USER: (state, user) => {
    const lastUserId =
      state.users.length > 0 ? state.users[state.users.length - 1].id : 0;
    state.users.push({ id: lastUserId + 1, ...user });
  },
  REMOVE_USER: (state, userId) => {
    state.users = state.users.filter((user) => user.id !== userId);
  },
  REMOVE_USERS: (state, userIds) => {
    state.users = state.users.filter((user) => !userIds.includes(user.id));
  },
};

export default mutations;
