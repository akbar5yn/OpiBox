<template>
  <div>
    <nav
      class="p-[19px] flex justify-between text-center items-center border-2"
    >
      <div class="flex gap-4 items-center">
        <img src="../../assets/img/logo.svg" alt="logo" class="w-[70px]">
        <h1 class="text-4xl font-medium">
          Opibox
        </h1>
      </div>
      <ul class="flex gap-10">
        <li>
          <NuxtLink to="#">
            Beranda
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            Layanan
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            Program Loyaliti
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            Bantuan
          </NuxtLink>
        </li>
      </ul>
      <div class="gap-1">
        <button class="border-[#6C61E1] border-[1px] px-7 py-2 rounded-[6px] text-[#6C61E1]">
          Masuk
        </button>
        <button
          class="bg-[#4A4A4F] border-[#4A4A4F] border-[1px] px-7 py-2 rounded-[6px] text-white"
        >
          Daftar
        </button>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style></style>
