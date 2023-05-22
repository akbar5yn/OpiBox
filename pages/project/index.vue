<template>
  <div>
    <section
      class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center fixed w-full bg-white z-50"
    >
      <NuxtLink to="/Beranda">
        <icon-galery-opi-box />
      </NuxtLink>
      <div class="flex items-center gap-11">
        <icon-galery-create-icon />
        <icon-galery-list-icon />
        <button
          class="flex items-center px-6 py-3 gap-4 bg-[#6C61E1] text-white rounded-lg"
        >
          <icon-galery-shared-with-me color="white" />
          Bagikan
        </button>
      </div>
    </section>

    <section>
      <div class="flex h-screen">
        <!-- image section -->
        <div class="p-9 px-20 mt-16 border-r w-1/2 relative">
          <!-- image preview muncul-->
          <div
            id="image-preview"
            class="h-full border-dashed border-[#95959D] flex flex-col items-center justify-center"
          >
            <!-- <button
              v-if="currentImageIndex !== 0"
              class="slider-button absolute top-1/2 left-3 rounded-full shadow-xl p-4"
              @click="prevImage"
            >
              <icon-galery-slider-icon class="rotate-180" />
            </button> -->
            <img
              :src="projectImage"
              alt="Image preview"
              class="object-contain w-full h-[100%]"
            >
            <!-- <button
              v-if="selectedImg.length > 1"
              class="slider-button absolute top-1/2 right-3 rounded-full shadow-xl p-4"
              @click="nextImage"
            >
              <icon-galery-slider-icon />
            </button> -->
          </div>
        </div>
        <div class="p-9 mt-16 border-r w-1/2">
          <div class="">
            <h2 class="text-3xl font-cabinet-grotesk font-medium">
              {{ projectTitle }}
            </h2>
            <p class="font-cabinet-grotesk text-xl tracking-wide mt-5">
              {{ projectDesc }}
            </p>
          </div>
          <div class="flex justify-between border-t-2 border-b-2 mt-5 py-5">
            <p class="font-cabinet-grotesk text-xl">
              {{ likes }}
              <span class="text-[#95959D]">Suka</span>
            </p>
            <p class="font-cabinet-grotesk text-xl">
              200
              <span class="text-[#95959D]">Komentar</span>
            </p>
            <p class="font-cabinet-grotesk text-xl">
              120
              <span class="text-[#95959D]">Modifikasi</span>
            </p>
          </div>
          <div class="flex justify-between border-b-2 mt-5 py-5">
            <p
              v-if="isLiked"
              class="font-cabinet-grotesk text-xl flex items-center gap-2"
            >
              <icon-galery-like-icon
                class="cursor-pointer"
                fill="red"
                stroke="red"
                @like-clicked="handleDissLikeProject"
              />
              <span class="text-[#95959D]">Suka</span>
            </p>
            <p
              v-else
              class="font-cabinet-grotesk text-xl flex items-center gap-2"
            >
              <icon-galery-like-icon
                class="cursor-pointer"
                :fill="fillColor"
                :stroke="strokeColor"
                @like-clicked="handleLikeProject"
              />
              <span class="text-[#95959D]">Suka</span>
            </p>
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-comment-icon class="cursor-pointer" />
              <span class="text-[#95959D]">Komentar</span>
            </p>
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-retweet-icon class="cursor-pointer" />
              <span class="text-[#95959D]">Modifikasi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Project',
  layout: 'ProjectSession',
  data () {
    return {
      fillColor: '#fff',
      strokeColor: '#19191B'
    }
  },

  computed: {
    // get project
    ...mapState('project', ['projects']),
    ...mapState('likes', ['likes', 'isLiked']),

    projectTitle () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      return project ? project.title : ''
    },
    projectDesc () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      return project ? project.caption : ''
    },
    projectImage () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      return project ? project.images : ''
    }
  },
  mounted () {
    const projectId = this.$route.params.id // Mengambil nilai parameter 'id' dari properti $route
    this.fetchMyProject()
    this.fetchLike(projectId)

    // Ambil nilai isLiked dari penyimpanan lokal saat komponen dibuat
    const isLiked = localStorage.getItem('isLiked')
    // Atur nilai isLiked ke state jika tersedia
    if (isLiked !== null) {
      this.setLike(isLiked === 'true')
    }
  },

  methods: {
    ...mapActions('project', ['fetchMyProject']),
    ...mapActions('likes', ['fetchLike', 'likeProject', 'disLike']),
    ...mapMutations('likes', ['setLike']),

    async handleLikeProject () {
      const projectId = this.$route.params.id // Ganti dengan ID proyek yang sesuai
      await this.likeProject(projectId)
      this.setLike(true)
    },

    async handleDissLikeProject () {
      const projectId = this.$route.params.id // Ganti dengan ID proyek yang sesuai
      // const userId = this.$store.state.auth.user.id
      await this.disLike(projectId)
      this.setLike(false)
    }
  }
}
</script>
