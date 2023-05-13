<template>
  <div class="justify-center w-full max-w-[427px]">
    <div v-if="verificationStatus" class="text-center">
      <h1 class="text-[40px] font-cabinet-grotesk font normal text-[#19191B]">
        Akun Berhasil Terverifikasi
      </h1>
      <p class="text-[14px] font-open-sans font-normal order-1 text-[#4A4A4F]">
        Selamat! akunmu telah berhasil terverifikasi. Silakan masukkan<br>
        ulang email dan kata sandi pada halaman masuk.
      </p>
      <nuxt-link to="/login">
        <button
          class="bg-[#6C61E1] text-white font-semibold w-full max-w-[427px] py-4 mt-7 rounded-lg font-cabinet-grotesk"
        >
          Masuk ke Opibox
        </button>
      </nuxt-link>
    </div>
    <div v-if="!verificationStatus">
      <h1
        class="text-[40px] font-cabinet-grotesk font normal text-[#19191B] text-center"
      >
        Link Telah Kadaluarsa
      </h1>
      <p
        class="text-[14px] font-open-sans font-normal order-1 text-[#4A4A4F] text-center"
      >
        Maaf, link verifikasi akun telah melewati batas waktu selama 5 hari.
        Masukkan email untuk pengiriman ulang link verifikasi.
      </p>
      <form class="flex flex-col mt-3" action="">
        <label for="email">Email</label>
        <input
          id="email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-full"
          type="text"
          name="email"
          placeholder="Masukkan Email"
        >
        <button
          class="bg-[#6C61E1] text-white font-semibold w-full max-w-[427px] py-4 rounded-lg font-cabinet-grotesk mx-auto mt-8"
        >
          Kirim Ulang
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'AuthView',
  data () {
    return {
      verificationStatus: false
    }
  },
  methods: {
    ...mapActions('authentication', ['verifyAccount'])
  },
  async created () {
    const token = this.$route.query.token_verification
    const response = await this.verifyAccount(token)
    if (response.status === 200) {
      this.verificationStatus = true
    } else {
      this.verificationStatus = false
    }
  }
}
</script>
