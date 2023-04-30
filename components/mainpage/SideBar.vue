<template>
  <div
    class="w-[18rem] h-full border fixed border-[#CACACE] overflow-y-auto top-0 sm:w-[20rem] xl:h-[100vh] xl:sticky xl:w-[25rem] bg-white"
    :class="{ 'hidden xl:block': sideBar }"
  >
    <div class="section1 flex flex-col">
      <div class="mt-3 p-5 flex justify-between items-center">
        <!-- logo -->
        <icon-galery-opi-box />

        <icon-galery-close-bar class="xl:hidden" />
      </div>

      <!-- point -->
      <div class="p-5">
        <mainpage-point-box class="" />
      </div>

      <!-- nuxt link -->
      <ul class="flex flex-col gap-4 pb-5">
        <li class="">
          <nuxt-link
            class="flex gap-3 pl-8 py-3"
            active-class="bg-[#EBEAFB]"
            to="#dash"
          >
            <icon-galery-my-project />
            Proyek Saya
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link
            class="flex gap-3 pl-8 py-3"
            active-class="bg-[#EBEAFB]"
            to="#shared"
          >
            <icon-galery-shared-with-me />
            Dibagikan dengan Saya
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link
            class="flex gap-3 pl-8 py-3"
            active-class="bg-[#EBEAFB]"
            to="#draft"
          >
            <icon-galery-draft-project />
            Draft
          </nuxt-link>
        </li>
      </ul>
    </div>
    <hr class="border-1 border-gray-300">
    <div class="section2 flex flex-col gap-7 p-8">
      <div class="flex justify-between">
        <h1 class="text-[20px] font-medium">
          Tim Saya
        </h1>
        <button>
          <icon-galery-arrow-up />
        </button>
      </div>
      <div class="flex items-center gap-3">
        <icon-galery-add-team />
        <p>Buat Tim Baru</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  computed: {
    sideBar () {
      return this.$store.state.sideBar
    }
  },

  mounted () {
    window.addEventListener('resize', this.checkWindowSize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.checkWindowSize)
  }
}
</script>
