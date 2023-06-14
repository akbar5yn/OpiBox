<template>
  <div v-if="closeModal" class="text-center">
    <ModalBase width="300px" :close-btn="false">
      <img class="w-[24px] h-[24px] mx-auto" alt="disconnect internet">
      <h1 class="text-[20px] font-bold font-cabinet-grotesk mt-5">
        Apakah anda yakin ingin keluar dari buat proyek
      </h1>

      <div class="flex gap-4 items-center justify-center">
        <button
          class="border w--[100px] rounded-lg px-20 py-3 text-[14px] outline-none border-[#6C61E1] text-black justify-center mt-4 flex items-center"
          @click="navigateTo(`/Beranda`)"
        >
          Ya
        </button>
        <button
          class="border w--[100px] rounded-lg px-20 py-3 text-[14px] outline-none bg-[#6C61E1] text-white justify-center mt-4 flex items-center"
          @click="cancelClose"
        >
          Tidak
        </button>
      </div>
    </ModalBase>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('project', ['closeModal'])
  },

  methods: {
    ...mapMutations('project', ['clearFormData']),

    navigateTo (path) {
      this.$router.push(path)
      this.clearFormData()
      this.$store.commit('project/setCloseModal', false)
    },
    cancelClose () {
      this.$store.commit('project/setCloseModal', false)
    }
  }
}
</script>
