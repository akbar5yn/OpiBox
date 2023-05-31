<template>
  <div class="my-draft flex gap-3 w-full snap-x overflow-x-scroll">
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
    <div class="flex gap-3 scroll-ml-6 snap-start">
      <div
        v-if="projectExists"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
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
      <div
        v-if="projectExists"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
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
      <div
        v-if="projectExists"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
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
      <div
        v-if="projectExists"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
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
      <div
        v-if="projectExists"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
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
  </div>
</template>

<script>
export default {
  name: 'MyDraft',
  data () {
    return {
      noProject: false,
      projectExists: true,
      totalDraft: []
    }
  },
  created () {
    // Simulasikan pengambilan data project
    this.totalDraft = [
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Project 2' },
      { id: 3, name: 'Project 3' },
      { id: 4, name: 'Project 4' },
      { id: 5, name: 'Project 5' }
    ]
  },
  methods: {
    viewAllProjects () {
      // Emit event ke komponen induk untuk menampilkan semua data project
      this.$emit('view-all-draft', this.totalDraft)
    }
  }
}
</script>

<style scoped>
.my-draft::-webkit-scrollbar {
  display: none;
}
</style>
