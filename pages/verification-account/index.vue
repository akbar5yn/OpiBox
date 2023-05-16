<template>
  <div class="justify-center w-full max-w-[427px]">
    <div v-if="showSuccessVerification" class="text-center">
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
    <div v-if="showFormResendVerification">
      <h1
        class="text-[40px] font-cabinet-grotesk font normal text-[#19191B] text-center"
      >
        Link Telah Kadaluarsa
      </h1>
      <p
        class="text-[14px] font-open-sans font-normal order-1 text-[#62626A] text-center"
      >
        Maaf, link verifikasi akun telah melewati batas waktu selama 5 hari.
        Masukkan email untuk pengiriman ulang link verifikasi.
      </p>

      <p v-if="errors.default != ''" class="text-red-500 text-sm mt-6">
        {{ errors.default }}
      </p>

      <form
        class="flex flex-col mt-3"
        action=""
        @submit.prevent="resendEmailVerification"
      >
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-full"
          type="text"
          name="email"
          placeholder="Masukkan Email"
        >
        <button
          class="bg-[#6C61E1] text-[#FFFFFF] font-extralight w-full max-w-[427px] py-4 rounded-lg mx-auto mt-8 font-cabinet-grotesk text-[18px]"
        >
          Kirim Ulang
        </button>
      </form>
    </div>
    <div
      v-if="showAfterResendSuccess"
      class="text-center h-[650px] items-center"
    >
      <h1 class="text-[40px] font-cabinet-grotesk font normal text-[#19191B]">
        Verifikasi Email
      </h1>
      <p class="text-[14px] font-open-sans font-normal order-1 text-[#4A4A4F]">
        Kami telah mengirim pesan ke email:<br>
        <strong> {{ form.email }}</strong> <br>
        Cukup ikuti petunjuk untuk melakukan verifikasi email.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'AuthView',
  data () {
    return {
      showAfterResendSuccess: false,
      showSuccessVerification: false,
      showFormResendVerification: false,
      form: {
        email: ''
      },
      errors: {
        default: ''
      }
    }
  },
  methods: {
    ...mapActions('authentication', ['verifyAccount', 'resendVerification']),
    async resendEmailVerification () {
      const data = {
        email: this.form.email
      }

      const response = await this.resendVerification(data)
      if (response.status === 201) {
        this.showAfterResendSuccess = true
        this.showFormResendVerification = false
      } else {
        this.errors.default = response.data.message
      }
    }
  },
  async created () {
    const token = this.$route.query.token_verification
    const response = await this.verifyAccount(token)
    if (response.status === 200) {
      this.showSuccessVerification = true
    } else {
      this.showFormResendVerification = true
    }
  }
}
</script>
