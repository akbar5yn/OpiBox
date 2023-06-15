<template>
  <div>
    <header>
      <div class="flex items-center">
        <mainpage-hamburger-button class="laptop:hidden" color="black" />
        <h1
          class="py-[36px] px-[28px] font-cabinet-grotesk text-3xl font-medium"
        >
          Notifikasi
        </h1>
      </div>
      <div class="grid grid-cols-2 text-center px-7">
        <nuxt-link
          to="/notification"
          class="laptop:py-[20px] font-cabinet-grotesk text-lg tablet:text-2xl text-[#95959D]"
          :class="{
            'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk text-black':
              $route.path === '/notification'
          }"
        >
          Info
        </nuxt-link>
        <nuxt-link
          to="/notification/invitations"
          class="laptop:py-[20px] font-cabinet-grotesk text-lg tablet:text-2xl text-[#95959D]"
          :class="{
            'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk text-black':
              $route.path === '/notification/invitations'
          }"
        >
          Undangan
        </nuxt-link>
      </div>
    </header>

    <!-- Notificatin -->
    <main>
      <!-- <ShowInformation v-if="selectedNotification === 'info'" /> -->
      <NotiFications />
    </main>
  </div>
</template>
<script>
export default {
  name: 'NotiFication',
  layout: 'MainPage',
  middleware: 'auth',

  data () {
    return {}
  },

  methods: {}
}
</script>
