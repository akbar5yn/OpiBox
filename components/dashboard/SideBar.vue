<template>
  <div class="w-[70%] h-screen fixed top-0 bg-white">
    <div class="section1 flex flex-col border-r border-b p-5 border-gray-400">
      <!-- logo -->
      <div class="mt-3">
        <IconOpibox />
      </div>

      <!-- point -->
      <dashboard-point-box class="mt-10" />

      <!-- nuxt link -->
      <ul class="flex flex-col gap-4 mt-5">
        <li class="">
          <nuxt-link to="/">
            Proyek Saya
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Dibagikan dengan Saya
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Draft
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconOpibox from '../icon-galery/IconOpibox.vue'

export default {
  name: 'SideBar',
  components: { IconOpibox }
}
</script>
