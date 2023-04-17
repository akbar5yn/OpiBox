<template>
  <div>
    <nav
      class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
    >
      <div
        class="w-full flex flex-wrap items-center justify-between mx-auto p-4"
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

        <div class="flex md:order-2 gap-2">
          <div class="flex gap-3">
            <nuxt-link
              to="/login"
              class="border-[#6C61E1] flex items-center border-[1px] px-4 py-1 text-[15px] md:px-7 md:py-2 rounded-[6px] text-[#6C61E1]"
            >
              Masuk
            </nuxt-link>
            <nuxt-link
              to="/register"
              class="bg-[#6C61E1] border-[#6C61E1] flex items-center border-[1px] px-4 py-1 text-[15px] md:px-7 md:py-2 rounded-[6px] text-white"
            >
              Daftar
            </nuxt-link>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          id="navbar-sticky"
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <nuxt-link
                to="#beranda"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                active-class="border-b-2 border-[#6C61E1]"
              >
                Beranda
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#layanan"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                active-class="border-b-2 border-[#6C61E1]"
              >
                Layanan
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#loyality"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                active-class="border-b-2 border-[#6C61E1]"
              >
                Program Loyaliti
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#bantuan"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                active-class="border-b-2 border-[#6C61E1]"
              >
                Bantuan
              </nuxt-link>
            </li>
          </ul>
        </div>
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
