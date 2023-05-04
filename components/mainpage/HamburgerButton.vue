<template>
  <div>
    <!-- hamburger button -->
    <!-- <button
      type="button"
      class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
      @click="$emit('toggle-menu', { sideBar: !isClose })"
    > -->
    <button
      type="button"
      class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
      @click="toggleSidebar"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6 text-white"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HamburgerButton',

  // props: {
  //   isClose: Boolean
  // }

  data () {
    return {}
  },
  methods: {
    // toggleSidebar () {
    //   // return this.$store.commit('dashboard/toggleSidebar')
    // },
    ...mapMutations('dashboard', { toggleSidebar: 'toggleSidebar' })
  }
}
</script>
