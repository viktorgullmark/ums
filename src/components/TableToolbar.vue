<template>
  <div class="flex gap-3">
    <ums-button
      :on-click="() => (showAddModal = true)"
      :button-text="'Add User'"
    >
      <template v-slot:leading>
        <img src="@assets/icons/user-plus.svg" /> </template
    ></ums-button>
    <ums-button
      :on-click="() => (showEditModal = true)"
      :button-text="'Edit User'"
      :isDisabled="selectedUserIds.length !== 1"
    >
      <template v-slot:leading>
        <img src="@assets/icons/pencil-square.svg" /> </template
    ></ums-button>
    <ums-button
      :on-click="removeSelected"
      :button-text="'Remove Users'"
      :isDisabled="selectedUserIds.length === 0"
      variant="danger"
    >
      <template v-slot:leading> <img src="@assets/icons/trash.svg" /> </template
    ></ums-button>
    <ums-add-edit-user-modal
      v-if="showAddModal"
      @close="showAddModal = false"
    />
    <ums-add-edit-user-modal
      v-if="showEditModal"
      @close="showEditModal = false"
      :initialUser="selectedUser"
      edit
    />
  </div>
</template>

<script>
import UmsButton from "@/Button.vue";
import UmsAddEditUserModal from "@/AddEditUserModal.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "UmsTableToolbar",
  components: {
    UmsAddEditUserModal,
    UmsButton,
  },
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
    };
  },
  computed: {
    ...mapState({
      selectedUserIds: (state) => state.userModule.selectedUserIds,
      users: (state) => state.userModule.users,
      selectedUser: (state) =>
        state.userModule.users.find(
          (user) => user.id === state.userModule.selectedUserIds[0]
        ),
    }),
  },
  methods: {
    ...mapActions(["removeUsers", "setSelectedUsers"]),
    removeSelected() {
      if (
        confirm(
          `Are you sure you want to delete the selected ${this.selectedUserIds.length} user(s)?`
        )
      ) {
        this.removeUsers(this.selectedUserIds);
        this.setSelectedUsers([]);
      }
    },
  },
};
</script>
