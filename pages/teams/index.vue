<template>
  <div class="px-7 py-9 flex flex-col h-full">
    <!-- header -->
    <section class="flex items-center justify-between">
      <!-- Icon team -->
      <div class="flex items-center gap-5">
        <icon-galery-team-icon />
        <h1 class="font-cabinet-grotesk text-3xl font-medium">
          Tim {{ teamName }}
        </h1>
      </div>

      <!-- button edit tim -->
      <div class="relative">
        <button
          class="edit-team px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md rotate-90"
          @click="toggleInfo"
        >
          <icon-galery-dots-icon />
        </button>

        <modal-team-information
          v-if="isOpen"
          class="showinfo absolute right-0 top-9 w-[188px] p-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        />
      </div>
    </section>

    <!-- main proyek -->
    <section class="flex justify-between h-full">
      <div class="w-[75%] relative flex flex-col">
        <h1 class="border-b-2 pb-3 mt-[49px]">
          Proyek
        </h1>

        <div class="flex justify-between items-center mt-5">
          <button
            class="w-[151px] px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md"
          >
            Proyek Baru
          </button>

          <button>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5007 4.7487V1.83203M13.5007 4.7487C11.8898 4.7487 10.584 6.05453 10.584 7.66536C10.584 9.2762 11.8898 10.582 13.5007 10.582M13.5007 4.7487C15.1115 4.7487 16.4173 6.05453 16.4173 7.66536C16.4173 9.2762 15.1115 10.582 13.5007 10.582M4.75065 22.2487C6.36148 22.2487 7.66732 20.9429 7.66732 19.332C7.66732 17.7212 6.36148 16.4154 4.75065 16.4154M4.75065 22.2487C3.13982 22.2487 1.83398 20.9429 1.83398 19.332C1.83398 17.7212 3.13982 16.4154 4.75065 16.4154M4.75065 22.2487V25.1654M4.75065 16.4154V1.83203M13.5007 10.582V25.1654M22.2507 22.2487C23.8615 22.2487 25.1673 20.9429 25.1673 19.332C25.1673 17.7212 23.8615 16.4154 22.2507 16.4154M22.2507 22.2487C20.6398 22.2487 19.334 20.9429 19.334 19.332C19.334 17.7212 20.6398 16.4154 22.2507 16.4154M22.2507 22.2487V25.1654M22.2507 16.4154V1.83203"
                stroke="#111826"
                stroke-width="2.91667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="flex flex-col items-center justify-center h-full">
          <p>Team Belum Memiliki Proyek</p>
          <p>
            Klik
            <button
              class="px-[15px] py-[7px] font-cabinet-grotesk border-2 rounded-md"
            >
              Proyek Baru
            </button>
            untuk membuat proyek baru pada tim
          </p>
        </div>
      </div>
      <div class="w-[20%]">
        <h1 class="border-b-2 pb-3 mt-[49px]">
          Anggota
        </h1>

        <!-- daftar anggota -->
        <div class="mt-[15px]">
          <ul v-if="teamKolabData.length > 0" class="flex flex-col gap-3">
            <li
              v-for="member in teamKolabData"
              :key="member.id"
              class="flex items-center gap-3"
            >
              <icon-galery-avatar-icon />
              {{ member.user_name }}
            </li>
          </ul>
        </div>
        <button
          class="px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md mt-5 w-full"
        >
          Undang
        </button>
      </div>
    </section>

    <!-- Tampilkan detail tim berdasarkan teamId -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Teams',

  data () {
    return {
      isOpen: false
    }
  },

  created () {
    const teamId = localStorage.getItem('teamId')
    this.fetchTeamKolab(teamId)
  },

  computed: {
    ...mapGetters('teams', ['getTeamsByInv', 'getTeamKolab']),
    // ...mapMutations('teams', ['setSelectedTeamId']),

    teamName () {
      const team = this.getTeamsByInv.find(
        team => team.id === parseInt(this.$route.params.id)
      )
      return team ? team.team_name : ''
    },
    teamId () {
      const team = this.getTeamsByInv.find(
        team => team.id === parseInt(this.$route.params.id)
      )
      return team ? team.team_id : ''
    },

    teamKolabData () {
      if (this.getTeamKolab && this.getTeamKolab.data) {
        return this.getTeamKolab.data
      } else {
        return []
      }
    }
  },

  methods: {
    ...mapActions('teams', ['setTeamId', 'fetchKolab']),
    toggleInfo () {
      // const timId = this.$route.params.id
      // this.setTeamId(timId)
      this.isOpen = !this.isOpen
    },

    async fetchTeamKolab () {
      await this.fetchKolab(this.teamId)
    }
  }
}
</script>
