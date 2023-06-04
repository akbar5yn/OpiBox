<template>
  <div>
    <header>
      <h1 class="py-[36px] px-[28px] font-cabinet-grotesk text-3xl font-medium">
        Notifikasi
      </h1>
      <div class="grid grid-cols-2 text-center px-7">
        <nuxt-link
          to="/notification"
          class="py-[20px] font-cabinet-grotesk text-2xl text-[#95959D]"
          :class="{
            'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk text-black':
              $route.path === '/notification'
          }"
        >
          Info
        </nuxt-link>
        <nuxt-link
          to="/notification/invitations"
          class="py-[20px] font-cabinet-grotesk text-2xl text-[#95959D]"
          :class="{
            'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk text-black':
              $route.path === '/notification/invitations'
          }"
        >
          Undangan
        </nuxt-link>
      </div>
    </header>

    <!-- Notification undangan -->
    <main v-if="$route.params.slug">
      <InvitationCards
        v-for="(notif, index) in notifiCations"
        :id="notif.id"
        :key="index"
        :action="notif.action"
        :is_read="notif.is_read"
        :send_at="notif.send_at"
        :sender="notif.sender"
      />
    </main>

    <!-- Notificatin -->
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NotiFication',
  layout: 'MainPage',
  middleware: 'auth',

  data () {
    return {}
  },

  mounted () {
    this.fetchNotifications()
  },

  computed: {
    ...mapState('notifications', ['notifiCations'])
  },

  methods: {
    ...mapActions('notifications', ['fetchNotifications'])
  }
}
</script>
