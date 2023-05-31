<template>
  <div class="h-[650px] items-center">
    <div v-if="!secondSection" class="text-center">
      <h1 class="text-[50px] font-cabinet-grotesk font-normal text-[#19191B]">
        Ubah Kata Sandi
      </h1>
      <p
        class="text-[14px] font-normal font-open-sans order-1 text-[#4A4A4F]"
        style="line-height: 2"
      >
        Kata sandi minimal harus 8 karakter dan berisi kombinasi angka,<br>
        / huruf, dan karakter khusus (!$@%)
      </p>
      <form
        action=""
        class="flex flex-col gap-y-5 mt-4"
        @submit.prevent="submitData"
      >
        <div class="flex flex-col gap-y-1">
          <label
            for="new-password"
            class="self-start text-[16px] font-normal text-[#19191B]"
            style="font-family: 'Open Sans', sans-serif"
          >Kata sandi baru</label>
          <div
            class="password-input-wrapper flex w-full relative border rounded-lg"
          >
            <input
              id="new-password"
              v-model="form.newPassword"
              class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-[500px]"
              :type="showNewPassword ? 'text' : 'password'"
              placeholder="Masukkan kata sandi"
              style="font-family: 'Open Sans', sans-serif"
            >
            <img
              v-if="showNewPassword"
              src="../../assets/img/eye-slash.svg"
              alt="eye"
              class="absolute cursor-pointer self-center flex right-4"
              @click="showNewPassword = !showNewPassword"
            >
            <img
              v-if="!showNewPassword"
              src="../../assets/img/eye.svg"
              alt="eye"
              class="absolute cursor-pointer self-center flex right-4"
              @click="showNewPassword = !showNewPassword"
            >
          </div>

          <div
            v-if="errors.newPassword != ''"
            class="error-message text-red-500 text-sm max-w-[500px] text-left"
          >
            {{ errors.newPassword }}
          </div>
        </div>
        <div class="flex flex-col gap-y-1">
          <label
            for="confirm-new-password"
            class="self-start text-[16px] font-normal text-[#19191B]"
            style="font-family: 'Open Sans', sans-serif"
          >Ulangi kata sandi baru</label>
          <div
            class="password-input-wrapper flex w-full relative border rounded-lg"
          >
            <input
              id="confirm-new-password"
              v-model="form.confirmNewPassword"
              class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-[500px]"
              :type="showConfirmNewPassword ? 'text' : 'password'"
              placeholder="Ulangi kata sandi baru"
              style="font-family: 'Open Sans', sans-serif"
            >
            <img
              v-if="showConfirmNewPassword"
              src="../../assets/img/eye-slash.svg"
              alt="eye"
              class="absolute cursor-pointer self-center flex right-4"
              @click="showConfirmNewPassword = !showConfirmNewPassword"
            >
            <img
              v-if="!showConfirmNewPassword"
              src="../../assets/img/eye.svg"
              alt="eye"
              class="absolute cursor-pointer self-center flex right-4"
              @click="showConfirmNewPassword = !showConfirmNewPassword"
            >
          </div>

          <div
            v-if="errors.confirmNewPassword != ''"
            class="error-message text-red-500 text-sm max-w-[500px] text-left"
          >
            {{ errors.confirmNewPassword }}
          </div>
        </div>

        <div
          v-if="errors.message != ''"
          class="error-message text-red-500 text-sm max-w-[500px] text-left"
        >
          {{ errors.message }}
        </div>

        <button
          :disabled="disabled"
          class="text-white bg-[#6C61E1] p-3 w-full rounded-lg text-[18px] font-normal font-cabinet-grotesk mt-8"
          :class="{ ['bg-[#6C61E1]']: !disabled, ['bg-gray-200']: disabled }"
        >
          Kirim
        </button>
      </form>
    </div>
    <div v-if="secondSection" class="h-[650px] items-center">
      <div class="text-center">
        <h1 class="text-[40px] font-cabinet-grotesk font-normal text-[#19191B]">
          Kata Sandi<br>
          Berhasil Diperbarui
        </h1>
        <p
          class="text-[14px] font-normal font-open-sans order-1 text-[#4A4A4F]"
          style="line-height: 2"
        >
          Kata sandi baru telah ditetapkan dan Anda telah masuk
        </p>
      </div>
      <nuxt-link to="/">
        <button
          class="text-white bg-[#6C61E1] p-3 w-full rounded-lg text-[18px] font-normal font-cabinet-grotesk mt-8"
        >
          Cek Dashboard
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'AuthView',
  data () {
    return {
      form: {
        newPassword: '',
        confirmNewPassword: ''
      },
      errors: {
        newPassword: '',
        confirmNewPassword: ''
      },
      secondSection: false,
      disabled: true,
      showNewPassword: false,
      showConfirmNewPassword: false
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
                ? 'Kata sandi minimal harus 8 karakter dan berisi kombinasi angka, huruf, dan karakter khusus (!$@%)'
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
    ...mapActions('password', ['resetPassword']),
    async submitData () {
      const payload = {
        password: this.form.newPassword,
        token: this.$route.query.reset_password_token
      }
      const response = await this.resetPassword(payload)
      if (response.status === 200) {
        this.secondSection = !this.secondSection
      } else {
        this.errors.message = response.data.message
      }
    },
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    passwordMatches () {
      return this.form.newPassword === this.form.confirmNewPassword
    },
    validatePassword () {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[_\-!@#$%^&*()+=,./;'])(?=.*[0-9]).{8,}$/
      return passwordRegex.test(this.form.newPassword)
    }
  }
}
</script>
