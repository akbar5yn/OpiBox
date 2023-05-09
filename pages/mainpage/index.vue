<template>
  <div class="px px-5 pt-5">
    <!-- main content -->
    <h1 id="#MyProject" class="font-cabinet-grotesk text-[30px] font-semibold">
      Proyek Saya
    </h1>
    <div class="mt-7 flex gap-5">
      <!-- <NuxtLink
        to="/mainpage/createProject"
        class="bg-[#6C61E1] text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </NuxtLink> -->
      <!-- <button
        class="bg-[#6C61E1] text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
        @click="clickModal"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </button> -->
      <label
        for="image"
        class="bg-[#6C61E1] cursor-pointer text-white font-cabinet-grotesk text-[24px] font-semibold h-[258px] w-[360px] flex flex-col items-center justify-center rounded-lg gap-y-8"
      >
        <icon-galery-add-project />
        <p>Buat Proyek Baru</p>
      </label>
      <input
        id="image"
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
    </div>

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
      imageUrl: null
    }
  },
  methods: {
    openModal (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imageUrl = reader.result
        this.showModal = true
      }
    },
    closeModal () {
      this.showModal = false
      this.imageUrl = null
    }
    // clickModal () {
    //   this.showModal = true
    // }
  }
}
</script>
