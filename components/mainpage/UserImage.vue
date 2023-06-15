<template>
  <div class="hidden tablet:flex items-center min-w-max gap-3">
    <button
      id="user-menu-button"
      type="button"
      class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span class="sr-only">Open user menu</span>
      <img
        class="w-10 h-10 rounded-full"
        src="../../assets/img/Profile.svg"
        alt="user photo"
      >
    </button>

    <!-- user name on mobile -->
    <span class="text-white xl:hidden">Selamat datang, <br>
      {{ username }} !</span>
  </div>
</template>

<script>
export default {
  name: 'UserImage',
  computed: {
    username () {
      return this.$auth.user ? this.$auth.user.name : 'Guest'
    }
  }
}
</script>
