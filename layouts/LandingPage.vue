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
          class="py-3 px-10 bg-[#4A4A4F] text-white w-auto my-10 text-[24px] rounded-md"
        >
          Mulai Berkolaborasi
        </button>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[50px] items-end relative"
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
        class="playstore-section grid grid-cols-2 justify-between bg-[#D9D9D9] px-[200px] relative h-[65vh]"
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

        <div class="relative flex justify-center">
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
      class="layanan bg-[#B0B0B5] h-auto rounded-t-[104px] mt-[-100px] z-10 relative p-[120px]"
    >
      <div class="flex flex-col gap-y-20">
        <div class="flex justify-center items-center gap-[73px]">
          <!-- <img src="" alt=""> -->
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
          <!-- <img src="" alt=""> -->
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
          <!-- <img src="" alt=""> -->
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
    <section>
      <div />
    </section>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>
