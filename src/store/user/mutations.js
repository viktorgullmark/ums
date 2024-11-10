const mutations = {
  ADD_USER: (state, user) => {
    const lastUserId =
      state.users.length > 0 ? state.users[state.users.length - 1].id : 0;
    state.users.push({ id: lastUserId + 1, ...user });
  },
  REMOVE_USER: (state, userId) => {
    state.users = state.users.filter((user) => user.id !== userId);
  },
};

export default mutations;
