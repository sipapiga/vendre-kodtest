<template>
  <button
      @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>