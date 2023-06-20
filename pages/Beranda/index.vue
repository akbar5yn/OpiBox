<template>
  <main class="h-full relative">
    <div
      class="px-5 h-full flex flex-col pt-5"
      :class="{
        'justify-evenly':
          getProjectSahred.length > 0 && getMyProject.length > 0,
        'justify-start': getProjectSahred.length === 0
      }"
    >
      <!-- my project -->
      <section v-if="getMyProject.length > 0">
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
      <section v-if="getProjectSahred.length > 0">
        <div class="flex justify-between items-center font-cabinet-grotesk">
          <h1 class="text-[20px] font-semibold">
            Dibagikan ke Saya
          </h1>
          <nuxt-link class="text-[#62626A]" to="">
            Lihat semua
          </nuxt-link>
        </div>
        <mainpage-shared-with-me class="mt-[14px]" />
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

    <!-- project empty -->
    <section
      v-if="getMyProject.length == 0 && getProjectSahred == 0"
      class="flex flex-col item-center justify-center text-center w-full gap-2 font-cabinet-grotesk absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <icon-galery-file-icon class="self-center mb-5" />
      <h1 class="text-[20px]">
        Anda belum memiliki proyek
      </h1>
      <p class="text-[14px] font-light">
        Yuk, buat proyek sekarang!
      </p>
    </section>

    <!-- create proyek -->
    <div class="fixed bottom-5 right-5 laptop:hidden">
      <label
        for="image"
        class="bg-[#6C61E1] text-white font-cabinet grotesk flex min-w-max px-[13px] py-1 items-center justify-center gap-3 rounded-md cursor-pointer"
      >
        <icon-galery-add-project width="15" />
        Buat Proyek
      </label>
      <input
        id="image"
        ref="inputImg"
        type="file"
        name="image"
        accept="image/*"
        class="hidden"
        multiple
        @change="displayImage"
      >
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Mainpage',
  layout: 'MainPage',
  middleware: 'auth',
  data () {
    return {
      projectReportVisibility: false
    }
  },
  mounted () {
    this.fetchMyProject()
    this.getSharedProject()
  },
  computed: {
    ...mapGetters('project', [
      'getMyProject',
      'getProjectSahred',
      'setSelectedImg',
      'setShowPreview'
    ]),
    profileImage () {
      return require('../../assets/img/defaultAvatar.png')
    }
  },
  methods: {
    ...mapActions('project', ['fetchMyProject', 'getSharedProject']),
    handleProjectReport () {
      this.projectReportVisibility = true
    },
    displayImage (event) {
      const files = event.target.files

      Object.keys(files).forEach(async (key) => {
        this.dataFile.push({
          file: files[key],
          base64: await this.readFromFile(files[key])
        })
        this.setSelectedImg({
          file: files[key],
          base64: await this.readFromFile(files[key])
        })
      })
    },

    readFromFile (file) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader()
        fr.onload = () => {
          const base64 = fr.result

          resolve(base64)

          if (this.dataFile.length > 0 && base64) {
            this.setShowPreview(true)
            this.$router.push({
              name: 'CreateProject',
              params: { selectedImg: this.dataFile }
            })
          }
        }
        fr.onerror = err => reject(err)
        fr.readAsDataURL(file)
      })
    }
  }
}
</script>
