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
          v-if="accessiBility($auth.user.id)"
          class="flex items-center gap-3 text-red-500"
          @click="onDeleteTeam"
        >
          <icon-galery-trash-icon color="red" />
          Hapus tim
        </button>
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

        <div
          v-for="project in getTeamProject"
          :key="project.id"
          class="relative cursor-pointer mt-5"
        >
          <div
            class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
          >
            <div
              class="h-[152px] w-[360px] overflow-clip"
              @click="visitProject(project.id)"
            >
              <img
                :src="project.images[0].thumbnail_url"
                alt="cover-project"
                class="object-contain w-full"
              >
            </div>
            <div class="p-[10px] pr-3 flex items-center justify-between">
              <div class="flex items-center gap-[10px]">
                <!-- icon team -->
                <div class="bg-[#E5E5E6] p-4 rounded-full w-fit">
                  <img src="../../assets/img/team.svg" alt="icon-team">
                </div>
                <h2
                  class="cursor-pointer font-cabinet-grotesk text-xl font-semibold"
                >
                  {{ project.title }} <br>

                  <span class="font-normal text-sm">{{
                    project.createdAgo
                  }}</span>
                </h2>
              </div>
              <button @click="toggleInfo(project.id)">
                <icon-galery-dots-icon />
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="getTeamProject.length === 0"
          class="flex flex-col items-center justify-center h-full"
        >
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
        <div
          class="flex items-center justify-between border-b-2 pb-3 mt-[49px] pr-5"
        >
          <h1 class="">
            Anggota
          </h1>
          <button>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.32463 2.48528C8.75103 0.728865 11.249 0.728866 11.6754 2.48528C11.9508 3.6199 13.2507 4.15834 14.2478 3.55082C15.7913 2.61036 17.5576 4.37667 16.6172 5.92015C16.0096 6.91722 16.5481 8.21715 17.6827 8.4926C19.4391 8.919 19.4391 11.4169 17.6827 11.8433C16.5481 12.1188 16.0096 13.4187 16.6172 14.4158C17.5576 15.9593 15.7913 17.7256 14.2478 16.7851C13.2507 16.1776 11.9508 16.716 11.6754 17.8507C11.249 19.6071 8.75103 19.6071 8.32463 17.8507C8.04918 16.716 6.74926 16.1776 5.75219 16.7851C4.2087 17.7256 2.44239 15.9593 3.38285 14.4158C3.99038 13.4187 3.45193 12.1188 2.31731 11.8433C0.560897 11.4169 0.560897 8.919 2.31731 8.4926C3.45193 8.21715 3.99037 6.91722 3.38285 5.92015C2.44239 4.37667 4.2087 2.61036 5.75219 3.55082C6.74926 4.15834 8.04918 3.6199 8.32463 2.48528Z"
                stroke="#19191B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 10.168C13 11.8248 11.6569 13.168 10 13.168C8.34315
              13.168 7 11.8248 7 10.168C7 8.51111 8.34315 7.16797 10
              7.16797C11.6569 7.16797 13 8.51111 13 10.168Z"
                stroke="#19191B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- daftar anggota -->
        <div class="mt-[15px]">
          <ul v-if="teamKolabData.length > 0" class="flex flex-col gap-3">
            <li
              v-for="member in teamKolabData"
              :key="member.id"
              class="flex items-center gap-3"
            >
              <icon-galery-avatar-icon class="w-14" />
              <div class="flex items-center w-full justify-between">
                <div class="flex flex-col">
                  <p class="flex">
                    {{ member.user_name }}
                    {{ status(member.user_id) }}
                  </p>
                  <span class="text-[#CACACE] text-[10px]">
                    {{ member.email }}
                  </span>
                </div>
                <span class="italic text-[#B0B0B5]">
                  {{ formatedRole(member.role) }}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="px-[20px] py-[10px] font-cabinet-grotesk border-2 rounded-md mt-5 w-full"
          @click="inviteUser($route.params.id)"
        >
          Undang
        </button>
      </div>
    </section>

    <!-- Tampilkan detail tim berdasarkan teamId -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Teams',

  data () {
    return {
      isOpen: false
    }
  },

  mounted () {
    const teamId = localStorage.getItem('teamId')

    this.fetchTeamKolab(teamId)

    this.projectTeam(teamId)
  },

  computed: {
    ...mapGetters('teams', ['getTeamsByInv', 'getTeamKolab', 'getTeamProject']),
    // ...mapMutations('teams', ['setSelectedTeamId']),

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
    },

    teamKolabData () {
      if (this.getTeamKolab && this.getTeamKolab) {
        return this.getTeamKolab
      } else {
        return []
      }
    }
  },

  methods: {
    ...mapMutations('teams', ['setTeamId']),
    ...mapActions('teams', ['fetchKolab', 'fetchPorojectTeam', 'deleteTeam']),
    toggleInfo () {
      // const timId = this.$route.params.id
      // this.setTeamId(timId)
      this.isOpen = !this.isOpen
    },

    async fetchTeamKolab () {
      await this.fetchKolab(this.teamId)
    },

    async projectTeam () {
      const timId = this.$route.params.id
      await this.fetchPorojectTeam(timId)
    },

    // SECTION - format name role
    formatedRole (role) {
      if (role === 'Owner') {
        return 'Pemilik'
      } else {
        return role
      }
    },

    status (id) {
      if (id === this.$auth.user.id) {
        return '(Anda)'
      }
    },

    // SECTION - del team
    async onDeleteTeam () {
      const timId = this.$route.params.id
      try {
        const response = await this.deleteTeam(timId) // Mengirimkan ID proyek ke metode deleteProject
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
    },

    inviteUser (idTeam) {
      console.log(idTeam, 'ini id team')
      // const teamId = this.$route.params.id
      this.setTeamId(idTeam)
      this.$store.commit('teams/setModalInvite', true)
    },

    // cek akses
    accessiBility (userId) {
      const myData = this.getTeamKolab.filter(
        data => data.user_id === userId && data.role === 'Owner'
      )
      console.log(myData)

      if (myData.length !== 0) {
        return true
      }
      return false
    },

    // SECTION - visit project
    visitProject (id) {
      console.log(id)
      this.$router.push(`/project/${id}`)
    }
  }
}
</script>
