<template>
  <div class="flex gap-3">
    <ums-button :on-click="() => (showModal = true)" :button-text="'Add User'">
      <template v-slot:leading>
        <img src="@assets/icons/user-plus.svg" /> </template
    ></ums-button>
    <ums-button
      :on-click="removeSelected"
      :button-text="'Remove Users'"
      :isDisabled="selectedUserIds.length === 0"
      variant="danger"
    >
      <template v-slot:leading> <img src="@assets/icons/trash.svg" /> </template
    ></ums-button>
    <ums-add-user-modal
      v-if="showModal"
      @close="showModal = false"
    ></ums-add-user-modal>
  </div>
</template>

<script>
import UmsButton from "@/Button.vue";
import UmsAddUserModal from "@/AddUserModal.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "UmsTableToolbar",
  components: {
    UmsAddUserModal,
    UmsButton,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      selectedUserIds: (state) => state.userModule.selectedUserIds,
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
