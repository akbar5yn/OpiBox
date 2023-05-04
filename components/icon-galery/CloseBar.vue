<template>
  <button class="" @click="toggleSidebar">
    <svg class="w-5" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 13L13 1M1 1L13 13"
        stroke="#151B1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CloseBar',

  // props: {
  //   isClose: Boolean
  // }
  methods: {
    // toggleSidebar () {
    //   return this.$store.commit('dashboard/toggleSidebar')
    // }
    ...mapMutations('dashboard', { toggleSidebar: 'toggleSidebar' })
  }
}
</script>
