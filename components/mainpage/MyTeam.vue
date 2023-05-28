<template>
  <div class="MyTeam h-full">
    <div class="flex flex-col gap-7 h-full">
      <div class="flex justify-between px-8 mt-8">
        <h1 class="text-[20px] font-[590] font-cabinet-grotesk">
          Tim Saya
        </h1>
        <NuxtLink to="/mainpage/createTeam" class="">
          <icon-galery-add-team />
        </NuxtLink>
      </div>

      <div class="w-full h-full overflow-y-scroll">
        <ul class="flex w-full flex-col gap-2 h-80">
          <li v-for="team in getTeamsByInv" :key="team.id">
            <NuxtLink
              :to="`/teams/${team.team_name}`"
              active-class="bg-[#EBEAFB]"
              class="flex items-center gap-3 font-cabinet-grotesk px-8 py-2"
            >
              <div class="bg-[#6C61E1] w-4 h-4 rounded-full" />
              {{ team.team_name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MyTeam',
  data () {
    return {
      // teamVisibility: false
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
    this.invTeams()
    // const createdBy = this.$auth.user.id
    // this.fetchTeams()
    // const invMe = this.$auth.user
    // const teamId = 98 // Set the team ID here
    // this.fetchTeamDetails(teamId)
    // this.timer = setInterval(() => {
    //   this.invTeams(invMe)
    // }, 1000)
  },

  // beforeDestroy () {
  //   clearInterval(this.timer) // Membersihkan timer saat komponen dihancurkan
  // },

  methods: {
    ...mapActions('teams', ['fetchTeams', 'invTeams'])
  }
}
</script>
