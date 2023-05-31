<template>
  <div class="">
    <section
      class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center fixed w-full bg-white z-50"
    >
      <NuxtLink to="/Beranda">
        <icon-galery-opi-box />
      </NuxtLink>
      <div class="flex items-center space-x-10">
        <icon-galery-create-icon />
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="navigateTo(`/project/${$route.params.id}`)"
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
          <button
            v-if="Array.isArray(projectImage) && projectImage.length > 1"
            class="slider-button absolute top-1/2 right-3 rounded-full shadow-xl p-4"
            @click="nextImage"
          >
            <icon-galery-slider-icon />
          </button>
        </div>
      </div>
      <!-- Todolist Section -->
      <div class="flex flex-col mt-16 flex-grow">
        <div class="flex items-center justify-between mt-6 mx-6">
          <h1 class="text-2xl font-semibold">
            Daftar Tugas
          </h1>
          <svg
            class="w-3 cursor-pointer"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            @click="navigateTo(`/project/${$route.params.id}`)"
          >
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="#151B1E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="mt-4">
          <TodoItem
            v-for="(item, key) in todolist"
            :key="key"
            :item="item"
            :key-item="key + 1"
            :selected-todo="selectedTodo"
            @select-todo="handleSelectTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'ProjectSession',
  middleware: 'auth',
  async asyncData ({ store, route }) {
    await store.dispatch('todolist/getTodolist', route.params.id)
  },
  data () {
    return {
      currentImageIndex: 0,
      fillColor: '#fff',
      strokeColor: '#19191B',
      projectIndex: 0,
      todolist: this.$store.state.todolist.todolist,
      selectedTodo: 0
    }
  },
  computed: {
    ...mapState('project', ['projects']),
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
    this.fetchMyProject()
  },
  methods: {
    ...mapActions('project', ['fetchMyProject']),
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
    handleSelectTodo (val) {
      this.selectedTodo = val
    }
  }
}
</script>
