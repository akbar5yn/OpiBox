<template>
  <div id="modification">
    <section
      class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center fixed w-full bg-white z-50"
    >
      <!-- icon opibox -->
      <button @click="closeCreate">
        <icon-galery-opi-box />
      </button>
    </section>

    <!-- main form -->
    <form @submit.prevent="simpan">
      <div class="laptop:flex h-screen">
        <!-- image section -->
        <div
          class="px-5 laptop:p-9 laptop:px-20 pt-[80px] w-full h-[50%] laptop:h-auto laptop:mt-16 border-r laptop:w-1/2 relative"
        >
          <!-- image preview hidden -->
          <div
            v-if="!showPreview"
            class="border-2 h-full border-dashed border-[#95959D] py-4 flex flex-col items-center justify-center gap-y-4 font-cabinet-grotesk"
          >
            <icon-galery-image-icon />
            <p class="text-[#95959D] text-base laptop:text-2xl text-center">
              Anda belum mengunggah gambar
            </p>
            <label
              for="addImg"
              class="flex items-center bg-[#6C61E1] px-3 py-1 laptop:px-5 laptop:py-3 gap-3 rounded-lg cursor-pointer"
            >
              <span class="text-white font-cabinet-grotesk laptop:text-lg">Unggah Gambar</span>
            </label>
            <input
              id="addImg"
              type="file"
              name="image"
              accept="image/*"
              class="hidden"
              @change="inputImage"
            >
          </div>

          <!-- image preview muncul-->
          <div
            v-if="showPreview"
            id="image-preview"
            class="h-full border-dashed border-[#95959D] flex flex-col items-center justify-center"
          >
            <button
              class="absolute top-20 left-5 laptop:top-5 laptop:left-5 rounded-full shadow-xl p-4"
              @click="removeImage"
            >
              <icon-galery-trash-icon />
            </button>
            <img
              :src="imgUrl"
              alt="Image preview"
              class="object-contain w-full h-[100%]"
            >
          </div>
        </div>

        <!-- form section -->
        <div
          class="pt-2 laptop:pt-16 laptop:border-r h-[50%] w-full laptop:w-1/2 laptop:h-full"
        >
          <div class="p-5 laptop:h-[10%] my-auto flex flex-col">
            <div class="flex items-center justify-between">
              <h3
                class="font-cabinet-grotesk laptop:text-lg font-medium flex items-center gap-2 laptop:gap-5"
              >
                <icon-galery-avatar-icon />
                {{ username }}
              </h3>
              <div class="relative">
                <button
                  id="choose-img"
                  class="flex items-center laptop:gap-3 border-2 rounded-lg px-3 py-1 laptop:px-6 laptop:py-3"
                  type="button"
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
                  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
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
                      @click="selectImg(image.id)"
                    >
                    <label
                      class="w-full"
                      :for="'selectImg' + index + imageIndex"
                    >
                      Gambar {{ imageIndex + 1 }}
                    </label>
                  </div>

                  <!-- Add more dropdown items as needed -->
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <hr class="w-full">
          </div>
          <!-- desc modification -->
          <div id="decs-modification" class="h-[80%] laptop:h-[89%]">
            <div class="flex flex-col h-full">
              <div class="relative border-b-2 h-full">
                <textarea
                  id="comment"
                  v-model="form.caption"
                  name="comment"
                  placeholder="Ketikan sesuatu..."
                  class="p-5 text-[14px] outline-none w-full h-full laptop:h-[70vh] relative font-cabinet-grotesk"
                  @input="limitCharacterCount"
                />
                <p
                  class="text-end absolute bottom-5 right-5 font-cabinet-grotesk text-gray-400"
                >
                  {{ characterCount }}/250
                </p>
              </div>
              <div class="flex justify-between items-center laptop:h-full p-5">
                <button
                  class="text-[#6C61E1] font-cabinet-grotesk"
                  type="button"
                  @click="closeCreate"
                >
                  Batalkan
                </button>
                <button
                  type="submit"
                  class="px-10 py-2 laptop:px-[68px] laptop:py-[16px] rounded-md font-cabinet-grotesk text-[#B0B0B5]"
                  :disabled="!isFormValid"
                  :class="{
                    'bg-[#6C61E1] text-white': isFormValid,
                    'bg-gray-200': !isFormValid
                  }"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <modal-close-modification />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Modifcation',
  layout: 'ProjectSession',
  async asyncData ({ store, route }) {
    await store.dispatch('project/getSingleProject', route.params.id)
  },

  data () {
    return {
      index: 0,
      form: {
        caption: ''
      },
      isOpen: false,
      disabled: true,
      project: this.$store.state.project.detailProject,
      fileInput: null
    }
  },

  mounted () {},

  computed: {
    ...mapState('modification', ['showPreview']),
    ...mapGetters('modification', ['getImgUrl']),

    username () {
      return this.$auth.user ? this.$auth.user.name : 'Guest'
    },

    characterCount () {
      return this.form.caption.length // menghitung panjang karakter menggunakan computed property
    },

    isFormValid () {
      const { dataImage, imageId } = this.$store.state.modification.form
      return (
        this.form.caption !== '' && dataImage instanceof File && imageId !== ''
      )
    },

    // NOTE - get img url for showing
    imgUrl () {
      const img = URL.createObjectURL(this.getImgUrl)
      return img
    }
  },

  methods: {
    ...mapMutations('modification', [
      'setShowPreview',
      'setImgIdState',
      'clearFormData'
    ]),
    ...mapActions('project', ['fetchMyProject']),
    ...mapActions('modification', [
      'setDataImage',
      'clearImageUrl',
      'createModification'
    ]),
    ...mapMutations('project', ['setCloseModal']),

    limitCharacterCount () {
      if (this.form.caption.length > 250) {
        this.form.caption = this.form.caption.slice(0, 250) // Memotong komentar menjadi 250 karakter
      }
    },

    inputImage (event) {
      const files = event.target.files[0]
      console.log(files)
      this.setDataImage(files)
      this.setShowPreview(true)
    },

    removeImage () {
      this.clearImageUrl()
      this.setShowPreview(false)
    },

    async simpan () {
      const projectId = this.$route.params.id
      const response = await this.createModification({
        projectId,
        caption: this.form.caption
      })
      if (response.status === 201) {
        this.$toast.success(response.message)
        this.$router.go(-1)
      } else {
        this.$toast.error(response.data.message)
      }
    },

    selectImg (imgId) {
      this.setImgIdState(imgId)
    },

    // NOTE - navigasi
    back (path) {
      this.$router.push(path)
      this.clearFormData()
    },

    closeCreate () {
      this.setCloseModal(true)
    }
  }
}
</script>
