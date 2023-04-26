<template>
  <div class="h-screen p-8 md:p-0">
    <div
      class="flex gap-3 md:justify-center md:border md:border-b-2 md:py-11 fixed md:w-full md:z-50"
    >
      <nuxt-link to="/">
        <img src="../assets/img/logo.svg" class="w-[45px]" alt="logo">
      </nuxt-link>
      <p
        class="self-center cabinet-grotesk font-bold text-[29px] text-[#6C61E1] md:hidden"
      >
        Opibox
      </p>
    </div>
    <div class="flex h-[100%] justify-center items-center">
      <nuxt />
    </div>
  </div>
</template>

<script></script>

<style scoped>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('assets/CabinetGrotesk-Medium.otf') format('truetype');
}
.cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
}
</style>
