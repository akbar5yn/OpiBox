<template>
  <div v-if="modalDelTeam" class="text-center">
    <ModalBase width="300px" :close-btn="false">
      <h1 class="text-[20px] font-bold font-cabinet-grotesk mt-5">
        Hapus Tim
      </h1>
      <p>Anda yakin untuk menghapus tim ini secara permanen?</p>

      <div class="flex gap-4 items-center justify-center">
        <button
          class="border w--[100px] rounded-lg px-20 py-3 text-[14px] outline-none border-[#6C61E1] text-black justify-center mt-4 flex items-center"
          @click="onDeleteTeam"
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
    ...mapState('teams', ['modalDelTeam'])
  },

  methods: {
    ...mapActions('teams', ['deleteTeam']),
    cancelClose () {
      this.$store.commit('teams/setCloseModal', false)
    },

    async onDeleteTeam () {
      const timId = this.$route.params.id
      try {
        const response = await this.deleteTeam(timId) // Mengirimkan ID proyek ke metode deleteProject
        // Penanganan respons setelah menghapus proyek
        if (response.status === 200) {
          this.$toast.success(response.message)
          this.$router.push('/Beranda')
          setTimeout(() => {
            window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
          }, 1000)
        } else {
          this.$toast.error(response.message)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
