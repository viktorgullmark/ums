<template>
  <div>
    <nav-bar title="User Management System™" />
    <div class="p-2">
      <div
        class="mt-20 max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto"
      >
        <table-toolbar :selected="selected" @removed="selected = value" />
        <user-table @selected="(value) => (selected = value)" />
      </div>
      <footer-component />
    </div>
  </div>
</template>

<script>
import UserTable from "@/UserTable.vue";
import NavBar from "@/NavBar.vue";
import TableToolbar from "@/TableToolbar.vue";
import FooterComponent from "@/Footer.vue";

export default {
  name: "App",
  components: {
    TableToolbar,
    NavBar,
    UserTable,
    FooterComponent,
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
