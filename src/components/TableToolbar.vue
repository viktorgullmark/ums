<template>
  <div class="flex gap-3">
    <ums-button :on-click="() => (showModal = true)" :button-text="'Add User'">
      <template v-slot:leading>
        <img src="@assets/icons/user-plus.svg" /> </template
    ></ums-button>
    <ums-button
      :on-click="removeSelected"
      :button-text="'Remove Users'"
      :isDisabled="selected.length === 0"
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
import { mapActions } from "vuex";

export default {
  name: "UmsTableToolbar",
  components: {
    UmsAddUserModal,
    UmsButton,
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["removeUsers"]),
    removeSelected() {
      if (
        confirm(
          `Are you sure you want to delete the selected ${this.selected.length} user(s)?`
        )
      ) {
        this.removeUsers(this.selected);
        this.selected = [];
      }
    },
  },
};
</script>
