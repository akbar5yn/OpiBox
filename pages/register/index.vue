<template>
  <div class="w-[500px]">
    <div v-if="!secondSection">
      <h1 class="text-[40px] font-normal">
        Daftar
      </h1>
      <p class="text-[14px] font-normal tracking-wider">
        Lengkapi data di bawah ini untuk mendaftarkan akun
      </p>

      <p v-if="errors.default != ''" class="text-red-500 text-sm">
        {{ errors.default }}
      </p>

      <form class="flex flex-col gap-y-3 mt-4" @submit.prevent="register">
        <label for="name">Nama</label>
        <input
          id="name"
          v-model="form.name"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none"
          type="text"
          name="name"
          placeholder="Masukkan nama"
        >
        <div
          v-if="errors.name !== ''"
          class="error-message text-red-500 text-sm"
        >
          {{ errors.name }}
        </div>

        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none"
          type="email"
          name="email"
          placeholder="Masukkan email"
        >
        <div
          v-if="errors.email !== ''"
          class="error-message text-red-500 text-sm"
        >
          {{ errors.email }}
        </div>

        <label for="password">Kata sandi</label>
        <div class="password-input-wrapper flex relative border rounded-lg">
          <input
            id="password"
            v-model="form.password"
            class="px-2 py-3 w-[90%] text-[14px] outline-none"
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
          v-if="errors.password !== ''"
          class="error-message text-red-500 text-sm"
        >
          {{ errors.password }}
        </div>

        <label for="konfirmasiPassword">Konfirmasi kata sandi</label>
        <div class="password-input-wrapper flex relative border rounded-lg">
          <input
            id="konfirmasiPassword"
            v-model="form.confirmPassword"
            class="px-2 py-3 w-[90%] text-[14px] outline-none"
            name="password"
            placeholder="Masukkan kata sandi"
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
        <div
          v-if="errors.confirmPassword !== ''"
          class="error-message text-red-500 text-sm"
        >
          {{ errors.confirmPassword }}
        </div>

        <div class="mt-3">
          <button
            type="submit"
            :disabled="disabled"
            class="text-white p-3 w-full rounded-lg text-[18px]"
            :class="{ 'bg-[#6C61E1]': !disabled, 'bg-gray-200': disabled }"
          >
            Daftar
          </button>

          <p class="text-center mt-3 mb-5">
            <span class="text-[#8B8B8B]"> Sudah memiliki akun? </span>
            <nuxt-link to="/login" class="text-[#6C61E1]">
              Masuk
            </nuxt-link>
          </p>
        </div>
      </form>
    </div>
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
  name: 'RegisterView',
  layout: 'AuthView',

  data () {
    return {
      showPassword: false,
      showPasswordConfirmed: false,

      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        default: ''
      },
      disabled: true,
      secondSection: false
    }
  },

  watch: {
    form: {
      deep: true,
      handler () {
        if (
          this.validateEmail() &&
          this.validatePassword() &&
          this.validateUsername() &&
          this.validateFullName() &&
          this.validateRetypePassword()
        ) {
          this.checkInput()
        } else {
          this.disabled = true
        }
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
        this.errors.confirmPassword = !this.validateRetypePassword()
          ? 'Kata sandi tidak cocok'
          : ''
      }
    },
    'form.confirmPassword': {
      handler () {
        this.errors.confirmPassword = !this.validateRetypePassword()
          ? 'Kata sandi tidak cocok'
          : ''
      }
    }
  },

  methods: {
    ...mapActions('authentication', ['registerUser']),
    async register () {
      // handle form submission
      this.disabled = true
      const data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.confirmPassword
      }
      const response = await this.registerUser(data)
      if (response?.status === 201) {
        this.errors = {}
        this.secondSection = true
      } else if (Object.keys(response.data.message).length > 0) {
        Object.keys(response.data.message).forEach((key) => {
          this.errors[key] = response.data.message[key]
        })
      } else {
        this.errors.default = response.data.message
      }
      this.disabled = false
    },

    validateUsername () {
      return this.form.name.length > 0
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

    validateRetypePassword () {
      return this.form.confirmPassword === this.form.password
    },
    validateFullName () {
      const fullNameRegex = /^[a-zA-Z\s]+$/
      return fullNameRegex.test(this.form.name)
    },
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
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
