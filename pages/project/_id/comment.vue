<template>
  <div class="h-screen">
    <nav class="grid grid-cols-2 w-full fixed bg-white z-50">
      <div
        class="py-[17px] px-[28px] border-b-2 border-r-2 flex items-center justify-between"
      >
        <h1
          class="font-cabinet-grotesk hidden tablet:block font-bold text-lg laptop:text-2xl"
        >
          Tandai Area (Opsional)
        </h1>
        <button
          ref="toggleMarker"
          class="px-3 py-2 laptop:p-[10px] text-sm laptop:text-lg border-2 rounded-lg font-cabinet-grotesk flex items-center gap-2"
          :disabled="disableMarker"
          :class="[
            disableMarker
              ? 'bg-slate-400 '
              : 'shadow-lg shadow-indigo-500/50 bg-[#6C61E1] duration-300',
            showMarker ? 'bg-white shadow-none duration-300' : '  bg-[#6C61E1] '
          ]"
          @click="toggleMarker"
        >
          <span v-if="showMarker" class="ml-2 text-white">
            <icon-galery-trash-icon />
          </span>
          <span
            :class="{ 'text-white': !showMarker, 'text-red-600': showMarker }"
          >
            {{ showMarker ? 'Hapus Area ' : 'Pilih Area' }}
          </span>
        </button>
      </div>
      <div
        class="py-[17px] px-[28px] border-b-2 border-r-2 flex items-center laptop:justify-between justify-end"
      >
        <div class="hidden items-center gap-3 laptop:gap-5 laptop:flex">
          <icon-galery-avatar-icon />
          <h3 class="font-cabinet-grotesk text-sm laptop:text-lg font-medium">
            {{ username }}
          </h3>
        </div>

        <div class="relative">
          <button
            class="flex items-center text-sm laptop:text-base laptop:gap-3 border-2 rounded-lg px-3 py-2 laptop:px-6 laptop:py-3"
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
    <main class="flex flex-col laptop:grid laptop:grid-cols-2 w-full h-full">
      <section
        class="left-section flex justify-center items-center px-5 py-5 border-r-2 pt-24 h-[60%] laptop:h-screen laptop:max-h-screen"
      >
        <div class="flex justify-center items-center w-full h-full">
          <div
            v-if="form.getImgId && form.getImgId.url"
            ref="imageContainer"
            class="container-image h-full relative"
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
      <section class="laptop:pt-24 h-[50%] laptop:h-auto">
        <form class="flex flex-col h-full" @submit.prevent="addComment">
          <div class="relative laptop:border-b-2 h-[100%] px-5">
            <textarea
              id="comment"
              v-model="form.comment"
              name="comment"
              placeholder="Ketikan sesuatu..."
              class="p-5 text-[14px] outline-none w-full h-full border rounded-md laptop:border-none laptop:h-[75vh] relative font-cabinet-grotesk"
              @input="limitCharacterCount"
            />
            <p
              class="text-end absolute bottom-0 right-6 laptop:bottom-5 laptop:right-5 font-cabinet-grotesk text-gray-400"
            >
              {{ characterCount }}/250
            </p>
          </div>
          <div
            class="flex justify-between items-center h-[30%] laptop:h-[100%] px-5"
          >
            <button
              class="text-[#6C61E1] font-cabinet-grotesk"
              type="button"
              @click="closeComment"
            >
              Batalkan
            </button>
            <button
              type="submit"
              class="px-10 py-2 laptop:px-[68px] laptop:py-[16px] rounded-md font-cabinet-grotesk text-[#B0B0B5]"
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
        <modal-close-comment />
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
      startY: 0,
      disableMarker: true
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
    },
    markerActive () {
      return this.form.getImgId !== null
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.disabled = !this.isFormValid
        this.disableMarker = !this.markerActive
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
    ...mapMutations('project', ['setCloseModal']),

    limitCharacterCount () {
      if (this.form.comment.length > 250) {
        this.form.comment = this.form.comment.slice(0, 250) // Memotong komentar menjadi 250 karakter
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
    },

    // NOTE - navigasi
    // back (path) {
    //   this.$router.push(path)
    // }
    closeComment () {
      // @click="back(`/project/${$route.params.id}`)"
      this.setCloseModal(true)
    }
  }
}
</script>
