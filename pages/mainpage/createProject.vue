<template>
  <div id="create-project">
    <form class="w-full" @submit.prevent="">
      <!-- topbar -->
      <section
        class="py-[10px] px-[28px] border-b-2 border-[#CACACE] flex justify-between items-center"
      >
        <!-- icon opibox -->
        <NuxtLink to="/mainpage">
          <icon-galery-opi-box />
        </NuxtLink>
        <!-- icon else -->
        <div class="flex items-center">
          <div class="hidden px-4 mr-5 md:block">
            <ul class="flex items-center gap-8">
              <li class="bg-[#E5E5E6] p-3 rounded-md">
                <nuxt-link to="createProject">
                  <icon-galery-create-icon />
                </nuxt-link>
              </li>
              <li class="">
                <nuxt-link to="#create">
                  <icon-galery-list-icon />
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- icon section 2 -->
          <div class="hidden pl-4 border-l-2 py-3 mr-8 md:block">
            <ul class="flex items-center gap-8 pl-5">
              <li>
                <nuxt-link to="#">
                  <icon-galery-like-icon />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">
                  <icon-galery-comment-icon />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">
                  <icon-galery-retweet-icon />
                </nuxt-link>
              </li>
            </ul>
          </div>
          <button
            class="bg-[#6C61E1] text-white px-[18px] py-[8px] rounded-lg flex items-center gap-[18px]"
            type="submit"
          >
            <icon-galery-checklist-icon />
            Simpan
          </button>
        </div>
      </section>

      <!-- main form -->
      <section class="px-6 w-[100%] mt-5 flex flex-col gap-y-5 justify-center">
        <!-- judul proyek -->
        <div class="flex flex-col gap-y-3">
          <label for="judul" class="text-[20px]">Judul Proyek</label>
          <input
            id="judul"
            name="judul"
            type="text"
            placeholder="Masukan Judul"
            class="px-2 py-3 text-[14px] outline-none border rounded-lg"
          >
        </div>

        <!-- image preview hidden -->
        <div
          v-if="!showPreview"
          class="border-2 h-[286px] border-dashed border-[#95959D] py-4 flex flex-col items-center justify-center gap-y-2"
        >
          <icon-galery-image-icon />
          <p class="text-[#95959D] text-base xl:text-3xl text-center">
            Anda belum mengunggah gambar
          </p>
        </div>

        <!-- image preview muncul-->
        <div
          v-else
          id="image-preview"
          class="border-2 h-[286px] relative border-dashed border-[#95959D] py-4 px-4 flex flex-col items-center justify-center"
        >
          <img
            :src="imageUrl"
            alt="Image preview"
            class="object-cover w-auto h-[100%]"
          >
        </div>

        <!-- masukan gambar -->
        <label
          class="border-2 cursor-pointer border-black rounded-lg px-3 py-2 flex items-center gap-4 w-fit xl:px-6 xl:py-3"
          for="image"
        >
          <icon-galery-add-project
            stroke-color="black"
            width="20"
            height="20"
          />
          <p>Tambahkan Gambar</p>
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="hidden"
          @change="displayImage"
        >

        <!-- desc proyek -->
        <div class="flex flex-col">
          <label for="desc" class="text-[20px]">Deskripsi</label>
          <textarea
            id="desc"
            name="desc"
            placeholder="Masukan Deskripsi"
            class="px-2 py-3 text-[14px] outline-none border rounded-lg"
            rows="5"
            cols="30"
          />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: null,
      imageName: null,
      showPreview: false
    }
  },
  methods: {
    displayImage (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imageUrl = reader.result
        this.imageName = file.name
        this.showPreview = true
      }
    }
  }
}
</script>
