<template>
  <div>
    <!-- navbar -->
    <landing-page-nav-bar />

    <!-- hero section -->
    <section class="brand mt-[45px]">
      <div class="items-center flex flex-col">
        <div class="w-[90%] xl:w-[65%] text-center">
          <h1 class="text-[32px] font-medium xl:text-[64px]">
            Salurkan Opinimu untuk Berkolaborasi!
          </h1>
          <p class="text-[16px] mt-4 xl:text-[24px]">
            Opibox adalah tempat dimana Anda bebas untuk beropini mengenai
            gambar yang terunggah dan memodifikasinya berdasarkan hasil dari
            kolaborasi.
          </p>
        </div>

        <button
          class="bg-[#4A4A4F] text-white py-3 px-10 w-auto my-10 font-medium xl:text-[24px] rounded-md"
        >
          Mulai Berkolaborasi
        </button>

        <div
          class="hidden xl:grid xl:grid-cols-3 gap-[50px] items-end relative"
        >
          <img src="../assets/img/unsplash_rd7RBGvs_-4.svg" alt="img-1">
          <img
            src="../assets/img/original-a3cd49e2b9322ee2eb0803c2f00de25d 1.svg"
            alt="img-2"
          >
          <img src="../assets/img/hero-foto.svg" alt="img-3">

          <landing-page-chat-box />
        </div>
      </div>

      <div
        class="relative playstore-section w-full p-5 bg-[#D9D9D9] xl:px-[200px] xl:h-[65vh] xl:grid xl:grid-cols-2"
      >
        <div
          class="relative text-center flex flex-col xl:text-start xl:w-[75%] xl:left-10 xl:flex xl:flex-col xl:gap-y-8 xl:mt-10"
        >
          <h1 class="hidden xl:block text-[64px]">
            Bawa Opibox <br>
            Bersamamu.
          </h1>
          <h1 class="xl:hidden text-[32px]">
            Bawa Opibox Bersamamu
          </h1>
          <p class="xl:text-[32px]">
            Unduh aplikasinya dan berkolaborasi di mana pun Anda berada
          </p>

          <button
            class="flex gap-2 items-center bg-black border-white border-[2px] rounded-xl max-w-fit px-[17px] py-2"
          >
            <img
              src="../assets/img/google-changes-play-store-png-logo-0 1.svg"
              class=""
              alt="google-play"
            >
            <p class="text-white text-start">
              TEMUKAN DI <br>
              <span class="font-bold text-[28px]">Google Play</span>
            </p>
          </button>
        </div>

        <div class="relative hidden xl:flex justify-center">
          <img
            src="../assets/img/unsplash_52H5Nfi5WiE.svg"
            class="absolute top-5 right-0"
            alt="handphone"
          >
          <img
            src="../assets/img/unsplash_5Nf-bWJdWcE.svg"
            class="absolute top-5 left-14"
            alt="phone"
          >
        </div>
      </div>
    </section>

    <!-- service section -->
    <section
      class="relative layanan bg-[#EEEEEE] xl:bg-[#B0B0B5] h-auto z-10 mt-[20px] rounded-t-[50px] xl:rounded-t-[104px] xl:p-[120px] xl:mt-[-100px]"
    >
      <!-- Desktop view  -->
      <div class="hidden lg:flex flex-col gap-y-20">
        <div class="flex justify-center items-center gap-[73px]">
          <div class="w-[500px] h-[500px] bg-white" />
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              Atur Prioritas Opini yang Anda Dapatkan
            </h1>
            <p class="text-[30px] font-normal">
              Opini yang telah diberikan dapat dibuat menjadi list tugas dan
              dapat diatur prioritasnya.
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center gap-[73px]">
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              Modifikasikan Ide Anda dengan Mudah
            </h1>
            <p class="text-[30px] font-normal">
              Modifikasikan desain tersebut berdasarkan list tugas yang tertera.
            </p>
          </div>
          <div class="w-[500px] h-[500px] bg-white" />
        </div>

        <div class="flex justify-center items-center gap-[73px]">
          <div class="w-[500px] h-[500px] bg-white" />
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              Kolaborasi Bersama Tim untuk Hasil yang Lebih Baik
            </h1>
            <p class="text-[30px] font-normal">
              Undang anggota tim sebanyak-banyaknya dan dapatkan hasil desain
              terbaik.
            </p>
          </div>
        </div>
      </div>

      <!-- mobile view -->
      <!-- <div class="p-5 flex flex-col gap-y-5 xl:hidden">
        <img
          src="../assets/img/icon3d.svg"
          alt="icon-3d"
          class="w-[240px] self-center"
        >
        <div class="text-center">
          <h1 class="text-2xl font-medium">
            <span class="text-[#6C61E1]">Atur Prioritas Opini</span> yang Anda
            Dapatkan
          </h1>
          <p class="mt-6 text-[#95959D]">
            Opini yang telah diberikan dapat dibuat menjadi list tugas dan dapat
            diatur prioritasnya.
          </p>
        </div>
      </div> -->

      <div class="swiper-container">
        <div class="swipper-wrapper">
          <div class="p-5 flex flex-col gap-y-5 xl:hidden">
            <img
              src="../assets/img/icon3d.svg"
              alt="icon-3d"
              class="w-[240px] self-center"
            >
            <div class="text-center">
              <h1 class="text-2xl font-medium">
                <span class="text-[#6C61E1]">Atur Prioritas Opini</span>
                yang Anda Dapatkan
              </h1>
              <p class="mt-6 text-[#95959D]">
                Opini yang telah diberikan dapat dibuat menjadi list tugas dan
                dapat diatur prioritasnya.
              </p>
            </div>
          </div>

          <div class="p-5 flex flex-col gap-y-5 xl:hidden">
            <img
              src="../assets/img/icon-3d-2.svg"
              alt="icon-3d"
              class="w-[240px] self-center"
            >
            <div class="text-center">
              <h1 class="text-2xl font-medium">
                <span class="text-[#6C61E1]">Modifikasi Ide</span>
                Anda Dengan Mudah
              </h1>
              <p class="mt-6 text-[#95959D]">
                Modifikasikan desain tersebut berdasarkan list tugas yang
                tertera.
              </p>
            </div>
          </div>

          <div class="p-5 flex flex-col gap-y-5 xl:hidden">
            <img
              src="../assets/img/icon-3d-3.svg"
              alt="icon-3d"
              class="w-[240px] self-center"
            >
            <div class="text-center">
              <h1 class="text-2xl font-medium">
                <span class="text-[#6C61E1]">Kolaborasi Bersama</span>
                Tim Untuk Hasil Yang Lebih Baik
              </h1>
              <p class="mt-6 text-[#95959D]">
                Undang anggota tim sebanyak-banyaknya dan dapatkan hasil desain
                yang lebih kreatif dan bervariasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- loyalty programme -->
    <section class="bg-[#95959D] px-[120px] pt-[95px] pb-[173px]">
      <div class="flex justify-center items-center gap-[73px]">
        <div class="w-[720px]">
          <h1 class="text-[48px] font-bold">
            Program Loyalti Opibox
          </h1>
          <p class="text-[20px]">
            Program loyalti ini merupakan program loyalti yang diberikan oleh
            Opibox sebagai tanda terima kasih dan penghargaan untuk kamu yang
            ikut berkolaborasi di Opibox.
          </p>
        </div>
        <!-- <img src="" alt=""> -->
        <div class="w-[500px] h-[300px] bg-white" />
      </div>
    </section>

    <!-- Help Section -->
    <section class="hidden xl:block bg-white rounded-t-[104px] mt-[-80px]">
      <div class="flex justify-center pt-[81px] px-[120px] gap-[152px]">
        <h1 class="text-[48px] font-bold pt-0">
          Pertanyaan Umum
        </h1>
        <div>
          <ul class="flex flex-col gap-y-10">
            <li class="list-help">
              <p class="break-words">
                Siapa target Opibox?
              </p>
              <button class="arrow self-center" />
            </li>

            <li class="list-help">
              <p>Bagaimana cara membuat tim?</p>
              <button class="arrow self-center" />
            </li>

            <li class="list-help">
              <p>Siapa saja yang dapat mengakses file?</p>
              <button class="arrow self-center" />
            </li>

            <li class="list-help">
              <p>Bagaimana jika saya memiliki gambar lebih dari satu?</p>
              <button class="arrow self-center" />
            </li>

            <li class="list-help">
              <p>
                Jika saya diundang ke dalam tim, apa saja yang bisa saya
                lakukan?
              </p>
              <button class="arrow self-center" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer
      class="hidden bg-[#313135] xl:flex flex-col justify-center items-center px-40 text-white mt-28"
    >
      <div class="flex gap-40 justify-center border-b-2 py-14">
        <div class="flex gap-4">
          <img
            src="../assets/img/logo.svg"
            class="w-11 self-start mt-2"
            alt="logo"
          >
          <h1 class="text-[36px] font-bold self-start">
            Opibox
          </h1>
        </div>
        <div>
          <h3 class="text-[24px] font-medium mb-3">
            Menu
          </h3>
          <ul class="flex flex-col gap-y-3">
            <li>
              <NuxtLink to="">
                Beranda
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                Layanan
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                Program Loyalti
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-[24px] font-medium mb-3">
            Tentang Kami
          </h3>
          <ul class="flex flex-col gap-y-3">
            <li>
              <NuxtLink to="">
                Tim Opibox
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                Bantuan
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                Syarat dan Ketentuan
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                Pengaturan Cookie
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-[24px] font-medium mb-3">
            Unduh Aplikasi
          </h3>
          <button
            class="flex gap-2 items-center bg-black border-white border-[2px] rounded-xl max-w-fit px-[17px] py-2"
          >
            <img
              src="../assets/img/google-changes-play-store-png-logo-0 1.svg"
              class=""
              alt="google-play"
            >
            <p class="text-white text-start">
              TEMUKAN DI <br>
              <span class="font-bold text-[28px]">Google Play</span>
            </p>
          </button>
        </div>
      </div>
      <p class="py-10">
        © 2023 Opibox | Opibox adalah produk milik PT Qatros Teknologi
        Nusantara.
      </p>
    </footer>
    <Nuxt />
  </div>
</template>

<script></script>

text-[30px] font-bold border-b-2 py-5 flex justify-between w-[553px]
<style scoped>
.list-help {
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid rgba(25, 25, 27, 0.15);
  display: flex;
  justify-content: space-between;
  width: 692px;
  padding: 20px 0 20px 0;
}

.list-help > p {
  width: 553px;
}

.arrow {
  width: 10px;
  height: 10px;
  border-bottom: 0.25rem solid #000;
  border-right: 0.25rem solid #000;
  transform: rotate(45deg);
}
</style>
