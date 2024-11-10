<template>
  <button
    :class="{
      [`bg-${variant}-700`]: true,
      [`hover:bg-${variant}-900`]: !isDisabled,
      [`bg-opacity-50 hover:bg-opacity-50`]: isDisabled,
    }"
    class="flex items-center text-white py-2 px-4 rounded"
    :disabled="isDisabled"
    @click.prevent="onClick()"
  >
    <slot name="leading" />
    <span>{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => "",
    },
    variant: {
      type: String,
      default: "primary",
    },
    buttonText: {
      type: String,
      default: "Button",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
img {
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(266deg)
    brightness(101%) contrast(101%);
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
</style>
