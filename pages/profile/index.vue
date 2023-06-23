<template>
  <div class="flex flex-col py-8 px-4 h-full">
    <div
      class="flex flex-col laptop:flex laptop:flex-row item-center tablet:h-full"
    >
      <div class="flex-grow mobile:order-2 laptop:order-1 mobile: mt-10">
        <div class="flex items-center gap-2">
          <h1 class="font-semibold text-2xl font-cabinet-grotesk">
            Aktivitas Saya
          </h1>
        </div>
        <div
          class="flex-col w-full laptop:flex laptop:flex-row items-center justify-between text-center text-sm tablet:text-[16px] font-cabinet-grotesk pt-6"
        >
          <button
            class="w-full py-2 border-b-2 border-gray-300 transition-all duration-300"
            :class="{
              'border-b-[#6C61E1] font-bold': activity === 'like',
              'font-normal': activity !== 'like'
            }"
            @click="activity = 'like'"
          >
            Riwayat Suka
          </button>
          <button
            class="w-full py-2 border-b-2 border-gray-300 transition-all duration-300"
            :class="{
              'border-b-[#6C61E1] font-bold': activity === 'comment',
              'font-normal': activity !== 'comment'
            }"
            @click="activity = 'comment'"
          >
            Riwayat Komentar
          </button>
          <button
            class="w-full py-2 border-b-2 border-gray-300 transition-all duration-300"
            :class="{
              'border-b-[#6C61E1] font-bold': activity === 'modification',
              'font-normal': activity !== 'modification'
            }"
            @click="activity = 'modification'"
          >
            Riwayat Modifikasi
          </button>
        </div>
        <div>
          <!-- history like -->
          <div v-if="activity === 'like'">
            <history-like-history />
          </div>

          <!-- history comment -->
          <div v-if="activity === 'comment'">
            <history-comment-history />
          </div>

          <!-- history modification -->
          <div v-if="activity === 'modification'">
            <history-modification-history />
          </div>
        </div>
      </div>
      <div
        class="max-w-[300px] w-full mobile:h-fit px-3 flex flex-col space-y-2 order-1"
      >
        <div
          class="flex text-2xl font-cabinet-grotesk font-semibold items-center"
        >
          <mainpage-hamburger-button class="laptop:hidden" color="black" />
          <h1>Profil</h1>
        </div>
        <div class="flex items-center justify-between">
          <img class="w-[55px] rounded-full" :src="profileImage">
          <!-- <div class="flex text-[30px]">
            <h1>Profil</h1>
          </div> -->
        </div>
        <span class="font-semibold">{{ detailUser.name }}</span>
        <span class="text-sm font-[400] text-opacity-50">
          {{ detailUser.email }}
        </span>
        <p
          class="outline outline-gray-300 text-sm p-2 rounded-lg italic text-gray-300 font-open-sans"
        >
          <span v-if="!detailUser.bio">Belum ada deskripsi</span>
          <span v-if="detailUser.bio">{{ detailUser.bio }}</span>
        </p>
      </div>
    </div>

    <ModalBase
      v-if="editProfileVisibility"
      width="800"
      @close-modal="editProfileVisibility = false"
    >
      <h1 class="text-2xl font-semibold font-cabinet-grotesk">
        Ubah Profile
      </h1>
      <div class="flex items-center space-x-12 mt-10">
        <div>
          <img
            class="max-w-[120px] w-full rounded-full"
            :src="detailUser.avatar.thumbnail_url"
          >
          <button>Ubah foto profile</button>
        </div>
        <div class="w-full">
          <form class="flex flex-col space-y-4" @submit.prevent="changeProfile">
            <div class="flex flex-col space-y-2">
              <label>Nama</label>
              <input
                v-model="form.name"
                class="border border-gray-300 p-2 rounded-lg"
                type="text"
              >
              <div
                v-if="errors.name != ''"
                class="error-message text-red-500 text-sm"
              >
                {{ errors.name }}
              </div>
            </div>
            <div class="flex flex-col space-y-2 font-open-sans">
              <label>Email</label>
              <input
                class="border border-gray-300 p-2 rounded-lg bg-gray-200 text-gray-400"
                type="email"
                :value="detailUser.email"
                disabled
              >
            </div>
            <div class="flex flex-col space-y-2">
              <label>Deskripsi</label>
              <textarea
                v-model="form.bio"
                class="border border-gray-300 p-2 rounded-lg w-full h-[150px]"
                placeholder="Masukkan deskripsi"
              />
              <div
                v-if="errors.bio != ''"
                class="error-message text-red-500 text-sm"
              >
                {{ errors.bio }}
              </div>
            </div>
            <button
              class="text-white p-3 w-full max-w-[200px] rounded-lg text-[18px] ml-auto"
              :disabled="disabled"
              :class="{ 'bg-[#6C61E1]': !disabled, 'bg-gray-200': disabled }"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </ModalBase>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  layout: 'MainPage',

  middleware: 'auth',
  async asyncData ({ store }) {
    await store.dispatch('profile/getProfile')
  },

  data () {
    return {
      disabled: true,
      form: {
        name: this.$store.state.profile.detailUser.name ?? '',
        bio: this.$store.state.profile.detailUser.bio ?? '',
        avatar: this.$store.state.profile.detailUser.avatar.thumbnail_url ?? ''
      },
      errors: {
        name: '',
        bio: '',
        avatar: ''
      },
      editProfileVisibility: false,
      activity: 'like',
      showElement: false
    }
  },

  computed: {
    ...mapState('profile', ['detailUser']),

    profileImage () {
      return this.detailUser.avatar.thumbnail_url !== null
        ? this.detailUser.avatar.thumbnail_url
        : require('../../assets/img/defaultAvatar.png')
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.disabled = !(this.validateUsername() && this.validateFullName())
      }
    },
    'form.name': {
      handler () {
        this.errors.name = !this.validateUsername()
          ? 'Nama harus diisi'
          : !this.validateFullName()
              ? 'Nama hanya boleh berisi huruf saja'
              : ''
      }
    }
  },
  methods: {
    changeProfile () {
      const data = {
        name: this.form.name,
        bio: this.form.bio
      }
      console.log({ data })
    },
    validateUsername () {
      return this.form.name.length > 0
    },
    validateFullName () {
      const fullNameRegex = /^[a-zA-Z\s]+$/
      return fullNameRegex.test(this.form.name)
    }
  }
}
</script>
