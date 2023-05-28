<template>
  <div v-if="modalTim" class="modal-overlay px-5">
    <div class="modal">
      <!-- modal header -->
      <div class="modal-header">
        <h1 class="w-full text-center font-cabinet-grotesk font-medium text-xl">
          Buat Tim Baru
        </h1>
        <button @click="closeModal">
          <icon-galery-close-bar />
        </button>
      </div>

      <form @submit.prevent="buatTim">
        <!-- modal body -->
        <div class="modal-body mt-12">
          <!-- Nama Tim -->
          <div
            class="flex gap-3 font-cabinet-grotesk items-center justify-center"
          >
            <label for="name" class="text-[16px]">Nama Tim</label>
            <input
              id="name"
              v-model="form.namaTim"
              name="name"
              type="text"
              class="border-2 rounded-md w-[433px] h-[40px] px-[10px] py-[6px] outline-none"
              placeholder="Masukan nama tim"
            >
          </div>

          <p class="mt-4">
            Setelah memasukkan nama tim, kamu bisa mengundang siapapun untuk
            bergabung
          </p>
          <!-- Add Colabolator -->
        </div>

        <!-- modal footer -->
        <div class="modal-footer mt-44">
          <div>
            <!-- button simpan tim -->
            <button
              type="submit"
              class="bg-[#6C61E1] text-white font-cabinet-grotesk rounded-lg px-[50px] py-[10px] border-2 text-lg"
              :class="{
                'bg-[#E5E5E6] cursor-not-allowed text-[#B0B0B5]': !isFormValid
              }"
              :disabled="!isFormValid"
            >
              Buat Tim
            </button>
            <!-- button simpan inviter -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'CreateTeam',

  data () {
    return {
      form: {
        namaTim: ''
      }
    }
  },

  computed: {
    ...mapState('teams', ['modalTim']),
    isFormValid () {
      return this.form.namaTim !== ''
    }
  },

  methods: {
    ...mapMutations('teams', ['setModalInvite', 'setTeamId']),
    ...mapActions('teams', ['createTeam']),
    closeModal () {
      this.$store.commit('teams/setModalTim', false)
    },

    async buatTim () {
      // menghandle pengiriman form
      const data = {
        name: this.form.namaTim
      }
      try {
        const response = await this.createTeam(data)
        console.log(response)

        // Jika respons tidak mengandung error, pindahkan ke halaman tim yang sudah dibuat
        if (response.status === 201) {
          // Ganti 'TeamPage' dengan nama halaman tim yang sudah Anda buat
          this.$router.push({
            name: 'Tim',
            params: { id: response.data.id }
          })

          this.$store.commit('teams/setModalTim', false)
          this.setModalInvite(true)
          this.$toast.success(response.message)
          const teamId = response.data.id
          this.setTeamId(teamId)
        } else {
          // Menangani error saat membuat tim
          throw new Error('Gagal membuat tim baru')
        }
      } catch (error) {
        console.log(error)
        // Menangani error saat membuat tim
        // Tambahkan logika atau tindakan lain yang diperlukan untuk penanganan error
      }
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
  justify-content: center;
  width: 100%;
}
</style>
