<template>
  <div v-if="modalDelUserTeam" class="text-center">
    <ModalBase width="300px" :close-btn="false">
      <h1 class="text-[20px] font-bold font-cabinet-grotesk mt-5">
        Hapus Anggota Tim
      </h1>
      <p>
        Anggota yang terhapus tidak akan bisa mengakses seluruh proyek yang ada
        dalam Tim. Lanjutkan?
      </p>

      <div class="flex gap-4 items-center justify-center">
        <button
          class="border w--[100px] rounded-lg px-20 py-3 text-[14px] outline-none border-[#6C61E1] text-black justify-center mt-4 flex items-center"
          @click="kickThisMember"
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
    ...mapState('teams', ['modalDelUserTeam'])
  },

  mounted () {
    const teamId = this.$route.params.id

    this.fetchKolab(teamId)
  },

  methods: {
    ...mapActions('teams', ['kickMemberTeam', 'fetchKolab']),
    cancelClose () {
      this.$store.commit('teams/closeModalDeleteUserTeam', false)
    },

    async kickThisMember () {
      try {
        const response = await this.kickMemberTeam({
          teamId: this.$store.state.teams.timId,
          idMember: this.$store.state.teams.idMember
        }) // Mengirimkan ID proyek ke metode deleteProject
        // Penanganan respons setelah menghapus proyek
        if (response.status === 200) {
          this.$toast.success(response.message)
          setTimeout(() => {
            window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
          }, 1000)
          this.$store.commit('teams/closeModalDeleteUserTeam', false)
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
