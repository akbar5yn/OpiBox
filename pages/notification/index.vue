<template>
  <div>
    <header>
      <h1 class="py-[36px] px-[28px] font-cabinet-grotesk text-3xl font-medium">
        Notifikasi
      </h1>
      <div class="grid grid-cols-2 text-center px-7">
        <button
          class="py-[20px] font-cabinet-grotesk text-2xl"
          :class="
            selectedNotification === 'info'
              ? 'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk'
              : 'border-b-2 border-b-transparent text-[#95959D]'
          "
          @click="selectedNotification = 'info'"
        >
          Info
        </button>
        <button
          class="py-[20px] font-cabinet-grotesk text-2xl"
          :class="
            selectedNotification === 'undangan'
              ? 'border-b-2 border-b-[#6C61E1] text-cabinet-grotesk'
              : 'border-b-2 border-b-transparent text-[#95959D]'
          "
          @click="selectedNotification = 'undangan'"
        >
          Undangan
        </button>
      </div>
    </header>
    <main>
      <!-- Info -->

      <ShowInformation v-if="selectedNotification === 'info'" />

      <!-- undangan -->
      <div v-if="selectedNotification === 'undangan'">
        <h1>Undangan</h1>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'NotiFication',
  layout: 'MainPage',

  data () {
    return {
      selectedNotification: 'info'
    }
  },

  methods: {}
}
</script>
