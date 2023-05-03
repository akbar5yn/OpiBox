<template>
  <div class="w-full sticky">
    <!-- topbar on mobile -->
    <div
      class="topbar flex items-center justify-between p-7 rounded-b-[10px] gap-7 xl:hidden"
    >
      <!-- hamburger -->
      <mainpage-hamburger-button />

      <!-- search column -->
      <mainpage-search-column />

      <!-- profile -->
      <mainpage-user-image />
    </div>

    <!-- top bar on desktop-->
    <div class="hidden xl:flex py-4 px-5 justify-between gap-7 border">
      <!-- search column -->
      <mainpage-search-column />

      <!-- icon notification -->
      <div class="hidden notification md:flex items-center">
        <icon-galery-noti-fication />
      </div>

      <!-- user image -->
      <div class="flex items-center">
        <mainpage-user-image />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
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
