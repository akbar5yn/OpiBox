<template>
  <div v-show="showModal" class="modal-overlay px-5" @click="closeModal">
    <div class="modal">
      <div class="modal-header border-b-2">
        <h2 class="font-medium text-xl font-cabinet-grotesk">
          Buat Proyek Baru
        </h2>
        <button @click="closeModal">
          <icon-galery-close-modal height="10" width="10" />
        </button>
      </div>
      <!-- image preview hidden -->
      <div
        v-if="!showPreview"
        class="h-[286px] py-4 flex flex-col items-center justify-center gap-y-2"
      >
        <icon-galery-image-icon />
        <p class="text-[#95959D] text-base xl:text-3xl text-center">
          Anda belum mengunggah gambar
        </p>
      </div>

      <!-- image preview muncul-->
      <div
        v-else
        id="image-preview"
        class="h-[286px] relative py-4 px-4 flex flex-col items-center justify-center"
      >
        <img
          :src="imageUrl"
          alt="Image preview"
          class="object-cover w-auto h-[100%]"
        >
      </div>

      <!-- masukan gambar -->
      <div class="flex items-center w-full justify-center">
        <label
          class="cursor-pointer bg-[#6C61E1] text-white font-cabinet-grotesk rounded-lg px-3 py-2 flex items-center w-fit xl:px-6 xl:py-3"
          for="image"
        >
          <p>Pilih dari komputer</p>
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="hidden"
          @change="displayImage"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateModal',
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Modal Title'
    },
    message: {
      type: String,
      default: 'Modal Message'
    }
  },

  data () {
    return {
      imageUrl: null,
      imageName: null,
      showPreview: false
    }
  },
  methods: {
    displayImage (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imageUrl = reader.result
        this.imageName = file.name
        this.showPreview = true
      }
    },
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body p {
  margin: 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
