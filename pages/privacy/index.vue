<template>
  <div
    class="privacy-policy h-full w-full flex flex-col items-center justify-center"
  >
    <main class="w-[70%] overflow-y-scroll h-[80%] screen-info">
      <!-- modal header -->
      <section class="font-cabinet-grotesk">
        <h1 class="text-start text-xl font-semibold">
          Kebijakan privasi Opibox
        </h1>
        <p class="text-base text-start">
          Opibox menghargai privasi Anda dan berkomitmen untuk melindungi
          informasi pribadi yang Anda bagikan saat menggunakan aplikasi ini.
          Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi informasi yang terkait dengan penggunaan
          Opibox. Harap perhatikan bahwa kebijakan privasi ini hanya berlaku
          untuk Opibox dan tidak berlaku untuk layanan atau situs web pihak
          ketiga yang dapat diakses melalui Opibox.
        </p>
      </section>
      <!-- modal body -->
      <div class="mt-[18px] p-5 h-[500px]">
        <section class="font-cabinet-grotesk">
          <h3 class="font-semibold text-lg text-start">
            Informasi yang kami kumpulkan:
          </h3>
          <li class="text-start">
            Informasi pribadi: Saat Anda mendaftar dan menggunakan Opibox, kami
            dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan
            informasi kontak lainnya yang Anda berikan secara sukarela.
          </li>
          <li class="text-start">
            Informasi penggunaan: Kami dapat mengumpulkan informasi tentang
            penggunaan Anda saat menggunakan Opibox, seperti aktivitas,
            interaksi, preferensi, dan pengaturan yang Anda pilih.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Penggunaan informasi:
          </h3>
          <li class="text-start">
            Kami menggunakan informasi yang dikumpulkan untuk menyediakan,
            mengelola, dan meningkatkan pengalaman pengguna Anda dengan Opibox.
          </li>
          <li class="text-start">
            Kami dapat menggunakan informasi Anda untuk mengirimkan
            pemberitahuan, pembaruan, atau informasi penting terkait dengan
            Opibox.
          </li>
          <li class="text-start">
            Kami dapat menggunakan informasi secara agregat dan anonim untuk
            analisis dan perbaikan produk serta keperluan penelitian.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Ketentuan berbagi informasi:
          </h3>
          <li class="text-start">
            Kami tidak akan menjual, menyewakan, atau membagikan informasi
            pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika
            diwajibkan oleh hukum.
          </li>
          <li class="text-start">
            Kami dapat membagikan informasi secara terbatas kepada mitra bisnis,
            penyedia layanan, atau pihak ketiga lainnya yang bekerja untuk
            kepentingan kami dan berkaitan dengan penyediaan Opibox kepada Anda.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Keamanan informasi:
          </h3>
          <li class="text-start">
            Kami menerapkan langkah-langkah keamanan yang sesuai untuk
            melindungi informasi pribadi Anda dari akses yang tidak sah,
            penggunaan yang tidak sah, perubahan, atau pengungkapan.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Pengendalian privasi:
          </h3>
          <li class="text-start">
            Opibox memberikan kontrol kepada Anda untuk mengelola dan
            memperbarui informasi pribadi Anda melalui pengaturan akun atau
            fitur yang disediakan dalam aplikasi.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Perubahan kebijakan privasi:
          </h3>
          <li class="text-start">
            Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu dan
            akan memberikan pemberitahuan atau pembaruan yang sesuai.
          </li>
          <li class="text-start">
            Dengan menggunakan Opibox, Anda menyetujui kebijakan privasi ini dan
            pemrosesan informasi Anda sesuai dengan ketentuan yang dijelaskan di
            atas.
          </li>
          <li class="text-start">
            Harap baca kebijakan privasi ini secara seksama dan hubungi kami
            jika Anda memiliki pertanyaan atau kekhawatiran terkait dengan
            privasi dan perlindungan data Anda.
          </li>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'PrivacyPolicy'
}
</script>

<style scoped>
.screen-info::-webkit-scrollbar {
  width: 5px;
}

.screen-info::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 20px;
}

.screen-info::-webkit-scrollbar-track {
  background-color: none;
}
</style>
