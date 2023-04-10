<template>
  <div>
    <!-- navbar -->
    <landing-page-nav-bar />

    <!-- hero section -->
    <section class="brand mt-[45px]">
      <div class="items-center flex flex-col">
        <div class="w-[65%] text-center">
          <h1 class="text-[64px]">
            Salurkan Opinimu untuk Berkolaborasi!
          </h1>
          <p class="text-[24px]">
            Opibox adalah tempat dimana Anda bebas untuk beropini mengenai
            gambar yang terunggah dan memodifikasinya berdasarkan hasil dari
            kolaborasi.
          </p>
        </div>

        <button
          class="py-3 px-10 bg-[#6C61E1] text-white w-auto my-10 text-[24px] rounded-md"
        >
          Mulai Berkolaborasi
        </button>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[50px] items-end relative"
        >
          <img src="../assets/img/image1.svg" alt="img-1">
          <img src="../assets/img/image2.svg" alt="img-2">
          <img src="../assets/img/image3.svg" alt="img-3">

          <landing-page-chat-box />
        </div>
      </div>

      <div
        class="playstore-section grid grid-cols-2 justify-between bg-[#D7D4F7] px-[200px] relative h-[65vh]"
      >
        <div class="w-[75%] relative left-10 flex flex-col gap-y-8 mt-10">
          <h1 class="text-[64px]">
            Bawa Opibox <br>
            Bersamamu.
          </h1>
          <p class="text-[32px]">
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

        <div>
          <img
            src="../assets/img/image_homePage1.svg"
            alt="handphone"
            class="w-[800px] h-[610px]"
          >
        </div>
      </div>
    </section>

    <!-- service section -->
    <section
      class="layanan bg-[#FFFFFF] h-auto rounded-t-[104px] mt-[-100px] z-10 relative p-[120px]"
    >
      <div class="flex flex-col gap-y-20">
        <div class="flex justify-center items-center gap-[73px]">
          <!-- <img src="" alt=""> -->
          <div class="absolute w-[400xpx] h-[400px] left-[60px] top-0">
            <img src="../assets/img/image_service1.svg" alt="image_1">
            <img
              src="../assets/img/ellips1_service.svg"
              alt="elipse"
              class="absolute bottom-0 -z-10 top-[311px]"
            >
          </div>
          <div class="w-[350px] h-[350px]" />
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              <span class="text-[#6C61E1]">Atur Prioritas Opini</span>
              <span class="text-black">yang Anda Dapatkan</span>
            </h1>
            <p class="text-[30px] font-normal">
              Opini yang telah diberikan dapat dibuat menjadi list tugas dan
              dapat diatur prioritasnya.
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center gap-[73px]">
          <!-- <img src="" alt=""> -->
          <div class="absolute w-[480px] h-[480px] right-[89.06px] top-45px">
            <img src="../assets/img/image_service2.svg" alt="image_2">
            <img
              src="../assets/img/ellips2_service.svg"
              alt="ellips2"
              class="absolute bottom-0 -z-10"
            >
          </div>
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              <span class="text-[#6C61E1]">Modifikasikan Ide</span>
              <span class="text-black">Anda dengan Mudah</span>
            </h1>
            <p class="text-[30px] font-normal">
              Modifikasikan desain tersebut berdasarkan list tugas yang tertera.
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center gap-[73px]">
          <!-- <img src="" alt=""> -->
          <div class="absolute w-[500px] h-[350px] left-[50px] top-250">
            <img src="../assets/img/image_service3.svg" alt="image_3">
            <img
              src="../assets/img/ellips3_service.svg"
              alt="ellips3"
              class="absolute buttom-0 -z-10 w-[700px] h-[700px]"
            >
          </div>
          <di class="w-[350px] h-[350px]" />
          <div class="w-[720px]">
            <h1 class="text-[48px] font-bold">
              <span class="text-[#6C61E1]">Kolaborasi Bersama Tim</span>
              <span class="text-black">Untuk Hasil yang Lebih Baik</span>
            </h1>
            <p class="text-[30px] font-normal">
              Undang anggota tim sebanyak-banyaknya dan dapatkan hasil desain
              terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- loyalty programme -->
    <section class="bg-[#6C61E1] px-[120px] pb-[75px] text-white">
      <div class="flex justify-center items-center gap-[73px]">
        <div class="w-[720px]">
          <h1 class="text-[48px] font-bold">
            Program Loyalti Opibox
          </h1>
          <p class="text-[20px] font-sans font-normal leading-[39px]">
            Program loyalti ini merupakan program loyalti yang diberikan oleh
            Opibox sebagai tanda terima kasih dan penghargaan untuk kamu yang
            ikut berkolaborasi di Opibox.
          </p>
        </div>
        <div class="-z-0 relative">
          <img src="../assets/img/image1_loyaltyProgram.svg" alt="img">
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section class="bg-white rounded-t-[104px] mt-[-80px] relative z-0">
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
      class="bg-[#313135] flex flex-col justify-center items-center px-40 text-white mt-28"
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
            class="flex gap-2 items-center bg-[#313135] border-white border-[2px] rounded-xl max-w-fit px-[17px] py-2"
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
