<template>
  <div class="px-7 py-9 flex flex-col h-full">
    <!-- header -->
    <section class="gap-y-4 flex items-center justify-between">
      <!-- Icon team -->
      <div class="flex items-center gap-2 laptop:gap-5">
        <mainpage-hamburger-button class="laptop:hidden" color="black" />
        <icon-galery-team-icon />
        <h1
          class="font-cabinet-grotesk text-[20px] laptop:text-3xl font-medium"
        >
          Tim {{ teamName }}
        </h1>
        <button @click="toggleEdit">
          <svg
            width="17"
            height="16"
            class="w-[17px] laptop:w-4"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0588 2.64218L13.8578 5.44115M12.2463 1.45468C13.0192 0.681772 14.2724 0.681772 15.0453 1.45468C15.8182 2.2276 15.8182 3.48074 15.0453 4.25365L4.14583 15.1531H1.375V12.326L12.2463 1.45468Z"
              stroke="#111826"
              stroke-width="1.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- button edit tim -->
      <div class="flex items-end justify-end">
        <button
          v-if="accessiBility($auth.user.id)"
          class="flex items-center gap-3 text-red-500"
          @click="onDeleteTeam"
        >
          <icon-galery-trash-icon color="red" />
          <p class="hidden laptop:block">
            Hapus tim
          </p>
        </button>
      </div>
    </section>

    <!-- main proyek -->
    <section
      class="flex flex-col laptop:flex laptop:flex-row gap-5 laptop:justify-between h-full"
    >
      <div
        class="w-[100%] h-full order-2 laptop:order-1 relative flex flex-col"
      >
        <h1 class="border-b-2 pb-3 mt-[49px]">
          Proyek
        </h1>

        <div class="flex justify-between items-center mt-5">
          <button
            class="px-5 py-1 laptop:px-[20px] laptop:py-[10px] font-cabinet-grotesk border-2 rounded-md"
          >
            Proyek Baru
          </button>

          <!-- Button filter -->
          <div v-if="getTeamProject.length !== 0">
            <button @click="setModalFilter">
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
        </div>

        <div
          class="daftar-project flex justify-center tablet:justify-normal flex-wrap gap-3"
        >
          <!-- Modal filter -->
          <modal-filter-modal
            class="absolute right-0 z-50 bg-white shadow-md px-3 py-2"
          />

          <div
            v-for="project in getTeamProject"
            :key="project.id"
            class="relative cursor-pointer mt-5"
          >
            <div
              class="border rounded-lg bg-white drop-shadow-md w-fit snap-start"
            >
              <div
                class="h-32 tablet:h-[152px] tablet:w-[360px] overflow-clip"
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
                  <div class="bg-[#E5E5E6] p-2 tablet:p-3 rounded-full w-fit">
                    <img
                      src="../../assets/img/team.svg"
                      alt="icon-team"
                      class="w-4 tablet:w-6"
                    >
                  </div>
                  <h2
                    class="cursor-pointer font-cabinet-grotesk tablet:text-xl font-semibold"
                  >
                    {{ project.title }} <br>

                    <span class="font-normal text-sm">Terakhir dilihat {{ project.last_seen }}</span>
                  </h2>
                </div>
                <button @click="toggleInfo(project.id)">
                  <icon-galery-dots-icon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="getTeamProject.length === 0"
          class="flex flex-col items-center justify-center h-full text-center text-sm laptop:text-base"
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
      <div class="order-1 relative">
        <div
          class="flex items-center justify-between border-b-2 pb-3 mt-[49px] pr-5"
        >
          <h1 class="">
            Anggota
          </h1>
          <button v-if="accessiBility($auth.user.id)" @click="handleKickMember">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=""
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
                <span
                  v-if="member.invitation_status === 'Pending'"
                  class="italic text-[#B0B0B5]"
                >Pending</span>

                <button
                  v-if="kickMember && member.role === 'Member'"
                  @click="kickThisMember(member.user_id, member.team_id)"
                >
                  <icon-galery-trash-icon color="red" />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <button
          v-if="accessiBility($auth.user.id)"
          class="px-5 py-1 laptop:px-[20px] laptop:py-[10px] font-cabinet-grotesk border-2 rounded-md mt-5 mobile:absolute mobile:right-0 laptop:w-full"
          @click="inviteUser($route.params.id)"
        >
          Undang
        </button>
      </div>

      <!-- modal here -->
      <modal-edit-team />
      <modal-create-team />
      <modal-invite-team />
      <modal-delete-team />
      <modal-delete-user-team />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Teams',
  layout: 'MainPage',

  data () {
    return {
      isOpen: false,
      kickMember: false
    }
  },

  mounted () {
    const teamId = localStorage.getItem('teamId')
    const timIdWithParams = this.$route.params.id

    // this.fetchTeamKolab(teamId)

    this.projectTeam(teamId)
    this.fetchKolab(timIdWithParams)
  },

  computed: {
    ...mapGetters('teams', ['getTeamsByInv', 'getTeamKolab', 'getTeamProject']),
    ...mapState('teams', 'modalFilter'),
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
    ...mapMutations('teams', {
      setModalFilter: 'setModalFilter',
      setTeamId: 'setTeamId',
      setModalEdit: 'setModalEdit',
      setModalDeleteTeam: 'setModalDeleteTeam',
      setModalDeleteUserTeam: 'setModalDeleteUserTeam',
      setDataDeleteTeam: 'setDataDeleteTeam'
    }),
    ...mapActions('teams', [
      'fetchKolab',
      'fetchPorojectTeam',
      'deleteTeam',
      'kickMemberTeam'
    ]),

    toggleInfo () {
      // const timId = this.$route.params.id
      // this.setTeamId(timId)
      this.isOpen = !this.isOpen
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
        return ''
      }
    },

    status (id) {
      if (id === this.$auth.user.id) {
        return '(Anda)'
      }
    },

    // SECTION - del team
    onDeleteTeam () {
      this.setModalDeleteTeam(true)
    },

    closeModal () {
      this.$store.commit('teams/handleModal', false)
    },

    // SECTION - invite user

    inviteUser (idTeam) {
      // const teamId = this.$route.params.id
      this.setTeamId(idTeam)
      this.$store.commit('teams/setModalInvite', true)
    },

    // SECTION -  cek akses
    accessiBility (userId) {
      const myData = this.getTeamKolab.filter(
        data => data.user_id === userId && data.role === 'Owner'
      )
      if (myData.length !== 0) {
        return true
      }
      return false
    },

    handleKickMember () {
      this.kickMember = !this.kickMember
    },

    // SECTION - visit project
    visitProject (id) {
      console.log(id)
      this.$router.push(`/project/${id}`)
    },

    kickThisMember (teamId, memberId) {
      this.setDataDeleteTeam({ idMember: memberId, timId: teamId }),
      this.setModalDeleteUserTeam(true)
    },

    // SECTION - Set modal edit tim
    toggleEdit () {
      this.setModalEdit(true)
    }
  }
}
</script>
