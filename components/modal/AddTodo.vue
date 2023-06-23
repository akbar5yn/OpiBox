<template>
  <div v-if="modalAddTodo" class="text-center">
    <ModalBase width="300px" :close-btn="false">
      <form @submit.prevent="sendTodo">
        <div
          class="modal-head flex items-center justify-between border-b-2 pb-5"
        >
          <h1 class="text-[20px] font-bold font-cabinet-grotesk">
            Tugas Baru
          </h1>
          <div class="relative">
            <button
              class="flex items-center text-sm laptop:text-base laptop:gap-3 border-2 rounded-lg px-3 py-2 laptop:px-6 laptop:py-3"
              type="button"
              @click="isOpen = !isOpen"
            >
              <span class="font-cabinet-grotesk">Gambar 1</span>
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fill-rule="evenodd" d="M10 14l6-6H4l6 6z" />
              </svg>
            </button>

            <div
              v-if="isOpen"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <!-- Dropdown items img -->

              <div
                v-for="(image, imageIndex) in project.images"
                :key="imageIndex"
                class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 justify-center gap-3"
              >
                <input
                  :id="'selectImg' + index + imageIndex"
                  v-model="form.image_id"
                  type="radio"
                  :value="{ url: image.image_url, id: image.id }"
                  :name="'selectImg' + index"
                >
                <label class="w-full" :for="'selectImg' + index + imageIndex">
                  Gambar {{ imageIndex + 1 }}
                </label>
              </div>

              <!-- Add more dropdown items as needed -->
            </div>
          </div>
        </div>
        <textarea
          id="todo"
          v-model="form.body"
          class="w-full outline-none pt-5 border-b-2"
          name="todo"
          cols="30"
          rows="10"
          placeholder="Ketika sesuatu ..."
        />

        <div class="flex gap-4 items-center justify-between pt-5">
          <button class="text-[#6C61E1]" @click="cancelTodo">
            Batalkan
          </button>
          <button
            class="border w--[100px] rounded-lg px-10 py-3 text-[14px] outline-none bg-[#6C61E1] text-white justify-center flex items-center"
            type="submit"
            :class="{
              'bg-[#E5E5E6] cursor-not-allowed text-[#B0B0B5]': !isFormValid
            }"
            :disabled="!isFormValid"
          >
            Kirim
          </button>
        </div>
      </form>
    </ModalBase>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('project', ['modalAddTodo']),
    isFormValid () {
      return this.form.image_id !== null && this.form.body !== ''
    }
  },

  data () {
    return {
      index: 0,
      isOpen: false,
      project: this.$store.state.project.detailProject,
      form: {
        body: '',
        image_id: null
      }
    }
  },

  methods: {
    ...mapActions('project', ['addTodo']),
    cancelTodo () {
      this.$store.commit('project/setCloseTodo', false)
    },

    async sendTodo () {
      // const timId = this.$route.params.id
      const formData = {
        body: this.form.body,
        image_id: this.form.image_id.id
      }
      console.log(formData)
      const response = await this.addTodo(formData) // Mengirimkan ID proyek ke metode deleteProject
      if (response.status === 201) {
        this.$toast.success(response.message)
        setTimeout(() => {
          window.location.reload() // Refresh halaman setelah penundaan 1000ms (1 detik)
        }, 1000)
      } else {
        this.$toast.error(response.message.base)
      }
    }
  }
}
</script>
