<template>
  <div>
    <!-- navbar -->
    <landing-page-nav-bar />

    <!-- hero section -->
    <section id="beranda" class="brand pt-[120px] relative">
      <div class="items-center flex flex-col font-cabinet-grotesk">
        <div class="w-[90%] xl:w-[65%] flex flex-col items-center text-center">
          <h1
            class="text-[32px] font-medium xl:text-[42px] 2xl:text-[52px] 3xl:text-[64px] font-cabinet-grotesk"
          >
            Salurkan Opinimu untuk Berkolaborasi!
          </h1>
          <p
            class="text-[16px] text-[#000000] lg:text-[18px] lg:w-[80%] self-center mt-4 xl:text-[22px] 2xl:text-[24px] font-open-sans"
          >
            Opibox adalah tempat dimana Anda bebas untuk beropini mengenai
            gambar yang terunggah dan memodifikasinya berdasarkan hasil dari
            kolaborasi.
          </p>
        </div>

        <button
          class="bg-[#6C61E1] text-white py-3 px-10 w-auto my-10 font-medium xl:text-[24px] rounded-md font-cabinet-grotesk"
        >
          Mulai Berkolaborasi
        </button>
        <div>
          <img
            src="../assets/img/Ilustrasi.webp"
            alt="Opi-nion"
            class="hidden md:block xl:w-[1000px]"
          >
        </div>
      </div>

      <div
        class="relative playstore-section w-full lg:pb-[200px] p-5 bg-[#D7D4F7] flex items-center justify-between md:grid md:grid-cols-2 md:px-[10px] md:items-center md:h-[60] md:mt-12 xl:grid xl:grid-cols-2 3xl:px-[200px] 3xl:h-[70vh] xl:mt-12"
      >
        <div
          class="relative text-center flex flex-col items-center xl:text-start xl:w-[75%] xl:left-36 xl:flex xl:flex-col xl:items-start xl:gap-y-8"
        >
          <h1
            class="text-[24px] xl:text-[42px] 2xl:text-[52px] 3xl:text-[64px] font-cabinet-grotesk"
          >
            Bawa Opibox Bersamamu.
          </h1>
          <p
            class="text-[16px] mt-2 lg:text-[18px] xl:mt-0 xl:text-[22px] 2xl:text-[32px] font-open-sans"
          >
            Unduh aplikasinya dan berkolaborasi di mana pun Anda berada
          </p>

          <button
            class="bg-black border-white mt-4 xl:mt-0 flex gap-2 items-center border-[2px] rounded-xl max-w-fit px-[17px] py-2"
          >
            <img
              src="../assets/img/google-changes-play-store-png-logo-0 1.svg"
              class="w-[35px] xl:w-[44px]"
              alt="google-play"
            >
            <p class="text-white text-start text-[14px]">
              TEMUKAN DI <br>
              <span
                class="text-[18px] font-semibold xl:font-bold xl:text-[28px]"
              >Google Play</span>
            </p>
          </button>
        </div>
        <img class="" src="../assets/img/Illustration.png">
      </div>
    </section>

    <!-- service section -->
    <section
      id="layanan"
      class="relative layanan bg-white h-auto z-10 rounded-t-[50px] lg:pt-9 xl:rounded-t-[104px] xl:-mt-[200px] xl:px-[50px] 2xl:p-[120px]"
    >
      <div
        class="hidden md:flex md:flex-col md:gap-y-20 xl:flex xl:flex-col xl:gap-y-20"
      >
        <!-- Desktop view  -->

        <!-- layanan 1 -->
        <div
          class="flex justify-center items-center md:gap-[50px] md:px-12 lg:gap-[150px] lg:px-10 xl:gap-[100px] 2xl:gap-[200px] 3xl:px-52"
        >
          <div class="relative xl:w-[350px] lg:w-auto">
            <img src="../assets/img/image_service1.svg" alt="service1">
            <img
              src="../assets/img/ellips1_service.svg"
              alt="elipse"
              class="absolute -bottom-10 -z-50"
            >
          </div>
          <div class="w-[720px]">
            <h1
              class="md:text-[24px] md:font-bold xl:text-[42px] 2xl:text-[48px] xl::font-bold font-cabinet-grotesk"
            >
              <span class="text-[#6C61E1]">Atur Prioritas Opini</span>
              <span class="text-black">Yang Anda Dapatkan</span>
            </h1>
            <p
              class="md:text-[16px] md:mt-2 lg:text-[18px] lg:font-normal xl:text-[30px] 2xl:text-[30px] font-open-sans"
            >
              Opini yang telah diberikan dapat dibuat menjadi list tugas dan
              dapat diatur prioritasnya.
            </p>
          </div>
        </div>

        <!-- layanan 2 -->
        <div
          class="flex justify-center items-center md:gap-[50px] md:px-12 lg:gap-[150px] lg:px-10 xl:gap-[100px] 2xl:gap-[200px] 3xl:px-52"
        >
          <div class="w-[720px]">
            <h1
              class="md:text-[24px] md:font-bold xl:text-[42px] 2xl:text-[48px] xl::font-bold font-cabinet-grotesk"
            >
              <span class="text-[#6C61E1]">Modifikasi Ide</span>
              <span class="text-black">Anda Dengan Mudah</span>
            </h1>
            <p
              class="md:text-[16px] md:mt-2 lg:text-[18px] lg:font-normal xl:text-[30px] 2xl:text-[30px] font-open-sans"
            >
              Modifikasikan desain tersebut berdasarkan list tugas yang tertera.
            </p>
          </div>
          <div class="relative xl:w-[350px] lg:w-auto">
            <img src="../assets/img/image_service2.svg" alt="service2">
            <img
              src="../assets/img/ellips2_service.svg"
              alt="elipse"
              class="absolute md:-left-10 -bottom-10 -z-50 -left-20"
            >
          </div>
        </div>

        <!-- layanan 3 -->
        <div
          class="flex justify-center items-center md:gap-[50px] md:px-12 lg:gap-[150px] lg:px-10 xl:gap-[100px] 2xl:gap-[200px] 3xl:px-52"
        >
          <div class="relative xl:w-[350px] lg:w-auto">
            <img
              src="../assets/img/icon-3d-3.svg"
              alt="service3"
              class="w-[500px]"
            >
            <img
              src="../assets/img/ellips3_service.svg"
              alt="elipse"
              class="absolute md:-bottom-10 -bottom-24 -z-50 w-full"
            >
          </div>
          <div class="w-[720px]">
            <h1
              class="md:text-[24px] md:font-bold xl:text-[42px] 2xl:text-[48px] xl::font-bold font-cabinet-grotesk"
            >
              <span class="text-[#6C61E1]">Kolaborasi Bersama Tim</span>
              <span class="text-black"> Untuk Hasil yang Lebih Baik</span>
            </h1>
            <p
              class="md:text-[16px] md:mt-2 lg:text-[18px] lg:font-normal xl:text-[30px] 2xl:text-[30px] font-open-sans"
            >
              Undang anggota tim sebanyak-banyaknya dan dapatkan hasil desain
              yang lebih kreatif dan bervariasi.
            </p>
          </div>
        </div>
      </div>

      <!-- mobile view -->
      <div class="swiper-container">
        <div class="swipper-wrapper">
          <!-- layanan 1 -->
          <div class="p-5 flex flex-col gap-y-5 md:hidden">
            <img
              src="../assets/img/icon3d.svg"
              alt="icon-3d"
              class="w-[240px] self-center mt-10"
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

          <!-- layanan 2 -->
          <div class="p-5 flex flex-col gap-y-5 md:hidden">
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

          <!-- layanan 3 -->
          <div class="p-5 flex flex-col gap-y-5 md:hidden">
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
    <section
      id="loyality"
      class="bg-[#6C61E1] text-white px-5 pt-7 pb-[50px] md:mt-20 xl:px-[120px] xl:pb-[75px] xl:mt-20"
    >
      <div
        class="text-center flex-col flex items-center justify-center md:flex lg:flex xl:flex-row xl:text-start 2xl:flex 2xl:gap-[73px] 3xl:flex 3xl:text-start"
      >
        <div class="md:w-[80%] xl:w-[720px]">
          <h1
            class="text-2xl xl:text-[42px] 2xl:text-[48px] xl:font-bold font-cabinet-grotesk"
          >
            Program Loyalti Opibox
          </h1>
          <p
            class="mt-6 xl:text-[20px] xl:font-normal xl:leading-[39px] font-open-sans"
          >
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
    <section
      id="bantuan"
      class="relative bg-white rounded-t-[50px] mt-[-50px] xl:rounded-t-[104px] xl:mt-[-80px] xl:z-0"
    >
      <div
        class="pt-11 xl:flex justify-center xl:pt-[100px] xl:px-[120px] xl:gap-[100px] 2xl:gap-[152px]"
      >
        <h1
          class="text-2xl font-bold text-center xl:mt-9 xl:text-[30px] xl:font-bold 2xl:text-[48px] font-cabinet-grotesk"
        >
          Pertanyaan Umum
        </h1>
        <div class="mt-5">
          <ul class="flex flex-col gap-y-2 items-center font-cabinet-grotesk">
            <FaqItem v-for="(item, key) in faqList" :key="key" :item="item" />
          </ul>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer
      class="bg-[#313135] text-white mt-12 md:flex md:flex-col md:justify-center xl:flex xl:flex-col xl:justify-center xl:items-center xl:px-40 xl:mt-28 2xl:px-0"
    >
      <div
        class="py-10 px-10 justify-center border-b-2 xl:flex xl:py-14 xl:px-0 xl:gap-20 2xl:px-10 2xl:gap-40"
      >
        <div class="justify-center flex gap-4">
          <img
            src="../assets/img/logo.svg"
            class="w-11 self-start mt-2"
            alt="logo"
          >
          <h1 class="text-[36px] font-bold self-start font-cabinet-grotesk">
            Opibox
          </h1>
        </div>
        <hr class="w-full h-1 my-4 md:hidden">
        <div
          class="md:flex md:gap-40 md:py-10 lg:py-0 xl:gap-20 2xl:gap-40 justify-evenly"
        >
          <div>
            <h3 class="text-[24px] font-bold mb-3 font-cabinet-grotesk">
              Menu
            </h3>
            <ul class="flex flex-col gap-y-3 font-open-sans">
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
          <div class="mt-5 md:mt-0 xl:mt-0">
            <h3 class="text-[24px] font-bold mb-3 font-cabinet-grotesk">
              Tentang Kami
            </h3>
            <ul class="flex flex-col gap-y-3 font-open-sans">
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
        </div>
        <hr class="w-full h-1 my-4 md:hidden">
        <div class="flex flex-col items-center xl:flex-col xl:items-start">
          <h3 class="text-[24px] font-bold mb-3 font-cabinet-grotesk">
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
      <p class="py-10 text-center font-cabinet-grotesk">
        © 2023 Opibox | Opibox adalah produk milik PT Qatros Teknologi
        Nusantara.
      </p>
    </footer>
    <Nuxt />
  </div>
</template>
<script>
import FaqItem from '../components/landing-page/FaqItem.vue'
export default {
  name: 'LandingPage',
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

<style scoped>
.arrow {
  width: 10px;
  height: 10px;
  border-bottom: 0.25rem solid #000;
  border-right: 0.25rem solid #000;
  transform: rotate(45deg);
}
</style>
