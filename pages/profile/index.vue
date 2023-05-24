<template>
  <div class="flex flex-col py-8 px-4">
    <div class="flex justify-between">
      <h1 class="font-semibold text-2xl font-cabinet-grotesk">
        Aktivitas Saya
      </h1>
      <div class="flex text-[30px] font-cabinet-grotesk">
        <h1>Profil</h1>
      </div>
    </div>
    <div class="flex item-center mt-6">
      <div class="flex-grow min-h-screen">
        <div
          class="flex items-center text-normal justify-between text-center text-[16px] font-open-sans"
        >
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Suka
          </h2>
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Komentar
          </h2>
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Modifikasi
          </h2>
        </div>
        <div><!-- card project --></div>
      </div>
      <div class="max-w-[300px] w-full px-3 flex flex-col space-y-2">
        <div class="flex items-center justify-between">
          <img
            class="w-[55px] rounded-full"
            :src="detailUser.avatar.image.thumbnail.url"
          >
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
            :src="detailUser.avatar.image.thumbnail.url"
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
        avatar:
          this.$store.state.profile.detailUser.avatar.image.thumbnail.url ?? ''
      },
      errors: {
        name: '',
        bio: '',
        avatar: ''
      },
      editProfileVisibility: false
    }
  },
  computed: {
    ...mapState('profile', ['detailUser'])
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
