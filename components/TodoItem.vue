<template>
  <div class="flex space-x-4 border-t p-6 flex-1 relative">
    <h2 class="text-lg font-semibold mt-2">
      {{ numberItem }}.
    </h2>
    <div class="flex flex-col space-y-2 flex-grow">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.05991 3.36069C6.34032 0.0802898 11.6589 0.0802892 14.9393 3.36069C18.2197 6.6411 18.2197 11.9597 14.9393 15.2401L8.99961 21.1798L3.05991 15.2401C-0.220492 11.9597 -0.220492 6.6411 3.05991 3.36069ZM8.99961 11.7004C10.3251 11.7004 11.3996 10.6259 11.3996 9.30039C11.3996 7.97491 10.3251 6.90039 8.99961 6.90039C7.67413 6.90039 6.59961 7.97491 6.59961 9.30039C6.59961 10.6259 7.67413 11.7004 8.99961 11.7004Z"
              fill="#111826"
            />
          </svg>
          <span>Gambar {{ keyItem }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <svg
            v-if="item.pinned"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_7301_44734)">
              <path
                d="M24.2198 13.1936L20.3896 16.4076C19.5316 17.1275 18.9727 18.0794 18.7342 19.102L14.8775 14.5057C15.9541 14.4509 16.9758 14.0505 17.8184 13.3434L21.6486 10.1295L24.2198 13.1936ZM27.6802 14.2062L21.2524 6.54576C20.8988 6.12444 20.2649 6.06897 19.8435 6.4225C19.4222 6.77604 19.3668 7.41001 19.7203 7.83134L20.3631 8.59738L16.5328 11.8113C15.2612 12.8783 13.3734 12.7132 12.3064 11.4415L10.7743 12.7271L14.6117 17.3004L9.24939 21.7999L9.12614 23.2088L10.535 23.332L15.8973 18.8325L19.7733 23.4517L21.3054 22.1662C20.2384 20.8945 20.4035 19.0067 21.6751 17.9397L25.5054 14.7257L26.1482 15.4918C26.5017 15.9131 27.1357 15.9686 27.557 15.615C27.9783 15.2615 28.0338 14.6275 27.6802 14.2062Z"
                fill="#19191B"
              />
            </g>
            <rect
              x="21.0059"
              y="9.36328"
              width="6"
              height="8"
              transform="rotate(50 21.0059 9.36328)"
              fill="#19191B"
            />
            <defs>
              <clipPath id="clip0_7301_44734">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(18.2852 -0.101562) rotate(50)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="handleSelectTodo(keyItem)"
          >
            <path
              d="M2 2L2 2.01M2 9L2 9.01M2 16L2 16.01M2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3ZM2 10C1.44771 10 1 9.55228 1 9C1 8.44772 1.44771 8 2 8C2.55228 8 3 8.44772 3 9C3 9.55228 2.55228 10 2 10ZM2 17C1.44771 17 0.999999 16.5523 0.999999 16C0.999999 15.4477 1.44771 15 2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17Z"
              stroke="#19191B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p>
        {{ item.comment_body }}
      </p>
      <p
        class="border border-gray-500 rounded-full p-2 text-sm w-fit text-gray-300"
      >
        Ditambahkan dari
        <span class="text-black">{{ item.user_name }}</span>
      </p>
    </div>

    <!-- Option -->
    <div
      v-if="selectedTodo === keyItem"
      class="absolute right-8 top-3 flex flex-col space-y-2 bg-white p-4 drop-shadow-lg font-light font-open-sans"
    >
      <div
        class="flex cursor-pointer items-center space-x-4"
        @click="handleDeleteTodolist(item.id)"
      >
        <img class="w-4" src="../assets/img/deleteIcon.svg" alt="Delete Icon">
        <span>Hapus tugas</span>
      </div>
      <div
        class="flex cursor-pointer items-center space-x-4"
        @click="handlePinTodolist(item.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
        >
          <path
            d="M9.5 2V1.5H9H5H4.5V2V7C4.5 7.99196 4.18503 8.92595 3.60112 9.69852L2.99534 10.5H4H10H11L10.4 9.7C9.83271 8.94361 9.5 8.0082 9.5 7V2ZM3.5 2V1.5H3H2C1.72614 1.5 1.5 1.27386 1.5 1C1.5 0.726142 1.72614 0.5 2 0.5H12C12.2739 0.5 12.5 0.726142 12.5 1C12.5 1.27386 12.2739 1.5 12 1.5H11H10.5V2V7C10.5 8.76634 11.8016 10.2228 13.5 10.4647V11.5H7.97H7.47V12V18.7929L6.97 19.2929L6.47 18.7929V12V11.5H5.97H0.5V10.4647C2.19841 10.2228 3.5 8.76634 3.5 7V2Z"
            fill="#19191B"
            stroke="#19191B"
          />
        </svg>
        <span>Sematkan tugas</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    keyItem: {
      type: Number,
      default: 0
    },
    selectedTodo: {
      type: Number,
      default: 0
    }
  },
  computed: {
    numberItem () {
      return this.keyItem
    }
  },
  methods: {
    ...mapActions('todolist', ['deleteTodolist', 'pinTodolist']),
    handleSelectTodo (val) {
      this.$emit('select-todo', val)
    },
    async handleDeleteTodolist (id) {
      const response = await this.deleteTodolist(id)
      if (response.status === 200) {
        this.$toast.success(response.message)
        this.$router.go()
      } else {
        this.$toast.error(response.data.message)
      }
    },
    async handlePinTodolist (id) {
      const response = await this.pinTodolist(id)
      if (response.status === 201 || response.status === 200) {
        this.$toast.success(response.message)
        this.$router.go()
      } else {
        this.$toast.error(response.data.message)
      }
    }
  }
}
</script>
