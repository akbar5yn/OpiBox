<template>
  <div v-if="privacy" class="text-center modal-overlay px-5">
    <div class="modal mobile:h-[85%]">
      <!-- modal header -->
      <section class="font-cabinet-grotesk">
        <h1 class="text-start text-xl tablet:text-xl font-semibold">
          Kebijakan privasi Opibox
        </h1>
        <p class="mobile:text-sm tablet:text-lg text-start">
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
      <div
        class="modal-body mt-[18px] border-2 rounded-md p-5 h-[500px] overflow-y-scroll"
      >
        <section class="font-cabinet-grotesk">
          <h3 class="font-semibold text-lg text-start">
            Informasi yang kami kumpulkan:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Informasi pribadi: Saat Anda mendaftar dan menggunakan Opibox, kami
            dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan
            informasi kontak lainnya yang Anda berikan secara sukarela.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Informasi penggunaan: Kami dapat mengumpulkan informasi tentang
            penggunaan Anda saat menggunakan Opibox, seperti aktivitas,
            interaksi, preferensi, dan pengaturan yang Anda pilih.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Penggunaan informasi:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami menggunakan informasi yang dikumpulkan untuk menyediakan,
            mengelola, dan meningkatkan pengalaman pengguna Anda dengan Opibox.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami dapat menggunakan informasi Anda untuk mengirimkan
            pemberitahuan, pembaruan, atau informasi penting terkait dengan
            Opibox.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami dapat menggunakan informasi secara agregat dan anonim untuk
            analisis dan perbaikan produk serta keperluan penelitian.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Ketentuan berbagi informasi:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami tidak akan menjual, menyewakan, atau membagikan informasi
            pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika
            diwajibkan oleh hukum.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami dapat membagikan informasi secara terbatas kepada mitra bisnis,
            penyedia layanan, atau pihak ketiga lainnya yang bekerja untuk
            kepentingan kami dan berkaitan dengan penyediaan Opibox kepada Anda.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Keamanan informasi:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami menerapkan langkah-langkah keamanan yang sesuai untuk
            melindungi informasi pribadi Anda dari akses yang tidak sah,
            penggunaan yang tidak sah, perubahan, atau pengungkapan.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Pengendalian privasi:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Opibox memberikan kontrol kepada Anda untuk mengelola dan
            memperbarui informasi pribadi Anda melalui pengaturan akun atau
            fitur yang disediakan dalam aplikasi.
          </li>
        </section>

        <section class="font-cabinet-grotesk mt-3">
          <h3 class="font-semibold text-lg text-start">
            Perubahan kebijakan privasi:
          </h3>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu dan
            akan memberikan pemberitahuan atau pembaruan yang sesuai.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Dengan menggunakan Opibox, Anda menyetujui kebijakan privasi ini dan
            pemrosesan informasi Anda sesuai dengan ketentuan yang dijelaskan di
            atas.
          </li>
          <li class="text-start mobile:text-sm tablet:text-lg">
            Harap baca kebijakan privasi ini secara seksama dan hubungi kami
            jika Anda memiliki pertanyaan atau kekhawatiran terkait dengan
            privasi dan perlindungan data Anda.
          </li>
        </section>
      </div>

      <!-- modal footer -->
      <div
        class="modal-footer w-full mt-[18px] flex flex-wrap items-center mobile:justify-center tablet:justify-between"
      >
        <div class="px-5">
          <input id="privacy" v-model="isChecked" type="checkbox">
          <label
            for="privacy"
            class="ml-2 mobile:text-sm tablet:text-lg font-cabinet-grotesk"
          >Dengan ini, saya setuju dengan kebijakan privasi yang
            berlaku.</label>
        </div>
        <button
          :disabled="disabled"
          :class="{ 'bg-[#6C61E1]': !disabled, 'bg-gray-200': disabled }"
          class="border py-2 px-5 rounded-md text-white font-cabinet-grotesk"
          @click="closePrivacy"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    privacy: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isChecked: false,
      disabled: true
    }
  },
  watch: {
    isChecked (newValue) {
      this.disabled = !newValue
    }
  },
  methods: {
    closePrivacy () {
      this.$emit('close-privacy', false)
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}
</style>
