<template>
  <div>
    <div
      class="status flex font-cabinet-grotesk px-7 justify-between py-[10px]"
    >
      <p>Belum di baca (3)</p>
      <p>Baca semua</p>
    </div>
    <div>
      <div class="px-7 flex gap-6 items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9998 16C31.9998 24.8366 24.8364 32 15.9998 32C7.16326 32 -0.000183105 24.8366 -0.000183105 16C-0.000183105 7.16344 7.16326 0 15.9998 0C24.8364 0 31.9998 7.16344 31.9998 16ZM17.9998 8C17.9998 9.10457 17.1044 10 15.9998 10C14.8952 10 13.9998 9.10457 13.9998 8C13.9998 6.89543 14.8952 6 15.9998 6C17.1044 6 17.9998 6.89543 17.9998 8ZM13.9998 14C12.8952 14 11.9998 14.8954 11.9998 16C11.9998 17.1046 12.8952 18 13.9998 18V24C13.9998 25.1046 14.8952 26 15.9998 26H17.9998C19.1044 26 19.9998 25.1046 19.9998 24C19.9998 22.8954 19.1044 22 17.9998 22V16C17.9998 14.8954 17.1044 14 15.9998 14H13.9998Z"
            fill="#6C61E1"
          />
        </svg>
        <div class="flex flex-col gap-[10px] w-full border-b-2 py-7">
          <p>Selamat datang di Opibox, yuk jelajahi sekarang!</p>
          <span class="text-[#62626A]">{{ loginTimeAgo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'NotiFications',

  data () {
    return {
      // TODO - notif login success
      loginTime: moment(), // Waktu saat login
      currentTime: moment() // Waktu saat ini

      // TODO - notif get point
      // TODO - redem point
      // TODO - notif join team
      // TODO - notif like project
      // TODO - notif comment project
      // TODO - notif modification project
    }
  },

  computed: {
    ...mapGetters('authentication', ['getLoginTime']),
    loginTimeAgo () {
      if (this.getLoginTime) {
        const currentTime = moment()
        const duration = moment.duration(currentTime.diff(this.getLoginTime))

        // ... Kode untuk menghitung waktu yang lalu menggunakan moment.js
        // Contoh:
        if (duration.asMinutes() < 1) {
          return 'Baru saja login'
        } else if (duration.asMinutes() < 60) {
          return `${Math.floor(duration.asMinutes())} menit yang lalu`
        } else if (duration.asHours() < 24) {
          return `${Math.floor(duration.asHours())} jam yang lalu`
        } else {
          return `${Math.floor(duration.asDays())} hari yang lalu`
        }
      }

      return ''
    }
  }
}
</script>
