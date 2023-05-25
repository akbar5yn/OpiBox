<template>
  <div v-if="showModal" class="modal-overlay px-5" @click.self="closeModal">
    <div class="modal">
      <!-- modal header -->
      <div class="modal-header">
        <h1>Kelola Akses</h1>
      </div>

      <!-- modal body -->
      <div class="modal-body mt-[18px]">
        <form action="" @submit.prevent="">
          <!-- akses umum -->
          <div class="flex gap-8">
            <input
              v-model="projectType"
              type="radio"
              name="akses"
              value="open"
              @change="handleAksesTimChange"
            >
            <div class="flex items-center gap-[18px]">
              <div class="bg-[#E5E5E680] p-5 rounded-full">
                <icon-galery-share-umum />
              </div>
              <p class="font-cabinet-grotesk text-lg">
                Umum <br>
                <span class="text-lg text-[#62626A]">
                  Siapapun yang memiliki tautan dapat melihat, berkolaborasi,
                  dan membagikan proyek ini
                </span>
              </p>
            </div>
          </div>
          <!-- akses tim -->
          <div class="flex gap-8 mt-[18px]">
            <input
              v-model="projectType"
              type="radio"
              name="akses"
              value="team"
              @change="handleAksesTimChange"
            >
            <div class="flex items-center gap-[18px]">
              <div class="bg-[#E5E5E680] p-5 rounded-full">
                <icon-galery-team-icon width="22" />
              </div>
              <p class="font-cabinet-grotesk text-lg">
                Hanya dengan Tim <br>
                <span class="text-lg text-[#62626A]">
                  Siapapun yang memiliki tautan dapat melihat, berkolaborasi,
                  dan membagikan proyek ini
                </span>
              </p>
              <icon-galery-arrow-icon />
            </div>
          </div>

          <!-- choice akses tim -->
          <div v-if="showTeamOptions" class="pl-[10%]">
            <ul v-for="team in getTeamsByInv" :key="team.id">
              <div class="flex gap-8 mt-[18px]">
                <input
                  id="aksesTeam"
                  v-model="selectedAkses"
                  type="radio"
                  name="aksesTeam"
                  :value="team.team_id"
                  @change="handleAksesTimChange"
                >
                <label for="aksesTeam" class="font-cabinet-grotesk text-lg">
                  {{ team.team_name }} <br>
                  <span class="text-lg text-[#62626A]">
                    Anda, Salsa, Akbar, Bintang, Maritza, Raihan, Rino, Rinta.
                    Rita, Rizki, Tangguh,...
                  </span>
                </label>
              </div>
            </ul>
          </div>
        </form>
      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button
          :disabled="!isAksesSelected"
          :class="[
            'py-3',
            'px-[33px]',
            'rounded-lg',
            'text-white',
            'gap-4',
            'font-cabinet-grotesk',
            isAksesSelected ? 'bg-[#6C61E1]' : 'bg-gray-400'
          ]"
          @click="simpanAkses"
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'KelolaAkses',

  data () {
    return {
      // showModal: true,
      isAksesSelected: false,
      showTeamOptions: false,
      projectType: '',
      selectedAkses: ''
    }
  },

  computed: {
    ...mapState('project', ['showModal']),
    ...mapGetters('teams', ['getTeamsByInv'])
  },

  mounted () {
    this.invTeams()
  },

  methods: {
    ...mapActions('teams', ['invTeams']),
    ...mapMutations('project', ['setType', 'setAkses']),
    handleAksesTimChange (event) {
      // this.isAksesSelected = this.choiceTeam !== ''
      if (event.target.value === 'open') {
        this.isAksesSelected = true
        this.showTeamOptions = false
      } else if (event.target.value === 'team') {
        this.showTeamOptions = true
        this.isAksesSelected = false
      } else {
        this.showTeamOptions = this.selectedAkses !== ''
        this.isAksesSelected = this.showTeamOptions
      }
    },
    closeModal () {
      const confirmed = confirm(
        'Apakah anda yakin ingin keluar ? Jika ya,  maka postingan tidak akan disimpan.'
      )
      if (confirmed) {
        this.$store.commit('project/setShowModal', false)
        this.isAksesSelected = false
      }
    },
    simpanAkses () {
      const setAkses = this.selectedAkses
      const setType = this.projectType
      this.setAkses(setAkses)
      this.setType(setType)
      this.$store.commit('project/setShowModal', false)
      console.log(setAkses)
      console.log(setType)
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
  max-width: 800px;
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

.modal-footer {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 48px;
}
</style>
