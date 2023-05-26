<template>
  <div class="h-[100%]">
    <section
      v-if="noLike"
      class="h-[100%] flex flex-col items-center text-center justify-center gap-2"
    >
      <p class="font-cabinet-grotesk text-xl font-bold">
        Belum Disukai Siapapun
      </p>
      <p class="font-cabinet-grotesk">
        Pengguna yang menyukai proyek akan ditampilkan di sini
      </p>
    </section>
    <section v-else class="like-commenth-[100%] mt-5">
      <div
        v-for="(like, index) in getLike"
        :key="index"
        class="card border-b-2 py-5 w-full flex items-center gap-4"
      >
        <icon-galery-avatar-icon />
        <span>{{ like.name }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'ShowLike',

  data () {
    return {
      noLike: false
    }
  },

  computed: {
    ...mapState('project', ['projects']),
    ...mapGetters('project', ['getMyProject']),

    ...mapState('likes', ['likes', 'isLiked', 'likeCount']),
    ...mapGetters('likes', ['getLike'])
  },
  watch: {
    getMyProject () {
      this.updateProjectStatus()
    }
  },
  created () {
    this.updateProjectStatus()
  },

  methods: {
    ...mapActions('project', ['fetchMyProject']),
    ...mapActions('likes', ['fetchLike', 'likeProject', 'disLike']),
    ...mapMutations('likes', ['setLike']),
    ...mapActions('comment', ['fetchComment']),

    updateProjectStatus () {
      this.noLike = this.getLike.length === 0
    }
  }
}
</script>
