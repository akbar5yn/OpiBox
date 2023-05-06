<template>
  <div class="px px-5 pt-5">
    <!-- main content -->
    <h1 id="#MyProject" class="font-cabinet-grotesk text-[30px] font-semibold">
      Proyek Saya
    </h1>
    <div class="mt-7 flex gap-5">
      <NuxtLink
        to="/mainpage/createProject"
        class="bg-[#6C61E1] text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </NuxtLink>
      <div
        class="bg-[#E5E5E680] text-[#95959D] p-6 font-cabinet-grotesk text-[18px] text-center font-normal h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <p>
          Seluruh proyek yang Anda buat nantinya akan muncul pada halaman ini.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mainpage',
  layout: 'MainPage',
  middleware: 'auth'
}
</script>
