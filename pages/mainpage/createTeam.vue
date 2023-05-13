<template>
  <div id="createTeam" class="flex justify-center items-center h-full">
    <form class="text-start w-[50%]" @submit.prevent="create">
      <h1
        class="font-cabinet-grotesk font-bold tracking-wider text-3xl text-start"
      >
        Buat Tim Baru
      </h1>

      <!-- nama team -->
      <div class="flex flex-col mt-5 gap-3">
        <label for="namaTeam">Nama Tim</label>
        <input
          id="namaTeam"
          v-model="form.namaTeam"
          type="text"
          name="namaTeam"
          placeholder="Masukan nama tim"
          class="border w-[100%] px-[10px] py-[13px] rounded-[18px]"
        >
      </div>

      <!-- add member -->
      <div class="flex flex-col mt-4 gap-3 text-start">
        <h2 class="font-cabinet-grotesk font-semibold tracking-wider text-2xl">
          Tambahkan Kolaborator
        </h2>
        <p
          class="font-cabinet-grotesk font-normal text-base tracking-wide text-[#313135]"
        >
          Masukkan email anggota tim untuk mengirimkan undangan bergabung
        </p>
        <div
          v-for="(email, index) in form.emails"
          :key="index"
          class="flex flex-col gap-3"
        >
          <input
            v-model="form.emails[index]"
            type="email"
            placeholder="Email"
            class="border w-[100%] px-[10px] py-[13px] rounded-[18px]"
          >
        </div>
        <div
          class="cursor-pointer border p-[10px] rounded-xl border-black w-fit"
          @click="addEmail"
        >
          Tambahkan Email
        </div>
        <button
          type="submit"
          class="border p-[10px] rounded-xl bg-[#6C61E1] text-white"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreateTeam',

  data () {
    return {
      form: {
        namaTeam: '',
        emails: ['', '', '']
      }
    }
  },

  methods: {
    ...mapActions('teams', ['createTeam']),
    // handle create team
    // async create () {
    //   // handle form submission
    //   const data = {
    //     name: this.form.namaTeam
    //   }
    //   const response = await this.createTeam(data)
    //   console.log(response)
    // },
    async create () {
      // Menghandle pengiriman formulir
      const data = {
        name: this.form.namaTeam
      }

      try {
        const response = await this.createTeam(data)
        console.log(response)

        // Jika respons tidak mengandung error, pindahkan ke halaman tim yang sudah dibuat
        if (!response.error) {
          // Ganti 'TeamPage' dengan nama halaman tim yang sudah Anda buat
          this.$router.push({
            name: 'Tim',
            params: { id: response.data.name }
          })
        } else {
          // Menangani error saat membuat tim
          throw new Error('Gagal membuat tim baru')
        }
      } catch (error) {
        console.log(error)
        // Menangani error saat membuat tim
        // Tambahkan logika atau tindakan lain yang diperlukan untuk penanganan error
      }
    },

    addEmail () {
      this.form.emails.push('')
    }
  }
}
</script>

<style scoped></style>
