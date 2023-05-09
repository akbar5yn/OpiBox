<template>
  <div>
    <div class="section2 flex flex-col gap-7 p-8">
      <div class="flex justify-between">
        <h1 class="text-[20px] font-medium">
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
          <li v-for="team in getTeams" :key="team.id">
            <NuxtLink
              :to="`/teams/${team.name}`"
              active-class="bg-[#EBEAFB]"
              class="flex items-center gap-3"
            >
              <div class="bg-[#6C61E1] w-4 h-4 rounded-full" />
              {{ team.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink
      to="/mainpage/createTeam"
      class="flex items-center gap-3 py-3 px-8"
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

  mounted () {
    const createdBy = 7
    this.fetchTeams(createdBy)

    this.timer = setInterval(() => {
      this.fetchTeams(createdBy)
    }, 5000)
  },

  beforeDestroy () {
    clearInterval(this.timer) // Membersihkan timer saat komponen dihancurkan
  },

  methods: {
    ...mapActions('teams', ['fetchTeams']),

    showTeam () {
      this.teamVisibility = !this.teamVisibility
    }
  },

  computed: {
    ...mapGetters('teams', ['getTeams']),
    teams () {
      return this.getTeams
    }
  }
}
</script>
