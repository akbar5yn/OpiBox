<template>
  <div
    class="w-[18rem] h-full border fixed border-[#CACACE] overflow-y-auto top-0 sm:w-[20rem] xl:h-[100vh] xl:sticky xl:w-[25rem] bg-white"
    :class="{ 'hidden xl:block': sideBar }"
  >
    <div class="section1 flex flex-col">
      <div class="mt-3 pl-7 pt-2 flex justify-between items-center">
        <!-- logo -->
        <icon-galery-opi-box />

        <icon-galery-close-bar class="xl:hidden" />
      </div>

      <!-- point -->
      <div class="p-5 mt-5">
        <mainpage-point-box class="" />
      </div>

      <!-- nuxt link -->
      <ul class="flex flex-col gap-4 pb-5">
        <li class="">
          <nuxt-link
            class="flex gap-3 pl-8 py-3"
            active-class="bg-[#EBEAFB]"
            to="/mainpage/#myProject"
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

    <!-- tim saya -->
    <mainpage-my-team />
    <button class="absolute bottom-0" @click="logoutUser">
      Logout
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SideBar',

  computed: {
    ...mapState('dashboard', ['sideBar'])

    // sideBar () {
    //   return this.$store.state.sideBar
    // }
  },

  methods: {
    ...mapActions('authentication', ['logoutUser'])
  },

  mounted () {
    window.addEventListener('resize', this.checkWindowSize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.checkWindowSize)
  }
}
</script>
