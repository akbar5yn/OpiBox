<template>
  <div class="w-full sticky">
    <!-- topbar on mobile -->
    <div
      class="topbar flex items-center justify-between p-7 rounded-b-[10px] gap-7 xl:hidden"
    >
      <!-- hamburger -->
      <mainpage-hamburger-button />

      <!-- search column -->
      <mainpage-search-column />

      <!-- profile -->
      <mainpage-user-image />
    </div>

    <!-- top bar on desktop-->
    <div class="px-5 justify-between">
      <div class="hidden xl:flex gap-7">
        <!-- search column -->
        <mainpage-search-column />

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
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TopBar',

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

<style scoped>
.topbar {
  background: linear-gradient(
    133.61deg,
    #6c61e1 -8.71%,
    #958deb 48.63%,
    #6c61e1 101.08%
  );
}
</style>
