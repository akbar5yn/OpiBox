<template>
  <div class="relative w-full">
    <main class="p-5">
      <mainpage-top-bar />
      <h1
        class="px-5 pt-5 text-base font-semibold laptop:text-xl font-cabinet-grotesk"
      >
        Hasil Pencarian
      </h1>

      <div v-if="hasResult" class="p-5 flex flex-wrap gap-4">
        <div
          v-for="result in getResult"
          :key="result.id"
          class="relative cursor-pointer"
        >
          <div
            class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
          >
            <div
              class="h-[152px] w-[360px] overflow-clip"
              @click="visitProject(result.id)"
            >
              <img
                :src="result.images[0].thumbnail_url"
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
                <h2
                  class="cursor-pointer font-cabinet-grotesk text-xl font-semibold"
                  @click="showProject(result.id)"
                >
                  {{ result.title }} <br>

                  <span class="font-normal text-sm">{{
                    result.updated_at
                  }}</span>
                </h2>
              </div>
              <button @click="toggleInfo(result.id)">
                <icon-galery-dots-icon />
              </button>
            </div>
          </div>
          <!-- <modal-project-information
        v-if="selectedProjectInfo === project.id"
        :id-project="project.id"
        class="showinfo absolute -right-36 top-9 w-fit p-5 pr-9 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        @show-project-report="handleProjectReport"
      /> -->
        </div>
      </div>
      <div
        v-else
        class="flex w-full justify-center items-center py-12 border border-dashed mt-5"
      >
        <!-- Konten ketika getResult bernilai undefined -->
        <h1>Hasil pencarian tidak ditemukan</h1>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'MainPage',
  computed: {
    ...mapGetters('project', ['getResult']),
    hasResult () {
      return this.getResult !== undefined && this.getResult.length !== 0
    }
  }
}
</script>
