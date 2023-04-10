<template>
  <div>
    <nav
      class="p-[19px] flex justify-between text-center items-center border-2"
    >
      <!-- nav-logo -->
      <div class="flex gap-4 items-center">
        <img
          src="../../assets/img/logo.svg"
          alt="logo"
          class="w-10 sm:w-[70px]"
        >
        <h1 class="text-4xl font-medium hidden">
          Opibox
        </h1>
      </div>

      <!-- nav-item -->
      <ul class="hidden md:flex gap-10">
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
      <div class="flex gap-1">
        <!-- btn-login -->
        <nuxt-link
          to="/login"
          class="hidden md:block border-black border-[1px] px-7 py-2 rounded-[6px]"
        >
          Masuk
        </nuxt-link>

        <!-- btn-register -->
        <nuxt-link
          to="/register"
          class="hidden md:block bg-[#4A4A4F] border-[#4A4A4F] border-[1px] px-7 py-2 rounded-[6px] text-white"
        >
          Daftar
        </nuxt-link>
      </div>

      <!-- humberger menu -->
      <div class="sm:hidden">
        Menu
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
