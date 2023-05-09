<template>
  <div v-if="show" class="modal-overlay px-5" @click="closeModal">
    <div class="modal">
      <!-- modal header -->
      <div class="modal-header border-b-2 pb-4">
        <button
          class="font-normal text-base font-cabinet-grotesk"
          @click="closeModal"
        >
          <span class="text-base"> Batal </span>
        </button>
        <button class="text-[#6C61E1]">
          <!-- <icon-galery-close-modal height="10" width="10" /> -->
          <span class="text-base"> Selanjutnya </span>
        </button>
      </div>

      <!-- modal body -->
      <div
        class="modal-body h-[444.53px] w-[444.53px] flex items-center justify-center border border-1 relative"
      >
        <img
          :src="imageUrl"
          alt="Selected Image"
          class="object-cover w-full h-[100%]"
        >
      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button
          class="flex py-3 px-[99px] bg-[#6C61E1] rounded-lg text-white gap-4"
        >
          <icon-galery-image-icon2 />
          <span>Pilih gambar lain</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },

  methods: {
    closeModal () {
      const confirmed = confirm(
        'Apakah anda yakin ingin keluar ? Jika ya,  maka postingan tidak akan disimpan.'
      )
      if (confirmed) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}
</style>
