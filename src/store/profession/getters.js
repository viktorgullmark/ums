const getters = {
  getSelectedProfession: (state) => () => {
    return state.selectedProfession;
  },
};

export default getters;
