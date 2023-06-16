<template>
  <div class="MyTeam h-full">
    <div class="flex flex-col gap-7 h-full">
      <div class="flex justify-between px-8 mt-2">
        <h1 class="text-[20px] font-[590] font-cabinet-grotesk">
          Tim Saya
        </h1>
        <button class="add-team" @click="createTeam">
          <icon-galery-add-team />
        </button>
      </div>

      <div
        class="list-team w-full h-full overflow-y-scroll border shadow-inner"
      >
        <ul class="flex w-full flex-col gap-2 h-full">
          <li v-for="team in getTeamsByInv" :key="team.id" class="relative">
            <NuxtLink
              :to="`/teams/${team.team_id}`"
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

    <!-- show modal create team -->
    <modal-create-team />
    <modal-invite-team />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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
  },

  methods: {
    ...mapActions('teams', ['fetchTeams', 'invTeams', 'setTeamId']),
    ...mapMutations('teams', ['setModalTim']),

    createTeam () {
      this.setModalTim(true)
    },

    getTeamId (teamId) {
      this.setTeamId(teamId)
    }
  }
}
</script>

<style scoped>
.list-team::-webkit-scrollbar {
  width: 5px;
}

.list-team::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 20px;
}

.list-team::-webkit-scrollbar-track {
  background-color: none;
}
</style>
