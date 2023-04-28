<template>
  <div class="w-[500px]">
    <h1 class="text-[40px] font-normal">
      Daftar
    </h1>
    <p class="text-[14px] font-normal tracking-wider">
      Lengkapi data di bawah ini untuk mendaftarkan akun
    </p>
    <form action="" class="flex flex-col gap-y-3 mt-4">
      <label for="">Nama</label>
      <input
        id="nama"
        class="border rounded-lg px-2 py-3 text-[14px] outline-none"
        type="text"
        name="nama"
        placeholder="Masukan nama"
      >

      <label for="">Email</label>
      <input
        id="email"
        class="border rounded-lg px-2 py-3 text-[14px] outline-none"
        type="text"
        name="email"
        placeholder="Masukan email"
      >

      <label for="">Kata sandi</label>
      <div class="password-input-wrapper flex relative border rounded-lg">
        <input
          id="password"
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

      <label for="">Konfirmasi kata sandi</label>
      <div class="password-input-wrapper flex relative border rounded-lg">
        <input
          id="password"
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

      <div class="mt-3">
        <button
          class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
        >
          Masuk
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
      showPasswordConfirmed: false
    }
  }
}
</script>
