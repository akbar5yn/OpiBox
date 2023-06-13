<template>
  <div class="flex flex-wrap gap-5 pt-5">
    <div
      v-for="like in getLikeHistory"
      :key="like.id"
      class="relative cursor-pointer"
    >
      <div class="border rounded-lg bg-white drop-shadow-md w-fit snap-start">
        <div
          class="h-[152px] w-[360px] overflow-clip"
          @click="visitProject(like.project_id)"
        >
          <img
            :src="like.image_project.image.thumbnail.url"
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
              {{ like.project_name }} <br>

              <span class="font-normal text-sm">{{ like.time }}</span>
            </h2>
          </div>
          <button @click="toggleInfo(like.id)">
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LikeHistory',

  mounted () {
    this.fetchLikeHistory()
    // this.getHistory()
  },

  computed: {
    ...mapGetters('likes', ['getLikeHistory'])
  },

  methods: {
    ...mapActions('likes', ['fetchLikeHistory']),

    // NOTE - route to project detail
    visitProject (id) {
      console.log(id)
      this.$router.push(`/project/${id}`)
    }
  }
}
</script>
