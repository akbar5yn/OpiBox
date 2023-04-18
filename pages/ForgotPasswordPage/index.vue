<template>
  <div class="h-[650px] items-center">
    <div class="text-center">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordView',
  layout: 'AuthView',

  data () {
    return {
      showPassword: false,
      showPasswordConfirmed: false,
      isClose: false
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
