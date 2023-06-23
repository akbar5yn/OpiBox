<template>
  <div
    v-if="modalFilter"
    class="flex flex-col gap-y-2 transition-all duration-300"
  >
    <h3>Urutkan berdasarkan:</h3>
    <ul class="flex flex-col gap-y-2 font-cabinet-grotesk text-sm">
      <li>
        <button @click="sortList('judulAZ')">
          Judul A-Z
        </button>
      </li>
      <li>
        <button @click="sortList('judulZA')">
          Judul Z-A
        </button>
      </li>
      <li>
        <button @click="sortList('terakhirDibuka')">
          Terakhir dibuka
        </button>
      </li>
      <li>
        <button @click="sortList('terakhirDibuat')">
          Terakhir dibuat
        </button>
      </li>
      <li>
        <button @click="sortList('terakhirDiubah')">
          Terkahir diubah
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('teams', ['modalFilter'])
  },

  methods: {
    sortList (sortType) {
      const sortedProjects = [...this.$store.state.teams.projectTeam]

      if (sortType === 'judulAZ') {
        sortedProjects.sort((a, b) => a.title.localeCompare(b.title))
      } else if (sortType === 'judulZA') {
        sortedProjects.sort((a, b) => b.title.localeCompare(a.title))
      } else if (sortType === 'terakhirDibuka') {
        sortedProjects.sort((a, b) => b.last_seen.localeCompare(a.last_seen))
      } else if (sortType === 'terakhirDibuat') {
        sortedProjects.sort((a, b) => b.created_at.localeCompare(a.created_at))
      } else if (sortType === 'terakhirDiubah') {
        sortedProjects.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      }

      //  update state dengan array projectTeam yang sudah diurutkan
      this.$store.commit('teams/setProjectTeam', sortedProjects)
    }
  }
}
</script>
