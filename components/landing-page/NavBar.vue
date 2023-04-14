<template>
  <div>
    <nav
      class="p-[19px] flex justify-between text-center items-center border-2 fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-xl shadow-sm z-50"
    >
      <!-- nav-logo -->
      <div class="flex gap-4 items-center">
        <img
          src="../../assets/img/logo.svg"
          alt="logo"
          class="w-10 xl:w-[70px]"
        >
        <h1 class="hidden text-4xl font-medium text-[#6C61E1] xl:block">
          Opibox
        </h1>
      </div>

      <!-- nav-item -->
      <ul class="hidden md:flex md:gap-5 xl:gap-10">
        <li>
          <nuxt-link to="#beranda">
            Beranda
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#layanan">
            Layanan
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#loyality">
            Program Loyaliti
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#bantuan">
            Bantuan
          </nuxt-link>
        </li>
      </ul>
      <div class="flex gap-1">
        <nuxt-link
          to="/login"
          class="hidden md:block border-[#6C61E1] border-[1px] px-7 py-2 rounded-[6px] text-[#6C61E1]"
        >
          Masuk
        </nuxt-link>
        <nuxt-link
          to="/register"
          class="hidden md:block bg-[#6C61E1] border-[#6C61E1] border-[1px] px-7 py-2 rounded-[6px] text-white"
        >
          Daftar
        </nuxt-link>
      </div>

      <!-- humberger menu -->
      <hamburger-menu class="sm:hidden" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
