<template>
  <div class="flex flex-col gap-5 pt-5 px-[51px]">
    <div
      v-for="modification in getModifiedHistory"
      :key="modification.id"
      class="relative cursor-pointer border-b p-5 flex flex-col gap-[10px]"
    >
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-xl font-medium">
          {{ modification.project.title }}
        </h1>
        <p class="text-[#B0B0B5] text-sm">
          {{ modification.created }}
        </p>
      </div>
      <img
        :src="modification.image.thumbnail_url"
        alt="modifcation-image"
        width="175px"
      >
      <p class="text-sm mt-[10px] font-normal">
        {{ modification.caption }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LikeHistory',

  mounted () {
    this.fetchModifiedHistory()
    // this.getHistory()
  },

  computed: {
    ...mapGetters('modification', ['getModifiedHistory'])
  },

  methods: {
    ...mapActions('modification', ['fetchModifiedHistory'])
  }
}
</script>
