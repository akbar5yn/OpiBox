<template>
  <div class="my-project max-w-screen-2xl snap-x overflow-x-scroll">
    <!-- kondisi belum ada project -->
    <section
      v-if="noProject"
      class="no-project w-full rounded-lg bg-[#6C61E1] py-[59px] flex justify-center items-center"
    >
      <div class="flex items-center gap-5">
        <icon-galery-img-folder />
        <p class="text-white font-cabinet-grotesk text-2xl font-medium">
          Proyekmu masih kosong <br>
          <span class="text-xl font-normal">Yuk, buat proyekmu sekarang</span>
        </p>
      </div>
    </section>

    <!-- setelah ada project -->
    <section class="project-exist flex gap-3 scroll-ml-6 snap-start">
      <div
        v-for="project in getMyProject"
        :key="project.id"
        class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
      >
        <div class="h-[152px] w-[360px] relative overflow-clip">
          <img
            :src="project.images[0].image.thumbnail.url"
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
              @click="showProject(project.id)"
            >
              {{ project.title }} <br>

              <span class="font-normal text-sm">{{ project.createdAgo }}</span>
            </h2>
          </div>
          <button>
            <icon-galery-dots-icon />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'MyProject',
  data () {
    return {
      noProject: false,
      projectExists: false
    }
  },
  computed: {
    ...mapGetters('project', ['getMyProject'])
  },

  mounted () {
    this.fetchMyProject()
  },

  methods: {
    ...mapActions('project', ['fetchMyProject']),

    showProject (projectId) {
      // Navigasi ke halaman detail proyek berdasarkan ID
      this.$router.push(`/project/${projectId}`)
    },
    updateProjectStatus () {
      this.noProject = this.getMyProject.length === 0
      this.projectExists = this.getMyProject.length > 0

      this.getMyProject.forEach((project) => {
        const createdTime = moment(project.created_at)
        const currentTime = moment()
        const duration = moment.duration(currentTime.diff(createdTime))
        let createdAgo

        if (duration.asMinutes() < 1) {
          createdAgo = 'Baru saja dibuat'
        } else if (duration.asMinutes() < 60) {
          createdAgo =
            Math.floor(duration.asMinutes()) === 1
              ? '1 menit yang lalu'
              : `${Math.floor(duration.asMinutes())} menit yang lalu`
        } else if (duration.asHours() < 24) {
          const hoursDiff = duration.asHours()
          createdAgo =
            hoursDiff === 1
              ? '1 jam yang lalu'
              : `${Math.floor(hoursDiff)} jam yang lalu`
        } else {
          const daysDiff = duration.asDays()
          createdAgo =
            daysDiff === 1
              ? '1 hari yang lalu'
              : `${Math.floor(daysDiff)} hari yang lalu`
        }

        project.createdAgo = createdAgo
      })
    }
  },
  watch: {
    getMyProject () {
      this.updateProjectStatus()
    }
  },

  created () {
    this.updateProjectStatus()
  }
}
</script>

<style scoped>
.my-project::-webkit-scrollbar {
  display: none;
}
</style>
