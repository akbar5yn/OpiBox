<template>
  <div class="flex flex-col gap-5 pt-5 px-[51px]">
    <div
      v-for="comment in getCommentHistory"
      :key="comment.id"
      class="relative cursor-pointer border-b p-5"
    >
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-xl font-medium">
          {{ comment.project_name }}
        </h1>
        <p class="text-[#B0B0B5] text-sm">
          {{ comment.time_ago }}
        </p>
      </div>
      <p class="text-sm mt-[10px] font-normal">
        {{ comment.body }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LikeHistory',

  mounted () {
    this.fetchCommentHistory()
    // this.getHistory()
  },

  computed: {
    ...mapGetters('comment', ['getCommentHistory'])
  },

  methods: {
    ...mapActions('comment', ['fetchCommentHistory'])
  }
}
</script>
