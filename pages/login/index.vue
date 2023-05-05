<template>
  <div class="w-[500px] font-open-sans">
    <h1 class="text-[40px] font-bold font-cabinet-grotesk">
      Masuk
    </h1>
    <p class="text-[14px] font-normal tracking-wider text-[#8B8B8B]">
      Masuk dan nikmati semua layanan di Opibox
    </p>

    <p v-if="errorsInput.status" class="text-red-500 text-sm">
      {{ errorsInput.message }}
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
        placeholder="Masukan email"
      >
      <div v-if="errors.email != ''" class="error-message text-red-500 text-sm">
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
          placeholder="Masukan kata sandi"
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
          Lupa kata sandi ?
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
      errorsInput: {
        message: 'Tess error',
        status: false
      },
      errors: {
        email: '',
        password: ''
      },
      validForm: false,
      showPassword: false
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
        this.errors.email = !this.validateEmail() ? 'Invalid Email' : ''
      }
    },
    'form.password': {
      handler () {
        this.errors.password = !this.validatePassword()
          ? 'Password is required and should contain at least 6 characters and one uppercase letter and one special character'
          : ''
      }
    }
  },
  methods: {
    ...mapActions('authentication', ['loginUser']),
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    validateEmail () {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(this.form.email)
    },
    validatePassword () {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[_\-!@#$%^&*()+=,./;'])(?=.*[0-9]).{6,}$/
      return passwordRegex.test(this.form.password)
    },
    async submitData (e) {
      e.preventDefault()
      const data = {
        email: this.form.email,
        password: this.form.password
      }

      const response = await this.loginUser({ data })
      console.log(response)
    }
  }
}
</script>
