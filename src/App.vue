<template>
  <div>
    <nav-bar />
    <div
      class="mt-20 max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4"
    >
      <button-component
        :on-click="() => (showModal = true)"
        :button-text="'Add User'"
      >
        <template v-slot:leading>
          <img src="./assets/icons/user-plus.svg" /> </template
      ></button-component>

      <button-component
        :on-click="removeSelected"
        :button-text="'Remove Users'"
        :isDisabled="selected.length === 0"
        variant="danger"
      >
        <template v-slot:leading>
          <img src="./assets/icons/trash.svg" /> </template
      ></button-component>
      <add-user-modal
        v-if="showModal"
        @close="showModal = false"
      ></add-user-modal>
      <user-list @selected="(value) => (selected = value)" />
    </div>
  </div>
</template>

<script>
import AddUserModal from "./components/AddUserModal.vue";
import UserList from "./components/UserList.vue";
import ButtonComponent from "./components/Button.vue";
import { mapActions } from "vuex";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    AddUserModal,
    ButtonComponent,
    NavBar,
    UserList,
  },
  data() {
    return {
      showModal: false,
      selected: [],
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

<style>
html,
body {
  height: 100%;
  background: #f3f3f3;
}
</style>
