<template>
  <div
    class="px-7 flex gap-6 items-center"
    :class="is_read ? 'bg-white' : 'bg-[#EBEAFB]'"
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.9998 16C31.9998 24.8366 24.8364 32 15.9998 32C7.16326 32 -0.000183105 24.8366 -0.000183105 16C-0.000183105 7.16344 7.16326 0 15.9998 0C24.8364 0 31.9998 7.16344 31.9998 16ZM17.9998 8C17.9998 9.10457 17.1044 10 15.9998 10C14.8952 10 13.9998 9.10457 13.9998 8C13.9998 6.89543 14.8952 6 15.9998 6C17.1044 6 17.9998 6.89543 17.9998 8ZM13.9998 14C12.8952 14 11.9998 14.8954 11.9998 16C11.9998 17.1046 12.8952 18 13.9998 18V24C13.9998 25.1046 14.8952 26 15.9998 26H17.9998C19.1044 26 19.9998 25.1046 19.9998 24C19.9998 22.8954 19.1044 22 17.9998 22V16C17.9998 14.8954 17.1044 14 15.9998 14H13.9998Z"
        fill="#6C61E1"
      />
    </svg>
    <div class="flex flex-col gap-[10px] w-full border-b-2 py-7 border-b-white">
      <ul>
        <li>
          <p>{{ ketNotif }}</p>
          <span class="text-[#62626A]">{{ send_at }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationCard',

  props: {
    action: String,
    id: Number,
    is_read: Boolean,
    send_at: String,
    sender: Object
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {
    ketNotif () {
      switch (this.action) {
        case 'liked':
          return `${this.sender.name} menyukai proyek milik Anda`

        case 'commented':
          return `${this.sender.name} mengomentari proyek milik Anda`

        case 'invitation':
          return `Anda diundang untuk menjadi collaborator di tim ${this.sender.name} ayo segera join !`

        case 'success_invitation':
          return `Anda berhasil bergabung dengan tim ${this.sender.name}`

        case 'redesign':
          return `${this.sender.name} memodifikasi proyek milik Anda`

        default:
          return 'Notif ini belum di atur'
      }
    }
  }
}
</script>
