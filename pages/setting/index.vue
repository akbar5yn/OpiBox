<template>
  <div class="flex mobile:flex-col laptop:flex-row">
    <div
      class="w-full laptop:max-w-[300px] laptop:min-h-screen py-6 border-r-2 border-gray-200"
    >
      <h1 class="text-2xl font-semibold mx-4 font-cabinet-grotesk">
        Pengaturan
      </h1>

      <!-- Top Sidebar  -->
      <div class="mt-6 font-open-sans">
        <div
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
          @click="selectedMenu = 'profile'"
        >
          <svg
            class="fill-black stroke-black group-hover:fill-[#6C61E1] group-hover:stroke-[#6C61E1]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09013 14.9886L3.95609 15.2805L4.1658 15.5238C5.57709 17.1608 7.66765 18.1984 10 18.1984C12.3323 18.1984 14.4228 17.1609 15.8341 15.5239L16.0438 15.2806L15.9098 14.9887C14.8831 12.7528 12.6235 11.1984 9.99994 11.1984C7.37637 11.1984 5.11689 12.7528 4.09013 14.9886ZM19.1 10.4984C19.1 15.5242 15.0258 19.5984 10 19.5984C4.97423 19.5984 0.900024 15.5242 0.900024 10.4984C0.900024 5.47265 4.97423 1.39844 10 1.39844C15.0258 1.39844 19.1 5.47265 19.1 10.4984ZM10 9.79844C11.6016 9.79844 12.9 8.50006 12.9 6.89844C12.9 5.29681 11.6016 3.99844 10 3.99844C8.3984 3.99844 7.10002 5.29681 7.10002 6.89844C7.10002 8.50006 8.3984 9.79844 10 9.79844Z"
            />
          </svg>
          <span class="group-hover:text-[#6C61E1] ml-4">Ubah Profil</span>
          <svg
            class="-rotate-90 ml-auto stroke-gray-500 group-hover:stroke-[#6C61E1]"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.5L8 8.5L1 1.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
          @click="selectedMenu = 'password'"
        >
          <svg
            class="stroke-black group-hover:stroke-[#6C61E1]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.5C14.1046 5.5 15 6.39543 15 7.5M19 7.5C19 10.8137 16.3137 13.5 13 13.5C12.3938 13.5 11.8087 13.4101 11.2571 13.2429L9 15.5H7V17.5H5V19.5H2C1.44772 19.5 1 19.0523 1 18.5V15.9142C1 15.649 1.10536 15.3946 1.29289 15.2071L7.25707 9.24293C7.08989 8.69135 7 8.10617 7 7.5C7 4.18629 9.68629 1.5 13 1.5C16.3137 1.5 19 4.18629 19 7.5Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="group-hover:text-[#6C61E1] ml-4">Ubah Kata Sandi</span>
          <svg
            class="-rotate-90 ml-auto stroke-gray-500 group-hover:stroke-[#6C61E1]"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.5L8 8.5L1 1.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <hr class="w-full my-4">

      <!-- Bottom Sidebar  -->
      <div class="font-open-sans">
        <div
          id="help"
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
          @click="selectedMenu = 'help'"
        >
          <svg
            class="stroke-gray-500 group-hover:stroke-[#6C61E1]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22766 7.77734C6.77678 6.61215 8.25843 5.77734 10.0001 5.77734C12.2092 5.77734 14.0001 7.12049 14.0001 8.77734C14.0001 10.1768 12.7224 11.3524 10.9943 11.6839C10.4519 11.788 10.0001 12.2251 10.0001 12.7773M10 15.7773H10.01M19 10.7773C19 15.7479 14.9706 19.7773 10 19.7773C5.02944 19.7773 1 15.7479 1 10.7773C1 5.80678 5.02944 1.77734 10 1.77734C14.9706 1.77734 19 5.80678 19 10.7773Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="group-hover:text-[#6C61E1] ml-4">Bantuan</span>
        </div>
        <div
          id="about"
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
          @click="selectedMenu = 'about'"
        >
          <svg
            class="stroke-gray-500 group-hover:stroke-[#6C61E1]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.77734V10.7773M10 14.7773H10.01M19 10.7773C19 15.7479 14.9706 19.7773 10 19.7773C5.02944 19.7773 1 15.7479 1 10.7773C1 5.80678 5.02944 1.77734 10 1.77734C14.9706 1.77734 19 5.80678 19 10.7773Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="group-hover:text-[#6C61E1] ml-4">Tentang</span>
        </div>
        <NuxtLink
          id="about"
          to="/privacy"
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
        >
          <svg
            class="stroke-gray-500 group-hover:stroke-[#6C61E1]"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 15H9V9H7V15ZM8 7C8.28333 7 8.521 6.904 8.713 6.712C8.905 6.52 9.00067 6.28267 9 6C9 5.71667 8.904 5.479 8.712 5.287C8.52 5.095 8.28267 4.99933 8 5C7.71667 5 7.479 5.096 7.287 5.288C7.095 5.48 6.99933 5.71733 7 6C7 6.28333 7.096 6.521 7.288 6.713C7.48 6.905 7.71733 7.00067 8 7ZM8 20C5.68333 19.4167 3.77067 18.0873 2.262 16.012C0.753334 13.9367 -0.000666225 11.6327 4.41696e-07 9.1V3L8 0L16 3V9.1C16 11.6333 15.2457 13.9377 13.737 16.013C12.2283 18.0883 10.316 19.4173 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9Z"
              fill="black"
            />
          </svg>

          <span class="group-hover:text-[#6C61E1] ml-4">Kebijakan Privasi</span>
        </NuxtLink>
        <div
          id="logout"
          class="flex items-center cursor-pointer pl-8 pr-4 py-3 group hover:bg-gray-200 hover:border-r-2 hover:border-[#6C61E1]"
          @click="logoutModalVisibility = true"
        >
          <icon-galery-exit-icon />
          <span class="text-[#EB0700] ml-4">Keluar</span>
        </div>
      </div>
    </div>
    <div class="flex-grow min-h-screen p-6 overflow-y-scroll">
      <UpdateProfile v-if="selectedMenu == 'profile'" />
      <UpdatePassword v-if="selectedMenu == 'password'" />
      <Help v-if="selectedMenu == 'help'" />
      <About v-if="selectedMenu == 'about'" />
    </div>

    <ModalBase
      v-if="logoutModalVisibility"
      width="500"
      @close-modal="logoutModalVisibility = false"
    >
      <div class="text-center flex flex-col space-y-4">
        <h1 class="text-xl font-bold font-cabinet-grotesk">
          Keluar dari Akun
        </h1>
        <p class="font-extralight font-open-sans mt-5">
          Jika Anda keluar dari akun, Anda tidak dapat mengakses seluruh proyek
          Anda. Lanjutkan?
        </p>
        <div class="flex items-center space-x-4 w-full">
          <button
            class="font-normal font-cabinet-grotesk text-[#6C61E1] w-full border border-[#6C61E1] py-2 rounded-lg"
            @click="logout"
          >
            Ya
          </button>
          <button
            class="bg-[#6C61E1] text-white py-2 w-full border border-[#6C61E1] rounded-lg"
            @click="logoutModalVisibility = false"
          >
            Tidak
          </button>
        </div>
      </div>
    </ModalBase>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  layout: 'MainPage',
  middleware: 'auth',
  async asyncData ({ store }) {
    await store.dispatch('profile/getProfile')
  },
  data () {
    return {
      selectedMenu: 'profile',
      logoutModalVisibility: false
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
