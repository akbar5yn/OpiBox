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
        class="border rounded-lg px-2 py-3 text-[14px] outline-none"
        type="text"
        name="email"
        placeholder="Masukan email"
      >

      <label for="">Kata sandi</label>
      <div class="password-input-wrapper flex relative border rounded-lg">
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
      <div class="flex justify-end underline">
        <nuxt-link to="" class="mt-2 text-[#6C61E1]">
          Lupa kata sandi ?
        </nuxt-link>
      </div>
      <div class="mt-3">
        <button
          type="submit"
          class="text-white bg-[#6C61E1] p-3 w-full rounded-lg text-[18px]"
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
      showPassword: false,
      isClose: false
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.checkInput()
      }
    }
  },
  methods: {
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    submitData (e) {
      e.preventDefault()
      if (this.form.email === '' || this.form.password === '') {
        this.errorsInput.status = true
        this.errorsInput.message = 'Email dan kata sandi harus diisi!'
      }

      if (this.errorsInput.status) {
        return false
      }
    }
  }
}
</script>
