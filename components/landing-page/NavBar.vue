<template>
  <div>
    <nav
      class="p-[19px] flex justify-between text-center items-center border-2"
    >
      <!-- nav-logo -->
      <div class="flex gap-4 items-center">
        <img src="../../assets/img/logo.svg" alt="logo" class="w-[70px]">
        <h1 class="text-4xl font-medium">
          Opibox
        </h1>
      </div>

      <!-- nav-item -->
      <ul class="flex gap-10">
        <li>
          <nuxt-link to="#">
            Beranda
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Layanan
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Program Loyaliti
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Bantuan
          </nuxt-link>
        </li>
      </ul>

      <!-- login-register -->
      <div class="gap-1">
        <!-- btn-login -->
        <button
          class="border-black border-[1px] px-7 py-2 rounded-[6px]"
          @click="modalLogin = true"
        >
          Masuk
        </button>

        <!-- btn-register -->
        <button
          class="bg-[#4A4A4F] border-[#4A4A4F] border-[1px] px-7 py-2 rounded-[6px] text-white"
          @click="modalRegister = true"
        >
          Daftar
        </button>

        <!-- show modal login -->
        <auth-component-modal v-if="modalLogin">
          <div class="flex justify-end">
            <button class="relative right-0" @click="modalLogin = false">
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
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="text"
              name="email"
              placeholder="Masukan email"
            >

            <label for="">Kata sandi</label>
            <input
              id="password"
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="password"
              name="password"
              placeholder="Masukan kata sandi"
            >
          </form>
          <div class="flex justify-end underline">
            <nuxt-link to="" class="mt-2">
              Lupa kata sandi ?
            </nuxt-link>
          </div>
          <div class="mt-3">
            <button
              class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
            >
              Masuk
            </button>
            <p class="text-center mt-3">
              <span class="text-[#8B8B8B]"> Belum memiliki akun? </span> Daftar
            </p>
          </div>
        </auth-component-modal>

        <!-- show modal register -->
        <auth-component-modal v-if="modalRegister">
          <div class="flex justify-end">
            <button class="relative right-0" @click="modalRegister = false">
              <img src="../../assets/img/Icon.svg" alt="close">
            </button>
          </div>
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
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="text"
              name="nama"
              placeholder="Masukan nama"
            >

            <label for="">Email</label>
            <input
              id="email"
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="text"
              name="email"
              placeholder="Masukan email"
            >

            <label for="">Kata sandi</label>
            <input
              id="password"
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="password"
              name="password"
              placeholder="Masukan kata sandi"
            >

            <label for="">Konfirmasi kata sandi</label>
            <input
              id="password"
              class="border rounded-lg px-2 py-3 text-[14px]"
              type="password"
              name="password"
              placeholder="Masukan kata sandi"
            >
          </form>
          <div class="flex justify-end underline">
            <nuxt-link to="" class="mt-2">
              Lupa kata sandi ?
            </nuxt-link>
          </div>
          <div class="mt-3">
            <button
              class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
            >
              Masuk
            </button>
            <p class="text-center mt-3">
              <span class="text-[#8B8B8B]"> Belum memiliki akun? </span> Daftar
            </p>
          </div>
        </auth-component-modal>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      modalLogin: false,
      modalRegister: false
    }
  }
}
</script>

<style></style>
