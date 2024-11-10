<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      v-text="label"
    />
    <div class="relative">
      <select
        :id="id"
        class="bg-gray-50 appearance-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        @change="changeSelect($event.target.value)"
      >
        <option :value="options[0].value" v-text="options[0].text" />
        <option :value="options[1].value" v-text="options[1].text" />
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
  name: "DropDown",
  props: {
    id: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [
        { value: 1, text: "Option 1" },
        { value: 2, text: "Option 2" },
      ],
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
