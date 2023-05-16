<template>
  <div class="flex">
    <div class="order-2 flex flex-col w-full">
      <div>
        <div
          v-if="isBeranda"
          class="font-cabinet-grotesk text-3xl font-[600] py-9 px-5 flex items-center gap-4"
        >
          <NuxtLink to="">
            Beranda
          </NuxtLink>
        </div>
        <div
          v-if="deepLink"
          class="font-cabinet-grotesk text-3xl font-[600] py-9 px-5 flex items-center gap-4"
        >
          <NuxtLink to="/beranda" class="text-[#95959D]">
            Beranda
          </NuxtLink>
          <icon-galery-arrow-icon class="rotate-90" width="25" />
          <NuxtLink to="">
            Dibagikan ke Saya
          </NuxtLink>
        </div>
        <!-- topbar -->
        <mainpage-top-bar />
      </div>

      <Nuxt />
    </div>

    <!-- sidebar -->
    <mainpage-side-bar class="order-1" />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  computed: {
    isBeranda () {
      return this.$route.name === 'Beranda'
    },
    deepLink () {
      return this.$route.path.startsWith('/beranda/my-project')
    }
  }
}
</script>
