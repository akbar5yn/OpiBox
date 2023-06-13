<template lang="">
  <div class="text-center">
    <ModalBase width="300" :close-btn="false">
      <img
        :src="imageSource"
        class="w-[24px] h-[24px] mx-auto"
        alt="disconnect internet"
      >
      <h1 class="text-[20px] font-bold font-cabinet-grotesk mt-5">
        Koneksi Terputus
      </h1>
      <p class="text-[14px] font-normal font-open-sans mt-3">
        Silakan periksa koneksi internet Anda dan coba lagi
      </p>
      <button
        type="button"
        class="border rounded-lg py-3 text-[14px] outline-none w-full bg-[#6C61E1] text-white justify-center mt-4 flex items-center"
        disabled
      >
        <img src="../assets/img/reload.png" alt="" class="animate-spin w-10">
        Menghubungkan Ulang...
      </button>
    </ModalBase>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageSource: require('../assets/img/disconnectIcon.svg')
    }
  }
}
</script>
