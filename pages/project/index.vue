<template>
  <div id="project">
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
            <button
              v-if="currentImageIndex !== 0"
              class="slider-button absolute top-1/2 left-3 rounded-full shadow-xl p-4"
              @click="prevImage"
            >
              <icon-galery-slider-icon class="rotate-180" />
            </button>

            <div ref="imageContainer" class="container-image h-fit relative">
              <div
                v-if="showMarker"
                :style="{ left: markerX + 'px', top: markerY + 'px' }"
                class="marker p-10 absolute transform -translate-x-1/2 -translate-y-1/2"
              >
                <icon-galery-comment-mark class="cursor-move" />
              </div>
              <img
                v-if="Array.isArray(projectImage) && projectImage.length > 0"
                :src="projectImage[currentImageIndex]"
                alt="Image preview"
                class="object-contain w-full h-[100%]"
              >
              <img
                v-else
                :src="projectImage"
                alt="Image preview"
                class="object-contain w-full h-[100%]"
              >
            </div>
            <button
              v-if="Array.isArray(projectImage) && projectImage.length > 1"
              class="slider-button absolute top-1/2 right-3 rounded-full shadow-xl p-4"
              @click="nextImage"
            >
              <icon-galery-slider-icon />
            </button>
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

          <!-- to see detail like = comment = modification -->
          <div class="flex justify-between border-t-2 border-b-2 mt-5 py-5">
            <p
              class="font-cabinet-grotesk text-xl cursor-default"
              @click="selectedMenu = 'like'"
            >
              {{ likeCount }}
              <span class="text-[#95959D]">Suka</span>
            </p>
            <p
              class="font-cabinet-grotesk text-xl cursor-default"
              @click="selectedMenu = 'comment'"
            >
              {{ commentCount }}
              <span class="text-[#95959D]">Komentar</span>
            </p>
            <p class="font-cabinet-grotesk text-xl">
              120
              <span class="text-[#95959D]">Modifikasi</span>
            </p>
          </div>

          <!-- give reaction to project -->
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
            <!-- :to="`/comments/${getMyProject[currentImageIndex].id}`" -->
            <p
              class="font-cabinet-grotesk text-xl flex items-center gap-2 cursor-pointer"
              @click="sendComment(getMyProject[projectIndex].id)"
            >
              <icon-galery-comment-icon class="cursor-pointer" />
              <span class="text-[#95959D]">Komentar</span>
            </p>
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-retweet-icon class="cursor-pointer" />
              <span class="text-[#95959D]">Modifikasi</span>
            </p>
          </div>

          <!-- show comment and likes -->
          <div class="h-[65%] overflow-hidden overflow-y-scroll">
            <showLike v-if="selectedMenu == 'like'" />
            <showComment
              v-if="selectedMenu == 'comment'"
              :show-marker="showMarker"
              @displayMarker="markerOnOff"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Project',
  layout: 'ProjectSession',
  data () {
    return {
      currentImageIndex: 0,
      fillColor: '#fff',
      strokeColor: '#19191B',
      projectIndex: 0,

      selectedMenu: 'like',
      showMarker: false,
      markerX: 0,
      markerY: 0
    }
  },

  computed: {
    // get project
    ...mapState('project', ['projects']),
    ...mapGetters('project', ['getMyProject']),
    ...mapGetters('comment', ['getAllComment']),
    ...mapGetters('comment', ['commentCount']),
    ...mapState('likes', ['likes', 'isLiked', 'likeCount']),
    ...mapGetters('likes', ['getLike']),

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
      if (project && project.images && project.images.length > 0) {
        return project.images.map(image => image.image_url)
      }
      return []
    }
  },
  mounted () {
    const projectId = this.$route.params.id // Mengambil nilai parameter 'id' dari properti $route
    // console.log(projectId)
    this.fetchMyProject()
    this.fetchLike(projectId)
    this.fetchComment(projectId)

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
    ...mapActions('comment', ['fetchComment']),

    setActiveProject (index) {
      this.projectIndex = index
    },

    sendComment (projectId) {
      this.$router.push(`/comments/${projectId}`)
    },

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
    },
    prevImage () {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    nextImage () {
      if (this.currentImageIndex < this.projectImage.length - 1) {
        this.currentImageIndex++
      }
    },

    markerOnOff (showMarker) {
      this.showMarker = showMarker

      // Memperbarui posisi marker berdasarkan koordinat
      if (showMarker) {
        const comment = this.getAllComment[0] // Ambil data komentar pertama dari getAllComment
        this.markerX = comment.x_axis
        this.markerY = comment.y_axis
      } else {
        // Reset posisi marker jika tidak ditampilkan
        this.markerX = 0
        this.markerY = 0
      }
    }
  }
}
</script>
