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
              50
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
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-like-icon />
              <span class="text-[#95959D]">Suka</span>
            </p>
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-comment-icon />
              <span class="text-[#95959D]">Komentar</span>
            </p>
            <p class="font-cabinet-grotesk text-xl flex items-center gap-2">
              <icon-galery-retweet-icon />
              <span class="text-[#95959D]">Modifikasi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Project',
  layout: 'ProjectSession',

  computed: {
    // projectId () {
    //   const params = this.$route.params.id
    //   console.log(params)
    //   return params
    // }
    ...mapState('project', ['projects']),
    projectTitle () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      return project ? project.title : ''
    },
    projectDesc () {
      const projectId = parseInt(this.$route.params.id)
      const project = this.projects.find(project => project.id === projectId)
      return project ? project.caption : ''
    }
    // projectImage () {
    //   const projectId = parseInt(this.$route.params.id)
    //   const project = this.projects.find(project => project.id === projectId)
    //   return project ? project.images.id.image : ''
    // }
  },
  mounted () {
    this.fetchMyProject()
  },

  methods: {
    ...mapActions('project', ['fetchMyProject'])
  }
}
</script>
