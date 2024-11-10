<template>
  <div>
    <nav-bar title="User Management System™" />
    <div
      class="mt-20 max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4"
    >
      <table-toolbar :selected="selected" @removed="selected = value" />
      <user-table @selected="(value) => (selected = value)" />
    </div>
  </div>
</template>

<script>
import UserTable from "@/UserTable.vue";
import NavBar from "@/NavBar.vue";
import TableToolbar from "@/TableToolbar.vue";

export default {
  name: "App",
  components: {
    TableToolbar,
    NavBar,
    UserTable,
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
