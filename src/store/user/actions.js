const actions = {
  addUser({ commit, rootState }, user) {
    commit("ADD_USER", {
      ...user,
      profession_id: rootState.professionModule.selectedProfessionId,
      country_id: rootState.countryModule.selectedCountryId,
    });
  },
  removeUsers({ commit }, userIds) {
    commit("REMOVE_USERS", userIds);
  },
  setSelectedUsers: ({ commit }, userIds) => {
    commit("SET_SELECTED_USERS", userIds);
  },
};

export default actions;
