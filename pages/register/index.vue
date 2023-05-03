<template>
  <div class="w-[500px]">
    <h1 class="text-[40px] font-normal">
      Daftar
    </h1>
    <p class="text-[14px] font-normal tracking-wider">
      Lengkapi data di bawah ini untuk mendaftarkan akun
    </p>
    <form class="flex flex-col gap-y-3 mt-4" @submit.prevent="register">
      <label for="nama">Nama</label>
      <input
        id="nama"
        v-model="nama"
        class="border rounded-lg px-2 py-3 text-[14px] outline-none"
        type="text"
        name="nama"
        placeholder="Masukan nama"
      >
      <span v-if="!usernameValid" class="error-message">
        Username is required
      </span>

      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        class="border rounded-lg px-2 py-3 text-[14px] outline-none"
        type="email"
        name="email"
        placeholder="Masukan email"
      >
      <div v-if="!emailValid" class="error-message">
        Email is not valid
      </div>

      <label for="password">Kata sandi</label>
      <div class="password-input-wrapper flex relative border rounded-lg">
        <input
          id="password"
          v-model="password"
          class="px-2 py-3 w-[90%] text-[14px] outline-none"
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
      <div v-if="!passwordValid" class="error-message">
        Password is required and should contain at least 6 characters and one
        uppercase letter and one special character
      </div>

      <label for="konfirmasiPassword">Konfirmasi kata sandi</label>
      <div class="password-input-wrapper flex relative border rounded-lg">
        <input
          id="konfirmasiPassword"
          v-model="konfirmasiPassword"
          class="px-2 py-3 w-[90%] text-[14px] outline-none"
          name="password"
          placeholder="Masukan kata sandi"
          :type="showPasswordConfirmed ? 'text' : 'password'"
        >
        <img
          v-if="showPasswordConfirmed"
          src="../../assets/img/eye-slash.svg"
          alt="eye"
          class="absolute cursor-pointer self-center flex right-4"
          @click="showPasswordConfirmed = !showPasswordConfirmed"
        >
        <img
          v-if="!showPasswordConfirmed"
          src="../../assets/img/eye.svg"
          alt="eye"
          class="absolute cursor-pointer self-center flex right-4"
          @click="showPasswordConfirmed = !showPasswordConfirmed"
        >
      </div>
      <div v-if="!retypePasswordValid" class="error-message">
        Password does not match
      </div>

      <div class="mt-3">
        <button
          type="submit"
          :disabled="!formValid"
          class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
          :class="{ 'btn-disabled': !formValid, 'btn-enabled': formValid }"
        >
          Daftar
        </button>

        <p class="text-center mt-3 mb-5">
          <span class="text-[#8B8B8B]"> Sudah memiliki akun? </span>
          <nuxt-link to="/login">
            Masuk
          </nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  layout: 'AuthView',

  data () {
    return {
      showPassword: false,
      showPasswordConfirmed: false,

      nama: '',
      email: '',
      password: '',
      konfirmasiPassword: '',
      usernameValid: true,
      emailValid: true,
      passwordValid: true,
      retypePasswordValid: true
    }
  },

  computed: {
    formValid () {
      return (
        this.usernameValid &&
        this.emailValid &&
        this.passwordValid &&
        this.retypePasswordValid &&
        this.nama &&
        this.email &&
        this.password &&
        this.konfirmasiPassword
      )
    }
  },

  watch: {
    nama: 'validateUsername',
    email: 'validateEmail',
    password: 'validatePassword',
    konfirmasiPassword: 'validateRetypePassword'
  },

  methods: {
    register () {
      // handle form submission
    },

    validateUsername () {
      this.usernameValid = this.nama.length > 0
    },

    validateEmail () {
      const emailRegex = /\S+@\S+\.\S+/
      this.emailValid = emailRegex.test(this.email)
    },

    validatePassword () {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[_\-!@#$%^&*()+=,./;'])(?=.*[0-9]).{6,}$/

      this.passwordValid = passwordRegex.test(this.password)

      if (
        this.konfirmasiPassword !== '' &&
        this.password !== this.konfirmasiPassword
      ) {
        this.retypePasswordValid = false
      } else {
        this.retypePasswordValid = true
      }
    },

    validateRetypePassword () {
      this.retypePasswordValid = this.konfirmasiPassword === this.password
    }
  }
}
</script>

<style scoped>
.error-message {
  color: rgb(250, 132, 132);
}
.btn-disabled {
  background-color: #c5c5c5;
  color: #000;
}

.btn-enabled {
  background-color: #6c61e1;
  color: #fff;
}
</style>
