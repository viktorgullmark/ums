const getters = {
  getSelectedUsers: (state) => () => {
    return state.selectedUserIds;
  },
};

export default getters;
