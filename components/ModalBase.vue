<template>
  <div
    class="fixed inset-0 flex justify-center bg-[#000000] bg-opacity-50 z-50 overflow-y-auto"
  >
    <div
      class="fixed top-0 bottom-0 left-0 right-0"
      @click="$emit('close-modal')"
    />
    <div
      class="modal-base w-full h-fit rounded-xl p-8 relative bg-white self-center transition duration-150 ease-in-out"
      :style="containerCss"
    >
      <img
        class="w-3 absolute right-4 top-4 cursor-pointer"
        src="../assets/img/close.svg"
        alt="Close Icon"
        @click="$emit('close-modal')"
      >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalBase',
  props: {
    width: {
      type: String,
      default: ''
    }
  },
  computed: {
    containerCss () {
      return {
        '--width': this.width + 'px'
      }
    }
  }
}
</script>

<style scoped>
.modal-base {
  max-width: var(--width);
}
</style>
