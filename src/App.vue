<template>
  <div>
    <ums-nav-bar title="User Management System" />
    <div class="p-2">
      <div
        class="mt-20 max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto"
      >
        <ums-table-toolbar @selected="(value) => setSelectedUsers(value)" />
        <ums-user-table @selected="(value) => setSelectedUsers(value)" />
      </div>
      <ums-footer />
    </div>
  </div>
</template>

<script>
import UmsUserTable from "@/UserTable.vue";
import UmsNavBar from "@/NavBar.vue";
import UmsTableToolbar from "@/TableToolbar.vue";
import UmsFooter from "@/Footer.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    UmsTableToolbar,
    UmsNavBar,
    UmsUserTable,
    UmsFooter,
  },
  methods: {
    ...mapActions(["setSelectedUsers"]),
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
