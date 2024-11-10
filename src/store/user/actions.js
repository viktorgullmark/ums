const actions = {
  addUser({ commit, rootState }, user) {
    commit("ADD_USER", {
      ...user,
      profession_id: rootState.professionModule.selectedProfessionId,
      country_id: rootState.countryModule.selectedCountryId,
    });
  },
  removeUser({ commit }, user) {
    commit("REMOVE_USER", user.id);
  },
  removeUsers({ commit }, userIds) {
    commit("REMOVE_USERS", userIds);
  },
  selectUser({ commit }, user) {
    commit("SELECT_USER", user.id);
  },
  deselectUser({ commit }, user) {
    commit("DESELECT_USER", user.id);
  },
};

export default actions;
