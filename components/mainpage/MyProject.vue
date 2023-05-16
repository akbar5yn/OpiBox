<template>
  <div>
    <!-- kondisi belum ada project -->
    <div
      v-if="noProject"
      class="w-full rounded-lg bg-[#6C61E1] py-[59px] flex justify-center items-center"
    >
      <div class="flex items-center gap-5">
        <icon-galery-img-folder />
        <p class="text-white font-cabinet-grotesk text-2xl font-medium">
          Proyekmu masih kosong <br>
          <span class="text-xl font-normal">Yuk, buat proyekmu sekarang</span>
        </p>
      </div>
    </div>

    <!-- setelah ada project -->
    <div
      v-if="projectExists"
      class="border rounded-lg bg-white drop-shadow-md w-fit"
    >
      <div class="h-[152px] w-[360px] relative overflow-clip">
        <img
          src="../../assets/img/unsplash_rd7RBGvs_-4.svg"
          alt="cover-project"
          class="object-contain w-full"
        >
      </div>
      <div class="p-[10px] pr-3 flex items-center justify-between">
        <div class="flex items-center gap-[10px]">
          <!-- icon team -->
          <div class="bg-[#E5E5E6] p-4 rounded-full w-fit">
            <img src="../../assets/img/team.svg" alt="icon-team">
          </div>
          <h2 class="font-cabinet-grotesk text-xl font-semibold">
            Desain Daftar Menu Reato <br>
            <span class="font-normal text-sm">Di ubah 5 menit yang lalu</span>
          </h2>
        </div>
        <button>
          <icon-galery-dots-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProject',
  data () {
    return {
      noProject: false,
      projectExists: true
    }
  }
}
</script>
