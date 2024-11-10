<template>
  <div class="flex gap-3">
    <button-component
      :on-click="() => (showModal = true)"
      :button-text="'Add User'"
    >
      <template v-slot:leading>
        <img src="./../assets/icons/user-plus.svg" /> </template
    ></button-component>
    <button-component
      :on-click="removeSelected"
      :button-text="'Remove Users'"
      :isDisabled="selected.length === 0"
      variant="danger"
    >
      <template v-slot:leading>
        <img src="./../assets/icons/trash.svg" /> </template
    ></button-component>
    <add-user-modal
      v-if="showModal"
      @close="showModal = false"
    ></add-user-modal>
  </div>
</template>

<script>
import ButtonComponent from "@/Button.vue";
import AddUserModal from "@/AddUserModal.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AddUserModal,
    ButtonComponent,
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
      this.removeUsers(this.selected);
      this.selected = [];
    },
  },
};
</script>
