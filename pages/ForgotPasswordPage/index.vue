<template>
  <div class="h-[620px]">
    <h1 class="text-[50px] font-cabinet-grotesk font-normal">
      Lupa Kata Sandi
    </h1>
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
</style>
