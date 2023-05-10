<template>
  <div
    class="topbar px-[10px] py-[7px] rounded-lg font-cabinet-grotesk text-white font-[570] flex flex-col gap-1"
  >
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
