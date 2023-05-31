<template>
  <div class="px-5 h-full flex flex-col justify-evenly">
    <!-- my project -->
    <section>
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Proyek Saya
        </h1>
        <nuxt-link
          v-if="getMyProject.length > 3"
          class="text-[#62626A]"
          to="/beranda/my-project"
        >
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-project
        class="mt-[14px]"
        @show-project-report="handleProjectReport"
      />
    </section>

    <!-- my draft -->
    <section class="mt-5">
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Dibagikan ke Saya
        </h1>
        <nuxt-link class="text-[#62626A]" to="">
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-draft class="mt-[14px]" />
    </section>

    <!-- show modal lihat laporan -->
    <ModalBase
      v-if="projectReportVisibility"
      width="500"
      @close-modal="projectReportVisibility = false"
    >
      <div>
        <h1 class="font-bold text-[20px] font-cabinet-grotesk">
          Laporan Proyek
        </h1>
        <hr class="border border-gray-300 absolute top-20 left-0 w-full">
        <div class="text-center px-4 py-6 mt-4">
          <img
            ref="avatar"
            class="max-w-[100px] max-h-[100px] h-full w-full rounded-full mx-auto mt-2"
            :src="profileImage"
          >
          <h2 class="font-open-sans font-normal text-[18px] mt-2">
            Pemilik
          </h2>
          <p class="font-cabinet-grotesk font-bold text-[20px] mt-2">
            Nama Pengguna
          </p>
          <div class="flex items-center justify-between w-full mt-4">
            <div class="flex items-center space-x-4">
              <IconGaleryLikeIcon fill="none" stroke="black" />
              <p>6 Suka</p>
            </div>
            <div class="flex items-center space-x-4">
              <IconGaleryCommentIcon />
              <p>6 Komentar</p>
            </div>
            <div class="flex items-center space-x-4">
              <IconGaleryRetweetIcon />
              <p>6 Modifikasi</p>
            </div>
          </div>
          <div class="grid grid-rows-2 w-full text-left gap-y-4 mt-10">
            <div class="grid grid-cols-2">
              <span>Waktu dibuat</span>
              <span>30/03/2023 06:00</span>
            </div>
            <div class="grid grid-cols-2">
              <span>Dibagikan untuk</span>
              <span>Tim Ramadan, Tim Isekai</span>
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Mainpage',
  layout: 'MainPage',
  middleware: 'auth',
  data () {
    return {
      projectReportVisibility: false
    }
  },
  computed: {
    ...mapGetters('project', ['getMyProject']),
    profileImage () {
      return require('../../assets/img/defaultAvatar.png')
    }
  },
  methods: {
    handleProjectReport () {
      this.projectReportVisibility = true
    }
  }
}
</script>
