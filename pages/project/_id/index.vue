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
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="navigateTo(`/project/${$route.params.id}/todolist`)"
        >
          <path
            d="M5 3.5H3C1.89543 3.5 1 4.39543 1 5.5V17.5C1 18.6046 1.89543 19.5 3 19.5H13C14.1046 19.5 15 18.6046 15 17.5V5.5C15 4.39543 14.1046 3.5 13 3.5H11M5 3.5C5 4.60457 5.89543 5.5 7 5.5H9C10.1046 5.5 11 4.60457 11 3.5M5 3.5C5 2.39543 5.89543 1.5 7 1.5H9C10.1046 1.5 11 2.39543 11 3.5M8 10.5H11M8 14.5H11M5 10.5H5.01M5 14.5H5.01"
            stroke="#19191B"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
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
              {{ project.title }}
            </h2>
            <p class="font-cabinet-grotesk text-xl tracking-wide mt-5">
              {{ project.caption }}
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
              @click="sendComment"
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
  middleware: 'auth',

  async asyncData ({ store, route }) {
    await store.dispatch('project/getSingleProject', route.params.id)
  },
  data () {
    return {
      currentImageIndex: 0,
      fillColor: '#fff',
      strokeColor: '#19191B',
      projectIndex: 0,
      project: this.$store.state.project.detailProject,

      selectedMenu: 'like',
      showMarker: false,
      markerX: 0,
      markerY: 0
    }
  },

  computed: {
    // get project
    ...mapState('project', ['projects']),
    // ...mapGetters('project', ['getMyProject']),
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
    /* projectImage () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      if (project && project.images && project.images.length > 0) {
        return project.images.map(image => image.image_url)
      }
      return []
    }, */
    projectImage () {
      if (
        this.project &&
        this.project.images &&
        this.project.images.length > 0
      ) {
        return this.project.images.map(image => image.image_url)
      }
      return []
    }
  },
  mounted () {
    const projectId = this.$route.params.id // Mengambil nilai parameter 'id' dari properti $route
    // console.log(projectId)
    // this.fetchMyProject()
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
    // ...mapActions('project', ['fetchMyProject']),
    ...mapActions('likes', ['fetchLike', 'likeProject', 'disLike']),
    ...mapMutations('likes', ['setLike']),
    ...mapActions('comment', ['fetchComment']),

    setActiveProject (index) {
      this.projectIndex = index
    },

    sendComment (projectId) {
      this.$router.push(`/project/${this.$route.params.id}/comment`)
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
    navigateTo (path) {
      this.$router.push(path)
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
