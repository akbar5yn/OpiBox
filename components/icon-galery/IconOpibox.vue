<template>
  <div class="flex gap-3">
    <nuxt-link to="/">
      <img src="../../assets/img/logo.svg" class="w-[45px]" alt="logo">
    </nuxt-link>
    <p class="self-center cabinet-grotesk font-bold text-[29px] text-[#6C61E1]">
      Opibox
    </p>
  </div>
</template>

<script>
export default {
  name: 'IconOpibox'
}
</script>

<style scoped>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('assets/CabinetGrotesk-Medium.otf') format('truetype');
}
.cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
}
</style>
