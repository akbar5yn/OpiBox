<template>
  <div class="px-5 pt-5 flex flex-col gap wf">
    <!-- my project -->
    <section>
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Proyek Saya
        </h1>
        <nuxt-link
          v-if="getMyProject.length > 3"
          class="text-[#62626A]"
          to="/beranda/my-project"
        >
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-project class="mt-[14px]" />
    </section>

    <!-- my draft -->
    <section class="mt-5">
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Dibagikan ke Saya
        </h1>
        <nuxt-link class="text-[#62626A]" to="">
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-draft class="mt-[14px]" />
    </section>

    <!-- show modal create project -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Mainpage',
  layout: 'MainPage',
  middleware: 'auth',

  computed: {
    ...mapGetters('project', ['getMyProject'])
  }
}
</script>
