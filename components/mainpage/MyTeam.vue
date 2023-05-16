<template>
  <div>
    <div class="section2 flex flex-col gap-7 p-8">
      <div class="flex justify-between">
        <h1 class="text-[20px] font-[590] font-cabinet-grotesk">
          Tim Saya
        </h1>
        <button
          class="transition-all duration-200"
          :class="{ ['-rotate-180']: teamVisibility }"
          @click="showTeam"
        >
          <icon-galery-arrow-icon />
        </button>
      </div>
      <div v-if="teamVisibility">
        <ul class="flex flex-col gap-7">
          <!-- <li v-for="team in getTeams" :key="team.id">
            <NuxtLink
              :to="`/teams/${team.name}`"
              active-class="bg-[#EBEAFB]"
              class="flex items-center gap-3 font-cabinet-grotesk"
            >
              <div class="bg-[#6C61E1] w-4 h-4 rounded-full" />
              {{ team.name }}
            </NuxtLink>
          </li> -->
          <li v-for="team in getTeamsByInv" :key="team.id">
            <NuxtLink
              :to="`/teams/${team.team_name}`"
              active-class="bg-[#EBEAFB]"
              class="flex items-center gap-3 font-cabinet-grotesk"
            >
              <div class="bg-[#6C61E1] w-4 h-4 rounded-full" />
              {{ team.team_name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink
      to="/mainpage/createTeam"
      class="flex items-center gap-3 py-3 px-8 font-cabinet-grotesk"
      active-class="bg-[#EBEAFB]"
    >
      <icon-galery-add-team />
      <p>Buat Tim Baru</p>
    </NuxtLink>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MyTeam',
  data () {
    return {
      teamVisibility: false
    }
  },

  computed: {
    ...mapGetters('teams', ['getTeams', 'getTeamsByInv'])
    // ...mapState('teams', ['teamByInv'])
    // teamByInv () {
    //   return this.getTeamsByInv
    // }
  },

  mounted () {
    // const createdBy = this.$auth.user.id
    // this.fetchTeams()
    // const invMe = this.$auth.user
    this.invTeams()
    // const teamId = 98 // Set the team ID here
    // this.fetchTeamDetails(teamId)
    // this.timer = setInterval(() => {
    //   this.invTeams(invMe)
    // }, 1000)
  },

  beforeDestroy () {
    clearInterval(this.timer) // Membersihkan timer saat komponen dihancurkan
  },

  methods: {
    ...mapActions('teams', ['fetchTeams', 'invTeams']),

    showTeam () {
      this.teamVisibility = !this.teamVisibility
    }
  }
}
</script>
