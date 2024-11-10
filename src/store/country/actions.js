const actions = {
  setCountry({ commit }, countryId) {
    commit("SET_COUNTRY", +countryId);
  },
};

export default actions;
