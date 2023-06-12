<template>
  <div class="h-[100%]">
    <section
      v-if="noComment"
      class="flex h-[100%] flex-col items-center text-center justify-center gap-2"
    >
      <p class="font-cabinet-grotesk text-xl font-bold">
        Belum Ada Komentar
      </p>
      <p class="font-cabinet-grotesk">
        Komentar yang telah ditambahkan akan muncul di sini
      </p>
    </section>
    <section v-else class="like-commenth-[100%] mt-5">
      <div
        v-for="(comment, index) in getAllComment"
        :key="index"
        class="card border-b-2 p-5 w-full flex flex-col gap-2 relative"
        :class="{
          'bg-[#EBEAFB]': selectedCommentIndex === index
        }"
        @click="clickComment(index)"
      >
        <!-- {{ showMarker ? 'Sembunyikan Marker' : 'Tampilkan Marker' }} -->
        <div class="header flex items-center justify-between">
          <div class="flex items-center gap-3">
            <icon-galery-avatar-icon />
            <div>
              <p class="font-cabinet-grotesk">
                {{ comment.name }}
              </p>
              <div class="mark flex items-center gap-2">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.54445 2.14601C5.00475 -0.314294 8.99369 -0.314295 11.454 2.14601C13.9143 4.60631 13.9143 8.59525 11.454 11.0556L6.99922 15.5103L2.54445 11.0556C0.084143 8.59525 0.084143 4.60631 2.54445 2.14601ZM6.99922 8.40078C7.99333 8.40078 8.79922 7.59489 8.79922 6.60078C8.79922 5.60667 7.99333 4.80078 6.99922 4.80078C6.00511 4.80078 5.19922 5.60667 5.19922 6.60078C5.19922 7.59489 6.00511 8.40078 6.99922 8.40078Z"
                    fill="#19191B"
                  />
                </svg>

                <span class="font-cabinet-grotesk">Gambar 1</span>
              </div>
            </div>
          </div>
          <!-- <icon-galery-dots-icon @click="selectCardOption(index)" /> -->
          <img
            src="../assets/img/tripleIcon.svg"
            alt=""
            class="p-5 absolute right-5 z-50"
            @click.stop="selectCardOption(index)"
          >
          <div
            v-if="selectedCardOption === index"
            class="absolute right-7 top-12 flex flex-col space-y-2 bg-white p-4 drop-shadow-lg font-light font-open-sans"
          >
            <div
              v-if="!isOwnerComment(comment.user_id)"
              class="flex cursor-pointer items-center space-x-4"
              @click="handlePostTodolist(comment.id)"
            >
              <img
                class="w-4"
                src="../assets/img/addTaskIcon.svg"
                alt="Add Task"
              >
              <span>Tambahkan ke tugas</span>
            </div>
            <div
              v-if="isOwnerComment(comment.user_id)"
              class="flex cursor-pointer items-center space-x-4"
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.5H3C1.89543 3.5 1 4.39543 1 5.5V16.5C1 17.6046 1.89543 18.5 3 18.5H14C15.1046 18.5 16 17.6046 16 16.5V11.5M14.5858 2.08579C15.3668 1.30474 16.6332 1.30474 17.4142 2.08579C18.1953 2.86683 18.1953 4.13316 17.4142 4.91421L8.82842 13.5H6L6 10.6716L14.5858 2.08579Z"
                  stroke="#19191B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Edit komentar</span>
            </div>
            <div
              v-if="isOwnerComment(comment.user_id)"
              class="flex cursor-pointer items-center space-x-4"
              @click.stop="handleDeleteComment(comment.id, comment.project_id)"
            >
              <img
                class="w-4"
                src="../assets/img/deleteIcon.svg"
                alt="Delete Icon"
              >
              <span>Hapus komentar</span>
            </div>
          </div>
        </div>
        <div>
          <p class="font-cabinet-grotesk">
            {{ comment.body }}
          </p>
        </div>
        <footer class="font-cabinet-grotesk text-gray-400 font-light">
          {{ comment.time_ago }}
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Project',
  layout: 'ProjectSession',

  props: ['showMarker'],

  data () {
    return {
      currentImageIndex: 0,
      fillColor: '#fff',
      strokeColor: '#19191B',
      projectIndex: 0,
      noComment: false,
      noLike: false,
      showComment: true,
      showLike: false,
      selectedMenu: 'like',
      selectedCardOption: '',
      selectedCommentIndex: -1
    }
  },

  computed: {
    // get project
    ...mapState('project', ['projects']),
    ...mapGetters('project', ['getMyProject']),
    ...mapGetters('comment', ['getAllComment']),
    ...mapGetters('comment', ['commentCount']),
    ...mapState('likes', ['likes', 'isL,iked', 'likeCount']),
    ...mapGetters('likes', ['getLike'])
  },

  methods: {
    ...mapActions('project', ['fetchMyProject']),
    ...mapActions('likes', ['fetchLike', 'likeProject', 'disLike']),
    ...mapMutations('likes', ['setLike']),
    ...mapActions('comment', ['fetchComment', 'deleteComment']),
    ...mapActions('todolist', ['postTodolist']),

    updateProjectStatus () {
      this.noComment = this.getAllComment.length === 0
    },
    selectCardOption (value) {
      this.selectedCardOption = this.selectedCardOption === value ? '' : value
    },
    async handleDeleteComment (id, projectId) {
      const data = {
        id,
        project_id: projectId
      }
      const response = await this.deleteComment(data)
      console.log({ response })
      if (response.status === 200) {
        this.$router.go()
      }
    },
    async handlePostTodolist (id) {
      const data = {
        comment_id: id
      }
      const response = await this.postTodolist(data)
      if (response.status === 201) {
        this.$toast.success(response.message)
        this.$router.go()
      } else {
        this.$toast.error(response.data.message.base)
      }
      console.log(response)
    },

    clickComment (index) {
      if (this.selectedCommentIndex === index) {
        this.selectedCommentIndex = -1
        this.$emit('displayMarker', !this.showMarker)
      } else {
        // Pilih card yang baru diklik
        this.selectedCommentIndex = index
        const newShowMarker = !this.showMarker
        this.$emit('displayMarker', {
          showMarker: newShowMarker,
          selectedIndex: index
        })
        // this.$emit('')
      }
    },

    isOwnerComment (userId) {
      return userId === this.$auth.user.id
    }
  },

  watch: {
    getMyProject () {
      this.updateProjectStatus()
    }
  },

  created () {
    this.updateProjectStatus()
  }
}
</script>
