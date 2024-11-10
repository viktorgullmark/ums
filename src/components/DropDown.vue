<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-xs uppercase font-medium text-gray-900"
      v-text="label"
    />
    <div class="relative">
      <select
        :id="id"
        class="bg-gray-50 appearance-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        @change="changeSelect($event.target.value)"
      >
        <option
          v-for="option in options"
          :value="option.value"
          v-text="option.text"
          :key="option.value"
        />
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UmsDropDown",
  props: {
    id: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "Label",
    },
    changeSelect: {
      type: Function,
      defualt: () => {},
    },
  },
};
</script>
