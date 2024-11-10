<template>
  <nav class="flex-no-wrap fixed top-0 w-full border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >{{ title }}</span
      >

      <div class="block w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 border-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white md:p-0"
              aria-current="page"
              >Users</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style>
nav {
  z-index: 1000;
  background: rgb(0, 50, 51);
  background: linear-gradient(
    90deg,
    rgba(0, 50, 51, 1) 0%,
    rgba(4, 129, 124, 1) 100%
  );
}
</style>
