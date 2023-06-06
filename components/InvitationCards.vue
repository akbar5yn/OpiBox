<template>
  <div class="px-7 flex gap-6 items-center">
    <div class="flex flex-col gap-[10px] w-full">
      <ul>
        <li
          v-for="(notif, index) in inviteNotif"
          :key="index"
          :index="index"
          class="flex font-cabinet-grotesk w-full items-center gap-5"
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#6C61E1" />
            <path
              d="M23.5991 15.6994C23.5991 17.6876 21.9874 19.2993 19.9993 19.2993C18.0112 19.2993 16.3995 17.6876 16.3995 15.6994C16.3995 13.7113 18.0112 12.0996 19.9993 12.0996C21.9874 12.0996 23.5991 13.7113 23.5991 15.6994Z"
              fill="white"
            />
            <path
              d="M29.5988 18.0993C29.5988 19.4247 28.5244 20.4992 27.1989 20.4992C25.8735 20.4992 24.7991 19.4247 24.7991 18.0993C24.7991 16.7739 25.8735 15.6994 27.1989 15.6994C28.5244 15.6994 29.5988 16.7739 29.5988 18.0993Z"
              fill="white"
            />
            <path
              d="M24.7991 26.4989C24.7991 23.8481 22.6501 21.6991 19.9993 21.6991C17.3485 21.6991 15.1995 23.8481 15.1995 26.4989V30.0987H24.7991V26.4989Z"
              fill="white"
            />
            <path
              d="M15.1995 18.0993C15.1995 19.4247 14.1251 20.4992 12.7997 20.4992C11.4742 20.4992 10.3998 19.4247 10.3998 18.0993C10.3998 16.7739 11.4742 15.6994 12.7997 15.6994C14.1251 15.6994 15.1995 16.7739 15.1995 18.0993Z"
              fill="white"
            />
            <path
              d="M27.1989 30.0987V26.4989C27.1989 25.234 26.8727 24.0453 26.2999 23.0123C26.5873 22.9384 26.8885 22.8991 27.1989 22.8991C29.1871 22.8991 30.7988 24.5108 30.7988 26.4989V30.0987H27.1989Z"
              fill="white"
            />
            <path
              d="M13.6987 23.0123C13.1259 24.0453 12.7997 25.234 12.7997 26.4989V30.0987H9.19983V26.4989C9.19983 24.5108 10.8115 22.8991 12.7997 22.8991C13.1101 22.8991 13.4113 22.9384 13.6987 23.0123Z"
              fill="white"
            />
          </svg>

          <div
            class="flex flex-col gap-[10px] font-cabinet-grotesk w-full border-b-2 py-7 border-b-gray-300"
          >
            <p>
              {{ notif.sender.name }} mengundang Anda untuk bergabung ke dalam
              tim
              {{ notif.invitations[0].team_name }}
            </p>
            <div
              class="w-full grid grid-cols-2 gap-[10px] font-cabinet-grotesk text-[20px]"
            >
              <button
                class="rounded-lg border px-[184px] py-[10px] border-[#B0B0B5]"
              >
                Tolak Undangan
              </button>
              <button
                class="rounded-lg px-[184px] py-[10px] bg-[#6C61E1] text-white"
                @click="toggleAccept(notif, index)"
              >
                Terima Undangan
              </button>
            </div>
            <span class="text-[#62626A]">{{ notif.send_at }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'InvitationCards',

  mounted () {
    this.fetchNotifications()
    this.getNotificationInvitations()
    console.log(this.getNotif)
    // this.acceptNotification()
  },

  computed: {
    ...mapState('notifications', ['notifiCations', 'inviteNotif']),
    ...mapGetters('notifications', ['getNotif'])
  },

  methods: {
    ...mapActions('notifications', [
      'fetchNotifications',
      'getNotificationInvitations',
      'acceptNotification',
      'clearInviteNotif'
    ]),

    async toggleAccept (notif, index) {
      const getToken = notif.invitations[0].invitation_token

      const indexOf = index

      try {
        const response = await this.acceptNotification(getToken)
        console.log(response)
        if (response.status === 200) {
          this.$toast.success(response.message)
          this.clearInviteNotif(indexOf)
        } else {
          this.$toast.error(response.message)
        }
      } catch (err) {
        return err
      }
    }
  }
}
</script>
