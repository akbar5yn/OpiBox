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
        <auth-component-modal v-if="modalLogin" class="">
          <button @click="modalLogin = false">
            <span>x</span>
          </button>
          <h1>Masuk</h1>
        </auth-component-modal>

        <!-- show modal register -->
        <auth-component-modal v-if="modalRegister">
          <button @click="modalRegister = false">
            <span>x</span>
          </button>
          <h1>Daftar</h1>
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
