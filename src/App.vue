<template>
  <div>
    <nav-bar title="User Management System™" />
    <div
      class="mt-20 max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4"
    >
      <list-toolbar :selected="selected" @removed="selected = value" />
      <user-list @selected="(value) => (selected = value)" />
    </div>
  </div>
</template>

<script>
import UserList from "./components/UserList.vue";
import NavBar from "./components/NavBar.vue";
import ListToolbar from "./components/ListToolbar.vue";

export default {
  name: "App",
  components: {
    ListToolbar,
    NavBar,
    UserList,
  },
  data() {
    return {
      selected: [],
    };
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
