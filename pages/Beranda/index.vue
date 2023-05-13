<template>
  <div class="px-5 pt-5 flex flex-col gap wf">
    <!-- my project -->
    <section>
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Proyek Saya
        </h1>
        <nuxt-link class="text-[#62626A]" to="">
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-project class="mt-[14px]" />
    </section>
    <!-- <div class="mt-7 flex gap-5">
      <NuxtLink
        to="/mainpage/createProject"
        class="bg-[#6C61E1] text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </NuxtLink>
      <button
        class="bg-[#6C61E1] text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
        @click="clickModal"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </button>
      <label
        for="image"
        class="bg-[#6C61E1] cursor-pointer text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </label>
      <input
        id="image"
        ref="inputImg"
        type="file"
        name="image"
        accept="image/*"
        class="hidden"
        @change="openModal"
      >
      <div
        class="bg-[#E5E5E680] text-[#95959D] p-6 font-cabinet-grotesk text-[18px] text-center font-normal h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <p>
          Seluruh proyek yang Anda buat nantinya akan muncul pada halaman ini.
        </p>
      </div>
    </div> -->

    <!-- my draft -->
    <section class="mt-5">
      <div class="flex justify-between items-center font-cabinet-grotesk">
        <h1 class="text-[20px] font-semibold">
          Dibagikan ke Saya
        </h1>
        <nuxt-link class="text-[#62626A]" to="/beranda/my-project">
          Lihat semua
        </nuxt-link>
      </div>
      <mainpage-my-draft class="mt-[14px]" />
    </section>

    <!-- show modal create project -->
    <mainpage-image-modal
      :show="showModal"
      :image-url="imageUrl"
      @close="closeModal"
    />
  </div>
</template>

<script>
export default {
  name: 'Mainpage',
  layout: 'MainPage',
  middleware: 'auth',
  data () {
    return {
      showModal: false,
      imageUrl: null,
      totalDraft: []
    }
  },
  methods: {
    openModal (event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.imageUrl = reader.result
          this.showModal = true
        }
      } else {
        this.imageUrl = null
      }
    },

    closeModal () {
      this.showModal = false
      this.$refs.inputImg.value = null
    }
  }
}
</script>
