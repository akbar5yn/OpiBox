<template>
  <div v-if="modalInviter" class="modal-overlay px-5">
    <form class="w-[800px]" @submit.prevent="inviteTeam">
      <div class="modal px-20">
        <!-- modal header -->
        <div class="modal-header">
          <div class="flex flex-col justify-center w-full">
            <h1
              class="w-full text-center font-cabinet-grotesk font-medium text-xl"
            >
              Tambahkan kolaborator
            </h1>
            <p
              class="w-full text-center font-cabinet-grotesk font-medium text-xl"
            >
              Masukkan email anggota tim untuk mengirimkan undangan bergabung
            </p>
          </div>
          <button class="absolute right-5" @click="closeModal">
            <icon-galery-close-bar />
          </button>
        </div>

        <!-- modal body -->
        <div class="modal-body mt-12 flex flex-col gap-3 w-[400px]">
          <p v-if="isMaxCollaboratorsReached" class="text-red-500 text-center">
            Anda hanya dapat menambahkan maksimal 5 kolaborator di awal.
          </p>
          <!-- Add Colabolator -->
          <div v-for="(email, index) in form.emails" :key="index">
            <input
              v-model="form.emails[index]"
              type="email"
              placeholder="Email"
              class="border w-[100%] px-[10px] py-[13px] rounded-lg"
              @input="handleEmailInput(index)"
            >
            <p
              v-if="!isEmailValid(email) && isEmailTouched[index]"
              class="text-red-500 text-center"
            >
              Format email tidak valid
            </p>
          </div>
          <div
            class="cursor-pointer border p-[10px] rounded-xl border-black w-fit"
            @click="addEmail"
          >
            Tambahkan Email
          </div>
        </div>

        <!-- modal footer -->
        <div class="modal-footer mt-7">
          <div class="flex flex-col gap-4">
            <!-- button simpan inviter -->
            <button
              class="bg-[#6C61E1] text-white font-cabinet-grotesk rounded-lg px-[50px] py-[10px] border-2 text-lg"
              :class="{
                'bg-[#E5E5E6] cursor-not-allowed text-[#B0B0B5]': !isFormValid
              }"
              :disabled="!isFormValid"
            >
              Simpan
            </button>
            <button
              type="button"
              class="underline text-[#877EE7]"
              @click="lewati"
            >
              Lewati untuk sekarang
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'CreateTeam',

  data () {
    return {
      form: {
        namaTim: '',
        emails: ['', '', '']
      },
      isMaxCollaboratorsReached: false,
      isEmailTouched: [false, false, false]
    }
  },

  computed: {
    ...mapState('teams', ['modalInviter', 'forms']),
    isFormValid () {
      return (
        this.form.emails.some(email => this.isEmailValid(email)) &&
        this.form.emails.every(
          (email, index) =>
            !this.isEmailValid(email) || this.isEmailTouched[index]
        )
      )
    }
  },

  methods: {
    ...mapMutations('teams', ['setKolaborator']),
    ...mapActions('teams', ['createTeam', 'invitations']),
    closeModal () {
      this.$store.commit('teams/setModalInvite', false)
    },

    addEmail () {
      if (this.form.emails.length < 5) {
        this.form.emails.push('')
      } else {
        this.isMaxCollaboratorsReached = true
      }
    },

    isEmailValid (email) {
      const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return email.match(emailRegExp)
    },

    handleEmailInput (index) {
      this.isEmailTouched[index] = true
    },

    // simpan tim with invite user
    inviteTeam () {
      const inviterEmails = this.form.emails.filter(email =>
        this.isEmailValid(email)
      )
      this.setKolaborator(inviterEmails)
      this.invitations(inviterEmails)
      this.$store.commit('teams/setModalInvite', false)
      // ... tambahkan logika lain yang Anda perlukan
    },

    // lewati tanpa invite user
    lewati () {
      this.$store.commit('teams/setModalInvite', false)
      setTimeout(() => {
        window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
      }, 1000)
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
