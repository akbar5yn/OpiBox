<template>
  <div v-if="modalEditTeam" class="modal-overlay px-5">
    <form class="w-[431px]" @submit.prevent="editTeam">
      <div class="modal px-2">
        <!-- modal header -->
        <div class="modal-header">
          <div class="flex flex-col justify-center w-full">
            <h1 class="w-full font-cabinet-grotesk font-medium text-xl">
              Ubah Nama Tim
            </h1>
          </div>
          <button class="absolute right-5" @click="closeModal">
            <icon-galery-close-bar />
          </button>
        </div>

        <!-- modal body -->
        <div class="modal-body mt-[14px] flex flex-col gap-3 w-full">
          <input
            v-model="insertNameTeam"
            type="text"
            :placeholder="teamName"
            class="border w-[100%] px-[10px] py-[10px] rounded-lg shadow shadow-[#6C61E180] outline-none"
          >
        </div>

        <!-- modal footer -->
        <div class="modal-footer mt-[14px] w-full">
          <div class="flex flex-col gap-4 w-full">
            <!-- button simpan inviter -->
            <button
              class="bg-[#6C61E1] text-white font-cabinet-grotesk rounded-lg px-[50px] py-[10px] border-2 text-lg"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'EditTeam',

  data () {
    return {
      insertNameTeam: ''
    }
  },

  mounted () {
    this.fetchTeamName()
  },

  computed: {
    ...mapState('teams', ['modalEditTeam', 'newTeamName']),
    ...mapGetters('teams', ['getTeamsByInv']),

    teamName () {
      const team = this.getTeamsByInv.find(
        team => team.team_id === parseInt(this.$route.params.id)
      )
      return team ? team.team_name : ''
    },

    teamId () {
      const team = this.getTeamsByInv.find(
        team => team.team_id === parseInt(this.$route.params.id)
      )

      return team ? team.team_id : ''
    }
  },

  methods: {
    ...mapActions('teams', ['renameTeam', 'fetchTeams']),

    async fetchTeamName () {
      const idUser = this.$auth.user.id
      await this.fetchTeams(idUser)
    },

    closeModal () {
      this.$store.commit('teams/setModalEdit', false)
    },

    async editTeam () {
      // menghandle pengiriman form
      const data = {
        name: this.insertNameTeam
      }
      const timId = this.$route.params.id
      try {
        const response = await this.renameTeam({ timId, data })
        console.log(response)

        // Jika respons tidak mengandung error, pindahkan ke halaman tim yang sudah dibuat
        if (response.status === 201) {
          this.$store.commit('teams/setModalEdit', false)
          this.$toast.success(response.message)
          setTimeout(() => {
            window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
          }, 1000)
          this.fetchTeamName()
        } else {
          this.$toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
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

.modal-footer {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
