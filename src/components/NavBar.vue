<template>
  <nav class="flex-no-wrap fixed top-0 w-full border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <span
        class="self-center font-semibold whitespace-nowrap text-white uppercase text-l"
        >{{ title }}</span
      >
      <div class="block w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-row p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 border-0"
        >
          <li v-for="link in links" :key="link.url">
            <a
              :href="link.url"
              class="block py-2 px-3 text-white md:p-0 uppercase text-sm"
              :class="{ disabled: link.url !== '/' }"
              aria-current="page"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "UmsNavBar",
  data() {
    return {
      links: [
        { name: "Users", url: "/" },
        { name: "Some", url: "/some" },
        { name: "Other", url: "/other" },
        { name: "Links", url: "/links" },
      ],
    };
  },
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
a.disabled {
  pointer-events: none;
  opacity: 50%;
}
</style>
