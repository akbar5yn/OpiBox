<template>
  <div id="create-project">
    <form class="w-full" @submit.prevent="simpan">
      <!-- topbar -->
      <section
        class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center fixed w-full z-50"
      >
        <!-- icon opibox -->
        <NuxtLink to="/beranda">
          <icon-galery-opi-box />
        </NuxtLink>
        <!-- icon else -->
        <div class="flex items-center">
          <button
            class="bg-[#6C61E1] text-white px-[18px] py-[8px] rounded-lg flex items-center gap-[18px]"
            :class="{
              'bg-[#E5E5E6] cursor-not-allowed text-[#B0B0B5]': !isFormValid
            }"
            type="submit"
            :disabled="!isFormValid"
          >
            <icon-galery-checklist-icon />
            Simpan
          </button>
        </div>
      </section>

      <!-- main form -->
      <section>
        <div class="flex h-screen">
          <!-- image section -->
          <div class="p-9 px-20 mt-16 border-r w-1/2 relative">
            <!-- image preview hidden -->
            <div
              v-if="edit.images.length === 0"
              class="border-2 h-full border-dashed border-[#95959D] py-4 flex flex-col items-center justify-center gap-y-2"
            >
              <icon-galery-image-icon />
              <p class="text-[#95959D] text-base xl:text-3xl text-center">
                Anda belum mengunggah gambar
              </p>
            </div>

            <!-- image preview muncul-->
            <div
              v-if="edit && edit.images.length > 0"
              id="image-preview"
              class="h-full border-dashed border-[#95959D] flex flex-col items-center justify-center"
            >
              <button
                type="button"
                class="absolute top-5 left-5 rounded-full shadow-xl p-4"
                @click="
                  removeImage(
                    currentImageIndex,
                    edit.images[currentImageIndex].id
                  )
                "
              >
                <icon-galery-trash-icon />
              </button>
              <button
                v-if="currentImageIndex !== 0"
                class="slider-button absolute top-1/2 left-3 rounded-full shadow-xl p-4"
                type="button"
                @click="prevImage"
              >
                <icon-galery-slider-icon class="rotate-180" />
              </button>
              <img
                v-if="edit.images[currentImageIndex]?.image_url"
                :src="edit.images[currentImageIndex].image_url"
                alt="Image preview"
                class="object-contain w-full h-[100%]"
              >
              <img
                v-if="edit.images[currentImageIndex]?.base64"
                :src="edit.images[currentImageIndex].base64"
                alt="Image preview"
                class="object-contain w-full h-[100%]"
              >

              <button
                v-if="edit.images.length > 1"
                type="button"
                class="slider-button absolute top-1/2 right-3 rounded-full shadow-xl p-4"
                @click="nextImage"
              >
                <icon-galery-slider-icon />
              </button>
            </div>
          </div>

          <!-- form section -->
          <div class="px-9 py-9 pt-[100px] border-r w-1/2 h-full relative">
            <!-- btn akses & add gambar -->
            <div class="flex justify-between">
              <div
                class="flex items-center bg-[#6C61E1] px-5 py-3 gap-3 rounded-lg"
              >
                <icon-galery-setting-icon color="white" />
                <span
                  v-if="edit.project_type === 'team'"
                  class="text-white font-cabinet-grotesk text-lg"
                >Team</span>
                <span
                  v-if="edit.project_type === 'open'"
                  class="text-white font-cabinet-grotesk text-lg"
                >Umum</span>
              </div>
              <label
                for="addImg"
                class="flex items-center bg-[#6C61E1] px-5 py-3 gap-3 rounded-lg cursor-pointer"
              >
                <icon-galery-add-team width="30" />
                <span class="text-white font-cabinet-grotesk text-lg">Tambah gambar</span>
              </label>
              <input
                id="addImg"
                type="file"
                name="image"
                accept="image/*"
                multiple
                class="hidden"
                @change="displayImage"
              >
            </div>
            <!-- judul proyek -->
            <div class="flex flex-col gap-y-3 mt-4 font-cabinet-grotesk">
              <div class="flex justify-between items-center">
                <label for="judul" class="text-[20px]">Judul Proyek</label>
                <!-- <div v-if="loading" class="text-center flex items-center gap-3">
                  <div
                    class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"
                  />
                  <p class="mt-2 text-base">
                    Loading...
                  </p>
                </div> -->
              </div>
              <input
                id="judul"
                v-model="form.judul"
                name="judul"
                type="text"
                :placeholder="edit.title"
                class="px-2 py-3 text-[14px] outline-none border rounded-lg tracking-wider"
              >
            </div>

            <!-- desc proyek -->
            <div class="flex flex-col mt-4 max-h-max object-cover h-[50%]">
              <label for="desc" class="text-[20px]">Deskripsi</label>
              <textarea
                id="desc"
                v-model="form.deskripsi"
                name="desc"
                :placeholder="edit.caption"
                class="px-2 py-3 text-[14px] outline-none border rounded-lg h-[100%]"
                cols="30"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- show modal for access -->
      <modal-kelola-akses />
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'CreateProject',
  layout: 'ProjectSession',

  async asyncData ({ store, route }) {
    await store.dispatch('edit/getSelectedDetailPorjects', route.params.id)
  },

  data () {
    return {
      edit: this.$store.state.edit.detailProject.data,
      currentImageIndex: 0,

      form: {
        judul: '',
        deskripsi: ''
      },
      dataFile: [],
      isSubmitting: false
    }
  },

  computed: {
    isFormValid () {
      // const { projectType } = this.$store.state.project.form
      return (
        this.form.judul !== '' && this.form.deskripsi !== ''
        // projectType !== ''
      )
    }
  },

  mounted () {
    this.getSelectedDetailPorjects()
  },

  methods: {
    ...mapMutations('edit', [
      'removeSelectedImage',
      'setTitle',
      'setCaption',
      'setSelectedImg',
      'addImage',
      'deleteImage'
    ]),
    ...mapActions('edit', [
      'getSelectedDetailPorjects',
      'setDataImage',
      'editProject'
    ]),

    // NOTE - added image
    inputImage (event) {
      const files = event.target.files[0]
      console.log(files)
      this.setSelectedImg(files)
      // this.setShowPreview(true)
    },

    displayImage (event) {
      const files = event.target.files
      Object.keys(files).forEach(async (key) => {
        this.dataFile.push({
          file: files[key],
          base64: await this.readFromFile(files[key])
        })
        this.setSelectedImg({
          file: files[key],
          base64: await this.readFromFile(files[key])
        })
        this.addImage({
          file: files[key],
          base64: await this.readFromFile(files[key])
        })
      })
    },
    readFromFile (file) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader()
        fr.onload = () => resolve(fr.result)
        fr.onerror = err => reject(err)
        fr.readAsDataURL(file)
      })
    },

    removeImage (index, idImage) {
      this.removeSelectedImage(index)
      this.deleteImage({
        idImage
      })
      if (this.edit.images.length === 0) {
        // Jika tidak ada gambar yang tersisa, atur currentImageIndex ke 0 dan setShowPreview ke false
        this.currentImageIndex = 0
      } else if (this.currentImageIndex >= this.edit.images.length) {
        // Jika melebihi, atur currentImageIndex ke indeks terakhir (jumlah gambar - 1)
        this.currentImageIndex = this.edit.images.length - 1
      }
    },

    nextImage () {
      if (this.currentImageIndex < this.edit.images.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage () {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },

    // submit
    async simpan () {
      if (this.isFormValid) {
        this.setTitle(this.form.judul)
        this.setCaption(this.form.deskripsi)
      }
      try {
        const projectId = this.$route.params.id
        console.log(projectId)

        const res = await this.editProject(projectId)

        if (res.status === 200) {
          this.$toast.success(res.message)

          this.$router.push(`/project/${res.data.id}`)
        } else {
          this.$toast.error(res.message)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  // Fungsi untuk mengonversi gambar ke format PNG
}
</script>
