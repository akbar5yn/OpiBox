<template>
  <div
    class="fixed inset-0 flex justify-center bg-[#000000] bg-opacity-50 z-50 overflow-y-auto"
  >
    <div class="h-fit rounded-xl p-8 relative bg-white self-center">
      <img
        class="w-3 absolute right-4 top-4"
        src="../assets/img/close.svg"
        alt="Close Icon"
      >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalBase'
}
</script>
