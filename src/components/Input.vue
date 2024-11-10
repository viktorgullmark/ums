<template>
  <div>
    <label
      class="block mb-2 text-sm font-medium text-gray-900"
      :for="id"
      v-text="label"
    />
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Label",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    value: {
      type: String,
    },
  },
};
</script>
