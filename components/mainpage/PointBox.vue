<template>
  <div class="topbar p-3 rounded-lg text-white flex flex-col gap-2">
    <p>Poin Opibox</p>
    <div class="flex gap-2">
      <img src="../../assets/img/Poin.svg" alt="point">
      <span>0 XP</span>
    </div>
    <nuxt-link to="">
      Lihat Detailnya >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PointBox'
}
</script>

<style scoped>
.topbar {
  background: linear-gradient(
    133.61deg,
    #6c61e1 -8.71%,
    #958deb 48.63%,
    #6c61e1 101.08%
  );
}
</style>
