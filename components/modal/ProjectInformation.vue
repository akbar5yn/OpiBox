<template>
  <div>
    <div>
      <!-- Dropdown items img -->
      <ul class="flex flex-col gap-3">
        <li>
          <button class="flex items-center gap-3" @click="onDeleteProject">
            <icon-galery-trash-icon color="black" />
            Hapus proyek
          </button>
        </li>
        <li>
          <button class="flex items-center gap-3" @click="handleProjectReport">
            <img src="../../assets/img/laporan.png" alt="laporan">
            Lihat laporan
          </button>
        </li>
        <li>
          <button class="flex items-center gap-3">
            <img src="../../assets/img/link.png" alt="">
            Salin link
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProjectInformation',
  props: ['idProject'],

  computed: {
    ...mapState('project', ['showInfo'])
  },

  methods: {
    ...mapActions('project', ['getMyProject', 'deleteProject']),
    async onDeleteProject () {
      try {
        const response = await this.deleteProject(this.idProject) // Mengirimkan ID proyek ke metode deleteProject

        // Penanganan respons setelah menghapus proyek
        if (response.status === 200) {
          this.$toast.success(response.message)
          setTimeout(() => {
            window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
          }, 1000)
        } else {
          this.$toast.error(response.message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    handleProjectReport () {
      console.log(this.projectid)
      this.$emit('show-project-report')
    }
  }
}
</script>
