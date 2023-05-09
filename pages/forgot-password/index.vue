<template>
  <div class="h-[650px] items-center">
    <div v-if="!secondSection" class="text-center">
      <h1 class="text-[50px] font-cabinet-grotesk font-normal text-[#19191B]">
        Lupa Kata Sandi
      </h1>
      <p
        class="text-[20px] font-normal font-open-sans order-1 text-[#4A4A4F]"
        style="line-height: 2"
      >
        Masukkan <strong> alamat email </strong> yang Anda gunakan untuk
        mendaftar <br>
        akun Opibox. Kami akan mengirim pesan melalui email berisi <br>
        tautan untuk mereset kata sandi Anda.
      </p>
      <form
        action=""
        class="flex flex-col gap-y-3 mt-4"
        @submit.prevent="submitData"
      >
        <label
          for="email"
          class="self-start text-[16px] font-normal text-black"
          style="font-family: 'Open Sans', sans-serif"
        >Email</label>
        <input
          id="email"
          v-model="form.email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-[580px] placeholder:text-[#D9D9D9] border-gray-300"
          type="text"
          name="email"
          placeholder="Masukkan email"
          required
          style="font-family: 'Open Sans', sans-serif"
        >
        <div
          v-if="errors.email != ''"
          class="error-message text-red-500 text-sm maxw-[580px] text-left"
        >
          {{ errors.email }}
        </div>
        <button
          :disabled="disabled"
          class="text-white p-3 w-full rounded-lg text-[18px] font-normal font-cabinet-grotesk mt-8"
          :class="{ ['bg-[#6C61E1]']: !disabled, ['bg-gray-200']: disabled }"
        >
          Selanjutnya
        </button>
      </form>

      <p class="text-center mt-32 text-[#6C61E1] font-open-sans">
        <span class="text-[#8B8B8B]">Sudah Memiliki Akun?</span>
        <nuxt-link to="/login">
          Masuk
        </nuxt-link>
      </p>
    </div>
    <!-- Second Section -->
    <div v-if="secondSection" class="text-center h-[650px] items-center">
      <h1 class="text-[50px] font-cabinet-grotesk font normal text-[#19191B]">
        Lupa Kata Sandi
      </h1>
      <p class="text-[14px] font-open-sans font-normal order-1 text-[#4A4A4F]">
        Kami telah mengirim pesan ke email:<br>
        <strong>{{ form.email }}</strong> <br>Cukup ikuti petunjuk untuk
        melakukan verifikasi email.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ForgotPasswordView',
  layout: 'AuthView',

  data () {
    return {
      form: {
        email: ''
      },
      errors: {
        email: ''
      },
      showPassword: false,
      showPasswordConfirmed: false,
      isClose: false,
      secondSection: false,
      disabled: true
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        if (this.validateEmail()) {
          this.checkInput()
        } else {
          this.disabled = true
        }
      }
    },
    'form.email': {
      handler () {
        this.errors.email =
          this.form.email === ''
            ? 'Email harus diisi'
            : !this.validateEmail()
                ? 'Email tidak valid'
                : ''
      }
    }
  },
  methods: {
    ...mapActions('password', ['forgotPassword']),
    async submitData () {
      const data = {
        email: this.form.email
      }
      const response = await this.forgotPassword(data)
      console.log({ response })
      if (response.status === 200) {
        this.secondSection = !this.secondSection
      } else {
        this.errors.email = response.data.message
      }
    },
    checkInput () {
      this.disabled = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    validateEmail () {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(this.form.email)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('@/assets/CabinetGrotesk-Medium.otf') format('truetype');
}

.font-cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
}

@font-face {
  font-family: 'Open Sans';
  src: url('@/assets/OpenSans-Light.ttf') format('truetype');
}

.font-open-sans {
  font-family: 'Open Sans', sans-serif;
}
</style>
