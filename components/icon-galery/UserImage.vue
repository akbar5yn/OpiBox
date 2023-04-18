<template>
  <div>
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
        class="w-8 h-8 rounded-full"
        src="/docs/images/people/profile-picture-3.jpg"
        alt="user photo"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserImage'
}
</script>
