<template>
  <div class="flex flex-col py-8 px-4">
    <h1 class="font-semibold text-2xl">
      Aktivitas Saya
    </h1>
    <div class="flex item-center mt-6">
      <div class="flex-grow min-h-screen">
        <div class="flex items-center justify-between text-center">
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Suka
          </h2>
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Komentar
          </h2>
          <h2 class="w-full py-2 border-b-2 border-gray-300">
            Riwayat Modifikasi
          </h2>
        </div>
        <div><!-- card project --></div>
      </div>
      <div class="max-w-[300px] w-full px-3 flex flex-col space-y-2">
        <div class="flex items-center justify-between">
          <img
            class="w-[55px] rounded-full"
            :src="detailUser.avatar.image.thumbnail.url"
          >
          <img src="../../assets/img/editIcon.svg">
        </div>
        <span class="font-semibold">{{ detailUser.name }}</span>
        <span class="text-sm font-[400] text-opacity-50">
          {{ detailUser.email }}
        </span>
        <p
          class="outline outline-gray-300 text-sm p-2 rounded-lg italic text-gray-300"
        >
          <span v-if="!detailUser.bio">Belum ada deskripsi</span>
          <span v-if="detailUser.bio">{{ detailUser.bio }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  layout: 'MainPage',
  middleware: 'auth',
  async asyncData ({ store }) {
    await store.dispatch('profile/getProfile')
  },
  computed: {
    ...mapState('profile', ['detailUser'])
  }
}
</script>
