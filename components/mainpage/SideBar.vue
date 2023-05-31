<template>
  <!-- <div
    class="w-[18rem] h-full border fixed border-[#CACACE] overflow-y-auto top-0 sm:w-[20rem] xl:h-[100vh] xl:sticky xl:w-[25rem] bg-white"
    :class="{ 'hidden xl:block': sideBar }"
  > -->
  <div class="bg-white sidebar h-screen fixed xl:sticky">
    <div
      class="w-[264px] flex flex-col h-full border border-[#CACACE]"
      :class="{ 'hidden xl:flex': sideBar }"
    >
      <div class="top-sidebar flex flex-col">
        <div class="mt-3 pl-7 pt-2 flex justify-between items-center">
          <!-- logo -->
          <icon-galery-opi-box />

          <icon-galery-close-bar class="xl:hidden pr-5" />
        </div>

        <!-- point -->
        <div class="p-5 mt-5">
          <mainpage-point-box class="" />
        </div>

        <!-- nuxt link -->
        <ul class="flex flex-col gap-4 pb-5 font-cabinet-grotesk">
          <li class="">
            <nuxt-link
              class="flex gap-3 pl-8 py-3 items-center"
              active-class="bg-[#EBEAFB]"
              to="/Beranda"
            >
              <icon-galery-beranda-icon />
              Beranda
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              class="flex gap-3 pl-8 py-3 items-center"
              active-class="bg-[#EBEAFB]"
              to="/notification"
            >
              <icon-galery-noti-fication />
              Notifikasi
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              class="flex gap-3 pl-8 py-3 items-center"
              active-class="bg-[#EBEAFB]"
              to="/profile"
            >
              <icon-galery-my-profile />
              Profile
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              class="flex gap-3 pl-8 py-3 items-center"
              active-class="bg-[#EBEAFB]"
              to="/setting"
            >
              <icon-galery-setting-icon />
              Pengaturan
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- tim saya -->
      <div class="buttom-sidebar h-full">
        <mainpage-my-team />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SideBar',

  computed: {
    ...mapState('dashboard', ['sideBar'])
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
