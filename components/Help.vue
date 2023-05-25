<template>
  <div>
    <h1 class="text-2xl font-semibold font-cabinet-grotesk">
      Bantuan
    </h1>
    <div class="mt-5">
      <ul class="flex flex-col gap-y-2 font-cabinet-grotesk">
        <FaqItem v-for="(item, key) in faqList" :key="key" :item="item" />
      </ul>
    </div>
  </div>
</template>
<script>
import FaqItem from '@/components/landing-page/FaqItem.vue'
export default {
  name: 'Help',
  components: { FaqItem },
  data () {
    return {
      faqList: [
        {
          title: 'Siapa target Opibox?',
          description: 'lorem ipsum1'
        },
        {
          title: 'Bagaimana cara membuat tim?',
          description: 'lorem ipsum2'
        },
        {
          title: 'Siapa saja yang dapat mengakses file?',
          description: 'lorem ipsum3'
        },
        {
          title: 'Bagaimana jika saya memiliki gambar lebih dari satu?',
          description: 'lorem ipsum4'
        },
        {
          title:
            'Jika saya diundang ke dalam tim, apa saja yang bisa saya lakukan?',
          description: 'lorem ipsum5'
        }
      ]
    }
  }
}
</script>
