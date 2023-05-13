<template>
  <div class="flex">
    <div class="order-2 w-full">
      <Nuxt />
    </div>

    <!-- sidebar -->
    <mainpage-side-bar class="order-1" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  computed: {
    pageTitle () {
      // Mengambil nama halaman dari objek route
      return this.$route.name
    }
  }
}
</script>
