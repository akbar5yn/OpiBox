<template>
  <div class="w-[500px] font-open-sans">
    <div v-if="!secondSection">
      <h1 class="text-[40px] font-bold font-cabinet-grotesk">
        Masuk
      </h1>
      <p class="text-[14px] font-normal tracking-wider text-[#8B8B8B]">
        Masuk dan nikmati semua layanan di Opibox
      </p>

      <p v-if="errors.default != ''" class="text-red-500 text-sm">
        {{ errors.default }}
      </p>

      <form
        action=""
        class="flex flex-col gap-y-3 mt-4"
        @submit="submitData($event)"
      >
        <label for="">Email</label>
        <input
          id="email"
          v-model="form.email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-full"
          type="text"
          name="email"
          placeholder="Masukkan email"
        >
        <div
          v-if="errors.email != ''"
          class="error-message text-red-500 text-sm"
        >
          {{ errors.email }}
        </div>

        <label for="">Kata sandi</label>
        <div
          class="password-input-wrapper flex w-full relative border rounded-lg"
        >
          <input
            id="password"
            v-model="form.password"
            class="px-2 py-3 text-[14px] w-[90%] outline-none"
            name="password"
            placeholder="Masukkan kata sandi"
            :type="showPassword ? 'text' : 'password'"
          >
          <img
            v-if="showPassword"
            src="../../assets/img/eye-slash.svg"
            alt="eye"
            class="absolute cursor-pointer self-center flex right-4"
            @click="showPassword = !showPassword"
          >
          <img
            v-if="!showPassword"
            src="../../assets/img/eye.svg"
            alt="eye"
            class="absolute cursor-pointer self-center flex right-4"
            @click="showPassword = !showPassword"
          >
        </div>
        <div
          v-if="errors.password != ''"
          class="error-message text-red-400 text-sm"
        >
          {{ errors.password }}
        </div>

        <div class="flex justify-end underline">
          <nuxt-link to="/forgot-password" class="mt-2 text-[#6C61E1]">
            Lupa kata sandi?
          </nuxt-link>
        </div>
        <div class="mt-3">
          <button
            type="submit"
            class="text-white p-3 w-full rounded-lg text-[18px]"
            :disabled="disabled"
            :class="{ 'bg-[#6C61E1]': !disabled, 'bg-gray-200': disabled }"
            @click="submitData"
          >
            Masuk
          </button>
          <p class="text-center mt-3 mb-5">
            <span class="text-[#8B8B8B]"> Belum memiliki akun? </span>
            <nuxt-link to="/register" class="text-[#6C61E1]">
              Daftar
            </nuxt-link>
          </p>
        </div>
      </form>
    </div>

    <modal-base
      v-if="showVerificationModal"
      class="text-center"
      @close-modal="showVerificationModal = false"
    >
      <h1 class="text-[#EB0700] text-[20px] font-bold font-cabinet-grotesk">
        Email Belum Terverifikasi!
      </h1>
      <p class="mt-1 text-[#19191B]">
        Harap cek kotak masuk emailmu terlebih dahulu<br>
        atau kirim ulang verifikasi
      </p>
      <button
        class="text-white p-3 w-full rounded-lg text-[18px] font-semibold bg-[#6C61E1] mt-5"
        @click="resendEmailVerification"
      >
        Kirim
      </button>
    </modal-base>

    <div v-if="secondSection" class="text-center h-[650px] items-center">
      <h1 class="text-[40px] font-cabinet-grotesk font normal text-[#19191B]">
        Verifikasi Email
      </h1>
      <p class="text-[14px] font-open-sans font-normal order-1 text-[#4A4A4F]">
        Kami telah mengirim pesan ke email:<br>
        <strong> {{ form.email }}</strong> <br>
        Cukup ikuti petunjuk untuk melakukan verifikasi email.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginView',
  layout: 'AuthView',

  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      disabled: true,
      errors: {
        email: '',
        password: '',
        default: ''
      },
      showPassword: false,
      showVerificationModal: false,
      patterCheckVerif: /verifikasi/gi,
      secondSection: false
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        if (this.validateEmail() && this.validatePassword()) {
          this.checkInput()
        } else {
          this.disabled = true
        }
      }
    },
    'form.email': {
      handler () {
        this.errors.email =
          this.form.email === ''
            ? 'Email harus diisi'
            : !this.validateEmail()
                ? 'Email tidak valid'
                : ''
      }
    },
    'form.password': {
      handler () {
        this.errors.password =
          this.form.password === ''
            ? 'Password harus diisi'
            : !this.validatePassword()
                ? 'Kata sandi minimal harus 8 karakter dan berisi kombinasi angka, huruf, dan karakter khusus (!$@%)'
                : ''
      }
    }
  },
  methods: {
    ...mapActions('authentication', ['loginUser', 'resendVerification']),
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    validateEmail () {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(this.form.email)
    },
    validatePassword () {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[_\-!@#$%^&*()+=,./;'])(?=.*[0-9]).{8,}$/
      return passwordRegex.test(this.form.password)
    },
    async submitData (e) {
      e.preventDefault()
      this.disabled = true
      const data = {
        email: this.form.email,
        password: this.form.password
      }

      const response = await this.loginUser({ data })
      console.log({ response })
      if (response.status === 200) {
        this.errors = {}
      } else if (this.patterCheckVerif.test(response.data.message)) {
        this.showVerificationModal = true
        this.errors = {}
      } else {
        this.errors.default = response.data.message
      }
      this.disabled = true
    },
    async resendEmailVerification () {
      const data = {
        email: this.form.email
      }
      const response = await this.resendVerification(data)
      if (response.status === 201) {
        this.secondSection = true
      } else {
        this.showVerificationModal = false
        this.errors.default = response.data.message
      }
    }
  }
}
</script>
