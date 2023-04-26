<template>
  <div class="w-[500px]">
    <h1 class="text-[40px] cabinet-grotesk">
      Masuk
    </h1>
    <p class="text-[14px] open-sans tracking-wider text-[#8B8B8B]">
      Masuk dan nikmati semua layanan di Opibox
    </p>
    <form action="" class="flex flex-col gap-y-3 mt-4 open-sans text-[#19191B]">
      <label for="">Email</label>
      <input
        id="email"
        class="border rounded-lg px-2 py-3 text-[14px] outline-none placeholder:text-[#D9D9D9] border-gray-300"
        type="text"
        name="email"
        placeholder="Masukkan email"
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
          <nuxt-link to="/register">
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
      showPassword: false,
      isClose: false
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('assets/CabinetGrotesk-Medium.otf') format('truetype');
}
.cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
}

@font-face {
  font-family: 'Open Sans';
  src: url('assets/OpenSans-Light.ttf');
}
.open-sans {
  font-family: 'Open Sans', sans-serif;
}
</style>
