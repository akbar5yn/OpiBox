<template>
  <div class="flex flex-col space-y-6">
    <h1 class="text-2xl font-semibold">
      Ubah Kata Sandi
    </h1>
    <p class="text-[#8B8B8B]">
      Kata sandi minimal harus enam karakter dan berisi kombinasi angka, huruf,
      dan karakter khusus (!$@%)
    </p>
    <div
      v-if="response.status != ''"
      class="error-message text-sm max-w-[500px] text-left"
      :class="{
        'text-red-500': response.status != '200',
        'text-green-500': response.status == '200'
      }"
    >
      {{ response.message }}
    </div>
    <form class="flex flex-col space-y-4" @submit.prevent="updateUserPassword">
      <div class="flex flex-col space-y-2">
        <label for="old-password">Kata sandi saat ini</label>
        <div class="relative flex items-center">
          <input
            id="old-password"
            v-model="form.current_password"
            class="p-2 border border-gray-400 rounded-lg flex-grow w-full"
            :type="currentPasswordVisibility ? 'text' : 'password'"
            placeholder="Masukkan kata sandi lama"
          >
          <img
            v-if="currentPasswordVisibility"
            src="../assets/img/eye-slash.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="currentPasswordVisibility = !currentPasswordVisibility"
          >
          <img
            v-if="!currentPasswordVisibility"
            src="../assets/img/eye.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="currentPasswordVisibility = !currentPasswordVisibility"
          >
        </div>
        <div
          v-if="errors.current_password != ''"
          class="error-message text-red-500 text-sm max-w-[500px] text-left"
        >
          {{ errors.current_password }}
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="new-password">Kata sandi baru</label>
        <div class="relative flex items-center">
          <input
            id="new-password"
            v-model="form.newPassword"
            class="p-2 border border-gray-400 rounded-lg flex-grow w-full"
            :type="newPasswordVisibility ? 'text' : 'password'"
            placeholder="Masukkan kata sandi baru"
          >
          <img
            v-if="newPasswordVisibility"
            src="../assets/img/eye-slash.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="newPasswordVisibility = !newPasswordVisibility"
          >
          <img
            v-if="!newPasswordVisibility"
            src="../assets/img/eye.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="newPasswordVisibility = !newPasswordVisibility"
          >
        </div>
        <div
          v-if="errors.password != ''"
          class="error-message text-red-500 text-sm max-w-[500px] text-left"
        >
          {{ errors.password }}
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="confirm-new-password">Ulangi kata sandi baru</label>
        <div class="relative flex items-center">
          <input
            id="confirm-new-password"
            v-model="form.confirmNewPassword"
            class="p-2 border border-gray-400 rounded-lg flex-grow w-full"
            :type="confirmNewPasswordVisibility ? 'text' : 'password'"
            placeholder="Ulangi kata sandi baru"
          >
          <img
            v-if="confirmNewPasswordVisibility"
            src="../assets/img/eye-slash.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="
              confirmNewPasswordVisibility = !confirmNewPasswordVisibility
            "
          >
          <img
            v-if="!confirmNewPasswordVisibility"
            src="../assets/img/eye.svg"
            alt="eye"
            class="absolute cursor-pointer right-4"
            @click="
              confirmNewPasswordVisibility = !confirmNewPasswordVisibility
            "
          >
        </div>
        <div
          v-if="errors.confirmNewPassword != ''"
          class="error-message text-red-500 text-sm max-w-[500px] text-left"
        >
          {{ errors.confirmNewPassword }}
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
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'UpdatePassword',
  data () {
    return {
      disabled: true,
      currentPasswordVisibility: false,
      newPasswordVisibility: false,
      confirmNewPasswordVisibility: false,
      form: {
        current_password: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      errors: {
        current_password: '',
        password: '',
        confirmNewPassword: ''
      },
      response: {
        status: '',
        message: ''
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        if (this.passwordMatches() && this.validatePassword()) {
          this.checkInput()
        } else {
          this.disabled = true
        }
      }
    },
    'form.newPassword': {
      handler () {
        this.errors.newPassword =
          this.form.newPassword === ''
            ? 'Password baru harus diisi'
            : !this.validatePassword()
                ? 'Kata sandi minimal harus 6 karakter dan berisi kombinasi angka, huruf, dan karakter khusus (!$@%)'
                : ''
        this.errors.confirmNewPassword = !this.passwordMatches()
          ? 'Kata sandi tidak cocok'
          : ''
      }
    },
    'form.confirmNewPassword': {
      handler () {
        this.errors.confirmNewPassword = !this.passwordMatches()
          ? 'Kata sandi tidak cocok'
          : ''
      }
    }
  },
  methods: {
    ...mapActions('password', ['updatePassword']),
    async updateUserPassword () {
      this.disabled = true
      const data = {
        current_password: this.form.current_password,
        password: this.form.newPassword
      }
      const response = await this.updatePassword(data)
      /* this.response.status =
        response.status === 200 ? response.status : response.data.status
      this.response.message =
        response.status === 200 ? response.message : response.data.message */

      console.log({ response })

      if (response?.status === 200) {
        this.$toast.success(response.message)
        this.response.status = response.status
        // this.response.message = response.message
        this.errors = {}
      } else if (Object.keys(response.data.message).length > 0) {
        Object.keys(response.data.message).forEach((key) => {
          this.errors[key] = response.data.message[key]
        })
      } else {
        this.response.status = response.data.status
        this.response.message = response.data.message
      }

      this.disabled = false
    },
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    passwordMatches () {
      return this.form.newPassword === this.form.confirmNewPassword
    },
    validatePassword () {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[_\-!@#$%^&*()+=,./;'])(?=.*[0-9]).{6,}$/
      return passwordRegex.test(this.form.newPassword)
    }
  }
}
</script>
