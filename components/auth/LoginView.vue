<template>
  <div>
    <auth-component-modal>
      <div class="flex justify-end">
        <button class="relative right-0" @click="closeModal">
          <img src="../../assets/img/Icon.svg" alt="close">
        </button>
      </div>
      <h1 class="text-[40px] font-normal">
        Masuk
      </h1>
      <p class="text-[14px] font-normal tracking-wider">
        Masuk dan nikmati semua layanan di Opibox
      </p>
      <form action="" class="flex flex-col gap-y-3 mt-4">
        <label for="">Email</label>
        <input
          id="email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none"
          type="text"
          name="email"
          placeholder="Masukan email"
          required
        >

        <label for="">Kata sandi</label>
        <div class="password-input-wrapper flex relative border rounded-lg">
          <input
            id="password"
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
          <nuxt-link to="" class="mt-2">
            Lupa kata sandi ?
          </nuxt-link>
        </div>
        <div class="mt-3">
          <button
            type="submit"
            class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
          >
            Masuk
          </button>
          <p class="text-center mt-3">
            <span class="text-[#8B8B8B]"> Belum memiliki akun? </span>
            <nuxt-link to="">
              Daftar
            </nuxt-link>
          </p>
        </div>
      </form>
    </auth-component-modal>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data () {
    return {
      showPassword: false,
      isClose: false
    }
  },
  methods: {
    closeModal () {
      this.isClose = true
      this.$emit('close', this.isClose)
    }
  }
}
</script>
