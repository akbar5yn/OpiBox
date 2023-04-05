<template>
  <div class="fixed z-50 inset-0 flex items-center justify-center">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full top-0"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentModal'
}
</script>
