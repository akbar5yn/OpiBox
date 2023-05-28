<template>
  <div class="px-7 py-9 flex flex-col h-full">
    <!-- header -->
    <section class="flex items-center justify-between">
      <!-- Icon team -->
      <div class="flex items-center gap-5">
        <icon-galery-team-icon />
        <h1 class="font-cabinet-grotesk text-3xl font-medium">
          Tim {{ teamId }}
        </h1>
      </div>
      <div class="flex gap-4">
        <button
          class="px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md"
        >
          Proyek Baru
        </button>
        <button
          class="px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md"
        >
          Undang
        </button>
        <button
          class="px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md"
        >
          ...
        </button>
      </div>
    </section>

    <!-- main proyek -->
    <section class="flex justify-between h-full">
      <div class="w-[75%] relative flex flex-col">
        <h1 class="border-b-2 pb-3 mt-[49px]">
          Proyek
        </h1>
        <div class="flex flex-col items-center justify-center h-full">
          <p>Team Belum Memiliki Proyek</p>
          <p>
            Klik
            <button
              class="px-[15px] py-[7px] font-cabinet-grotesk border-2 rounded-md"
            >
              Proyek Baru
            </button>
            untuk membuat proyek baru pada tim
          </p>
        </div>
      </div>
      <div class="w-[20%]">
        <h1 class="border-b-2 pb-3 mt-[49px]">
          Anggota
        </h1>

        <!-- daftar anggota -->
        <div class="mt-[15px]">
          <ul>
            <li class="flex items-center gap-3">
              <icon-galery-avatar-icon />
              Nama Pengguna
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tampilkan detail tim berdasarkan teamId -->
  </div>
</template>

<script>
export default {
  name: 'Teams',
  computed: {
    teamId () {
      return this.$route.params.id
    }
  }
}
</script>
