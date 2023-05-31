<template>
  <div>
    <h1 class="text-2xl font-semibold font-cabinet-grotesk">
      Ubah Profil
    </h1>
    <form class="flex space-x-12 mt-10" @submit.prevent="changeProfile">
      <div>
        <img
          ref="avatar"
          class="max-w-[100px] max-h-[100px] h-full w-full rounded-full"
          :src="profileImage"
        >
        <button class="font-open-sans font-normal text-[16px]">
          Ubah foto profil
        </button>
        <input
          type="file"
          accept="image/png, image/jpeg"
          @change="handleImage($event)"
        >
      </div>
      <div class="w-full font-open-sans text-[#19191B]">
        <div class="flex flex-col space-y-4">
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
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
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
      previewAvatar: ''
    }
  },
  computed: {
    ...mapState('profile', ['detailUser']),
    profileImage () {
      return this.detailUser.avatar.thumbnail_url !== null
        ? this.detailUser.avatar.thumbnail_url
        : require('../assets/img/defaultAvatar.png')
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
    ...mapActions('profile', ['updateProfile']),
    async changeProfile () {
      const data = {
        name: this.form.name,
        bio: this.form.bio,
        avatar: this.form.avatar
      }
      const response = await this.updateProfile(data)
      if (response.status === 200) {
        this.$toast.success(response.message)
      } else {
        this.$toast.error(response.data.message)
      }
    },
    validateUsername () {
      return this.form.name.length > 0
    },
    validateFullName () {
      const fullNameRegex = /^[a-zA-Z\s]+$/
      return fullNameRegex.test(this.form.name)
    },
    readFile (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => resolve(e.target.result)
        reader.onerror = err => reject(err)
        reader.readAsDataURL(file)
      })
    },
    async handleImage (e) {
      this.form.avatar = e.target.files[0]
      this.previewAvatar = await this.readFile(e.target.files[0])
      this.$refs.avatar.src = this.previewAvatar
    }
  }
}
</script>
