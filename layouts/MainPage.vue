<template>
  <div class="flex h-screen w-full">
    <div class="order-2 flex flex-col w-full overflow-hidden overflow-y-scroll">
      <!-- topbar -->
      <div>
        <div
          v-if="isBeranda"
          class="font-cabinet-grotesk text-3xl font-[600] py-9 px-5 flex items-center gap-4 justify-between"
        >
          <NuxtLink to="">
            Beranda
          </NuxtLink>
          <div v-if="loading" class="text-center flex items-center gap-3">
            <div
              class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"
            />
            <p class="mt-2 text-base">
              Loading...
            </p>
          </div>
        </div>
        <div
          v-if="deepLink"
          class="font-cabinet-grotesk text-3xl font-[600] py-9 px-5 flex items-center gap-4"
        >
          <NuxtLink to="/Beranda" class="text-[#95959D]">
            Beranda
          </NuxtLink>
          <icon-galery-arrow-icon class="rotate-90" width="25" />
          <NuxtLink to="">
            Proyek Saya
          </NuxtLink>
        </div>

        <div v-if="deepLink" class="flex px-5 mt-11">
          <label
            for="image"
            class="bg-[#6C61E1] text-white font-cabinet grotesk flex min-w-max px-[13px] py-1 items-center justify-center gap-3 rounded-md cursor-pointer"
          >
            <icon-galery-add-project width="15" />
            Buat Proyek
          </label>
          <input
            id="image"
            ref="inputImg"
            type="file"
            name="image"
            accept="image/*"
            class="hidden"
            multiple
            @change="displayImage"
          >
        </div>
        <div v-if="isBeranda">
          <mainpage-top-bar />
        </div>
      </div>

      <Nuxt />
    </div>

    <!-- sidebar -->
    <mainpage-side-bar class="order-1" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'MainPage',
  computed: {
    ...mapState('project', ['loading']),
    isBeranda () {
      return this.$route.name === 'Beranda'
    },
    deepLink () {
      return this.$route.path.startsWith('/beranda/my-project')
    }
  },
  methods: {
    ...mapMutations('project', ['setSelectedImg', 'setShowPreview']),
    displayImage (event) {
      const files = event.target.files

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = () => {
          this.setSelectedImg(reader.result)
          if (i === files.length - 1) {
            this.setShowPreview(true)
            this.$router.push({
              name: 'CreateProject',
              params: { selectedImg: reader.result }
            })
          }
        }
        reader.readAsDataURL(files[i])
      }
    }
  }
}
</script>
