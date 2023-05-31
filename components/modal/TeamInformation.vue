<template>
  <div>
    <div>
      <!-- Dropdown items img -->
      <ul class="flex flex-col gap-3 justify-center">
        <li>
          <button class="flex items-center gap-3">
            <img src="../../assets/img/laporan.png" alt="laporan">
            Ubah nama tim
          </button>
        </li>
        <li>
          <button class="flex items-center gap-3" @click="onDeleteTeam">
            <icon-galery-trash-icon color="black" />
            Hapus tim
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TeamInformation',

  computed: {
    ...mapGetters('teams', ['getTeams', 'getTeamsByInv']),
    teamId () {
      const team = this.getTeamsByInv.find(
        team => team.id === parseInt(this.$route.params.id)
      )
      return team ? team.team_id : ''
    }
  },

  methods: {
    ...mapActions('teams', ['deleteTeam']),
    async onDeleteTeam () {
      try {
        const response = await this.deleteTeam(this.teamId) // Mengirimkan ID proyek ke metode deleteProject
        // Penanganan respons setelah menghapus proyek
        if (response.status === 200) {
          this.$toast.success(response.message)
          this.$router.push('/Beranda')
        } else {
          this.$toast.error(response.message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    closeModal () {
      this.$store.commit('teams/handleModal', false)
    }
  }
}
</script>
