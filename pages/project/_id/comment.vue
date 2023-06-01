<template>
  <div class="h-screen">
    <nav class="grid grid-cols-2 w-full fixed bg-white z-50">
      <div
        class="py-[17px] px-[28px] border-b-2 border-r-2 flex items-center justify-between"
      >
        <h1 class="font-cabinet-grotesk font-bold text-2xl">
          Tandai Area (Opsional)
        </h1>
        <button class="p-[10px] border-2 rounded-lg" @click="toggleMarker">
          <icon-galery-mark-icon />
        </button>
      </div>
      <div
        class="py-[17px] px-[28px] border-b-2 border-r-2 flex items-center justify-between"
      >
        <div class="flex items-center gap-5">
          <icon-galery-avatar-icon />
          <h3 class="font-cabinet-grotesk text-lg font-medium">
            {{ username }}
          </h3>
        </div>

        <div class="relative">
          <button
            class="flex items-center gap-3 border-2 rounded-lg px-6 py-3"
            @click="isOpen = !isOpen"
          >
            <span class="font-cabinet-grotesk">Gambar 1</span>
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M10 14l6-6H4l6 6z" />
            </svg>
          </button>

          <div
            v-if="isOpen"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <!-- Dropdown items img -->

            <div
              v-for="(image, imageIndex) in project.images"
              :key="imageIndex"
              class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 justify-center gap-3"
            >
              <input
                :id="'selectImg' + index + imageIndex"
                v-model="form.getImgId"
                type="radio"
                :value="{ url: image.image_url, id: image.id }"
                :name="'selectImg' + index"
                @click="selectImg"
              >
              <label class="w-full" :for="'selectImg' + index + imageIndex">
                Gambar {{ imageIndex + 1 }}
              </label>
            </div>

            <!-- Add more dropdown items as needed -->
          </div>
        </div>
      </div>
    </nav>
    <main class="grid grid-cols-2 w-full h-full">
      <section
        class="left-section flex justify-center items-center p-5 border-r-2 mt-24"
      >
        <div class="flex justify-center items-center w-full h-full">
          <div
            v-if="form.getImgId && form.getImgId.url"
            ref="imageContainer"
            class="container-image h-fit relative"
          >
            <div
              v-if="showMarker"
              class="marker p-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :style="{ left: markerX + 'px', top: markerY + 'px' }"
              @mousedown="startDrag"
              @mousemove="drag"
              @mouseup="endDrag"
              @mouseleave="endDrag"
            >
              <icon-galery-comment-mark class="cursor-move" />
            </div>
            <img
              :src="form.getImgId.url"
              alt="Image preview"
              class="object-contain w-full h-full"
            >
          </div>
          <div
            v-else
            class="border-2 text-center flex justify-center items-center border-dashed w-full h-full"
          >
            pilih gambar untuk dijadikan komentar
          </div>
        </div>
      </section>
      <section class="mt-24">
        <form class="flex flex-col h-full" @submit.prevent="addComment">
          <div class="relative border-b-2">
            <textarea
              id="comment"
              v-model="form.comment"
              name="comment"
              placeholder="Ketikan sesuatu..."
              class="p-5 text-[14px] outline-none w-full h-[75vh] relative font-cabinet-grotesk"
              @input="limitCharacterCount"
            />
            <p
              class="text-end absolute bottom-5 right-5 font-cabinet-grotesk text-gray-400"
            >
              {{ characterCount }}/50
            </p>
          </div>
          <div class="flex justify-between items-center h-[100%] px-5">
            <NuxtLink class="text-[#6C61E1] font-cabinet-grostek" to="/Beranda">
              Batalkan
            </NuxtLink>
            <button
              type="submit"
              class="px-[68px] py-[16px] rounded-md font-cabinet-grotesk text-[#B0B0B5]"
              :disabled="disabled"
              :class="{
                'bg-[#6C61E1] text-white': !disabled,
                'bg-gray-200': disabled
              }"
            >
              Kirim
            </button>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'AddComment',
  layout: 'ProjectSession',
  middleware: 'auth',
  async asyncData ({ store, route }) {
    await store.dispatch('profile/getProfile')
    await store.dispatch('project/getSingleProject', route.params.id)
  },

  data () {
    return {
      index: 0,
      showMarker: false,
      form: {
        comment: '',
        projectId: '',
        xAxis: 0,
        yAxis: 0,
        getImgId: null
      },
      isOpen: false,
      disabled: true,
      project: this.$store.state.project.detailProject,
      markerX: 0,
      markerY: 0,
      isDragging: false,
      startX: 0,
      startY: 0
    }
  },
  computed: {
    ...mapState('profile', ['detailUser']),
    ...mapState('project', ['projects']),
    ...mapState('comment', ['forms']),
    // ...mapGetters('project', ['getMyProject']),
    username () {
      return this.$auth.user ? this.$auth.user.name : 'Guest'
    },
    characterCount () {
      return this.form.comment.length // menghitung panjang karakter menggunakan computed property
    },
    isFormValid () {
      return (
        this.form.comment !== '' &&
        this.form.xAxis !== '' &&
        this.form.yAxis !== '' &&
        this.form.getImgId !== null
      )
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.disabled = !this.isFormValid
      }
    }
  },
  mounted () {
    this.fetchMyProject()
  },
  methods: {
    ...mapActions('project', ['fetchMyProject']),
    ...mapMutations('comment', ['setImg', 'setForm']),
    ...mapActions('comment', ['postData']),

    limitCharacterCount () {
      if (this.form.comment.length > 50) {
        this.form.comment = this.form.comment.slice(0, 50) // Memotong komentar menjadi 50 karakter
      }
    },
    selectImg () {
      const setImgId = this.form.getImgId

      if (setImgId) {
        this.setImg(setImgId.id)
      }
    },
    async addComment () {
      this.disabled = true
      this.form.projectId = this.$route.params.id
      const selectedImgId = this.form.getImgId ? this.form.getImgId.id : null
      // this.setImg(selectedImgId)
      const formData = {
        body: this.form.comment,
        project_id: this.form.projectId,
        x_axis: this.form.xAxis,
        y_axis: this.form.yAxis,
        image_id: selectedImgId
      }

      console.log({ formData })
      console.log(this.$route.params)
      // this.setForm(formData)
      // this.postData(formData)
      const response = await this.postData(formData)

      if (response.status === 201) {
        this.$toast.success(response.message)
        this.$router.go(-1)
      } else {
        this.$toast.error(response.data.message)
      }
      this.disabled = false
    },

    toggleMarker (event) {
      this.showMarker = !this.showMarker
      const x = event.clientX
      const y = event.clientY
      console.log('koordinat klik', x, y)
    },
    startDrag (event) {
      this.isDragging = true
      this.startX = event.clientX
      this.startY = event.clientY
      event.preventDefault()
    },
    drag (event) {
      if (this.isDragging) {
        const offsetX = event.clientX - this.startX
        const offsetY = event.clientY - this.startY
        this.markerX += offsetX
        this.markerY += offsetY
        this.startX = event.clientX
        this.startY = event.clientY

        const containerImage = this.$refs.imageContainer
        const containerRect = containerImage.getBoundingClientRect()

        // Batasi pergeseran marker ke dalam batasan container-image
        if (this.markerX < 0) {
          this.markerX = 0
        } else if (this.markerX > containerRect.width) {
          this.markerX = containerRect.width
        }

        if (this.markerY < 0) {
          this.markerY = 0
        } else if (this.markerY > containerRect.height) {
          this.markerY = containerRect.height
        }
        console.log('Koordinat X:', this.markerX)
        console.log('Koordinat Y:', this.markerY)
      }
    },
    updateCoordinates () {
      this.form.xAxis = this.markerX
      this.form.yAxis = this.markerY
    },
    endDrag () {
      this.updateCoordinates()
      this.isDragging = false
    }
  }
}
</script>
