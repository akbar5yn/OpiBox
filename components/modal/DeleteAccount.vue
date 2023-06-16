<template>
  <div v-if="modalDelete" class="text-center">
    <ModalBase width="300px" :close-btn="false">
      <h1 class="text-[20px] font-bold font-cabinet-grotesk mt-5">
        Hapus Permanen Akun Opibox?
      </h1>
      <p>
        Jika anda menghapus akun secara permane, semua data proyek yang pernah
        Anda buat akan hilang. Lanjutkan ?
      </p>

      <div class="flex gap-4 items-center justify-center">
        <button
          class="border w--[100px] rounded-lg px-20 py-3 text-[14px] outline-none border-[#6C61E1] text-black justify-center mt-4 flex items-center"
          @click="delAccount('/')"
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
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('profile', ['modalDelete'])
  },

  methods: {
    ...mapActions('profile', ['deleteAccount']),
    cancelClose () {
      this.$store.commit('profile/setCloseModal', false)
    },

    async delAccount (path) {
      // const token = this.$store.getters['authentication/getToken']

      const response = await this.deleteAccount()
      console.log(response.status, 'response status')
      if (response.status === 200) {
        this.$router.push(path)
        this.$toast.success(response.message)
      } else {
        this.$toast.error(response.data.message)
      }
    }
  }
}
</script>
