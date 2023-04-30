<template>
  <div class="flex">
    <div class="order-2 flex flex-col w-full">
      <!-- topbar -->
      <mainpage-top-bar />

      <Nuxt />
    </div>

    <!-- sidebar -->
    <mainpage-side-bar class="order-1" />
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
