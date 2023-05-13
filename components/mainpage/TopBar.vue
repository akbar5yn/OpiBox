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
    <div class="px-5 justify-between">
      <div class="hidden xl:flex gap-7">
        <!-- search column -->
        <mainpage-search-column />

        <!-- icon notification -->
        <!-- <div class="hidden notification md:flex items-center">
          <icon-galery-noti-fication />
        </div> -->

        <!-- user image -->
        <!-- <div class="flex items-center">
          <mainpage-user-image />
        </div> -->

        <!-- button create project -->
        <button
          class="bg-[#6C61E1] text-white font-cabinet grotesk flex min-w-max px-[13px] py-1 items-center justify-center gap-3 rounded-md"
        >
          <icon-galery-add-project width="15" />
          Buat Proyek
        </button>
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
