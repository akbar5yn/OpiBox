<template>
  <div
    class="w-[18rem] h-screen fixed top-0 sm:w-[20rem] xl:sticky overflow-hidden xl:w-[25rem] bg-white"
    :class="[{ hidden: sideBar }]"
  >
    <div class="section1 flex flex-col border-r border-b border-[#CACACE]">
      <div class="mt-3 p-5 flex justify-between items-center">
        <!-- logo -->
        <icon-galery-opi-box />

        <!-- close bar -->
        <icon-galery-close-bar
          class="xl:hidden"
          :is-close="sideBar"
          @toggle-menu="handleSideBar"
        />
      </div>

      <!-- point -->
      <div class="p-5">
        <dashboard-point-box class="" />
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
    <div
      class="section2 border-r border-b border-[#CACACE] flex flex-col gap-7 p-8 h-full"
    >
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

  data () {
    return {
      sideBar: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkWindowSize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.checkWindowSize)
  },

  methods: {
    handleSideBar (data) {
      if (window.innerWidth <= 1280) {
        // this.sideBar = data.sideBar
        this.sideBar = true
      }
    },
    checkWindowSize () {
      if (window.innerWidth >= 1280) {
        this.sideBar = false
      }
    }
  }
}
</script>
