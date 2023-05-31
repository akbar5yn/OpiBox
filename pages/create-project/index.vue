<template>
  <div id="create-project">
    <form class="w-full" @submit.prevent="">
      <!-- topbar -->
      <section
        class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center fixed w-full"
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
            @click="simpan"
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
              v-if="!showPreview"
              class="border-2 h-full border-dashed border-[#95959D] py-4 flex flex-col items-center justify-center gap-y-2"
            >
              <icon-galery-image-icon />
              <p class="text-[#95959D] text-base xl:text-3xl text-center">
                Anda belum mengunggah gambar
              </p>
            </div>

            <!-- image preview muncul-->
            <div
              v-if="showPreview"
              id="image-preview"
              class="h-full border-dashed border-[#95959D] flex flex-col items-center justify-center"
            >
              <button
                class="absolute top-5 left-5 rounded-full shadow-xl p-4"
                @click="removeImage(currentImageIndex)"
              >
                <icon-galery-trash-icon />
              </button>
              <button
                v-if="currentImageIndex !== 0"
                class="slider-button absolute top-1/2 left-3 rounded-full shadow-xl p-4"
                @click="prevImage"
              >
                <icon-galery-slider-icon class="rotate-180" />
              </button>
              <img
                :src="selectedImg[currentImageIndex]?.base64"
                alt="Image preview"
                class="object-contain w-full h-[100%]"
              >
              <button
                v-if="selectedImg.length > 1"
                class="slider-button absolute top-1/2 right-3 rounded-full shadow-xl p-4"
                @click="nextImage"
              >
                <icon-galery-slider-icon />
              </button>
            </div>
          </div>

          <!-- form section -->
          <div class="p-9 mt-16 border-r w-1/2">
            <!-- btn akses & add gambar -->
            <div class="flex justify-between">
              <button
                class="flex items-center bg-[#6C61E1] px-5 py-3 gap-3 rounded-lg"
                @click="showAkses"
              >
                <icon-galery-setting-icon color="white" />
                <span class="text-white font-cabinet-grotesk text-lg">Kelola Akses</span>
              </button>
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
            <div class="flex flex-col gap-y-3 mt-4">
              <div class="flex justify-between items-center">
                <label for="judul" class="text-[20px]">Judul Proyek</label>
                <div v-if="loading" class="text-center flex items-center gap-3">
                  <div
                    class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"
                  />
                  <p class="mt-2 text-base">
                    Loading...
                  </p>
                </div>
              </div>
              <input
                id="judul"
                v-model="form.judul"
                name="judul"
                type="text"
                placeholder="Masukan Judul"
                class="px-2 py-3 text-[14px] outline-none border rounded-lg tracking-wider font-light"
              >
            </div>

            <!-- desc proyek -->
            <div class="flex flex-col mt-4">
              <label for="desc" class="text-[20px]">Deskripsi</label>
              <textarea
                id="desc"
                v-model="form.deskripsi"
                name="desc"
                placeholder="Masukan Deskripsi"
                class="px-2 py-3 text-[14px] outline-none border rounded-lg"
                rows="28"
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CreateProject',
  layout: 'ProjectSession',
  data () {
    return {
      currentImageIndex: 0,
      form: {
        judul: '',
        deskripsi: ''
      },
      dataFile: []
    }
  },

  computed: {
    ...mapState('project', ['selectedImg', 'showPreview', 'loading']),

    isFormValid () {
      const { projectType } = this.$store.state.project.form
      return (
        this.selectedImg.length > 0 &&
        this.form.judul !== '' &&
        this.form.deskripsi !== '' &&
        projectType !== ''
      )
    }
  },
  watch: {
    dataFile () {
      this.setShowPreview(true)
    }
  },

  methods: {
    ...mapMutations('project', [
      'setSelectedImg',
      'setShowPreview',
      'setShowModal',
      'setJudul',
      'setDesc',
      'removeSelectedImage'
    ]),
    ...mapActions('project', ['postData']),

    // ...mapActions('project', ['postData']),

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

    removeImage (index) {
      this.removeSelectedImage(index)
      if (this.selectedImg.length === 0) {
        // Jika tidak ada gambar yang tersisa, atur currentImageIndex ke 0 dan setShowPreview ke false
        this.currentImageIndex = 0
        this.setShowPreview(false)
      } else if (this.currentImageIndex >= this.selectedImg.length) {
        // Jika melebihi, atur currentImageIndex ke indeks terakhir (jumlah gambar - 1)
        this.currentImageIndex = this.selectedImg.length - 1
      }
    },

    nextImage () {
      if (this.currentImageIndex < this.selectedImg.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage () {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },

    // submit
    async simpan (event) {
      event.preventDefault()
      if (this.isFormValid) {
        this.setJudul(this.form.judul)
        this.setDesc(this.form.deskripsi)
      }
      try {
        // Mengirimkan data form menggunakan action Vuex
        // Handling jika posting data berhasil
        const response = await this.postData(this.form)
        if (response.status === 201) {
          this.$toast.success(response.message)
          // Ganti 'TeamPage' dengan nama halaman tim yang sudah Anda buat
          this.$router.push(`/project/${response.data.id}`)
        } else {
          // Menangani error saat membuat tim
          this.$toast.error(response.data.message)
          // throw new Error('Gagal membuat tim baru')
        }
      } catch (error) {
        // Handling jika terjadi kesalahan saat posting data
        console.error(error)
      }
    },

    showAkses () {
      this.setShowModal(true)
    }
  }
  // Fungsi untuk mengonversi gambar ke format PNG
}
</script>
