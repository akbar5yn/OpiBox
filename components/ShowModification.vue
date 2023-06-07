<template>
  <div class="h-[100%]">
    <section
      v-if="noModification"
      class="h-[100%] flex flex-col items-center text-center justify-center gap-2"
    >
      <p class="font-cabinet-grotesk text-xl font-bold">
        Belum Ada Modifikasi
      </p>
      <p class="font-cabinet-grotesk">
        Hasil modifikasi gambar dari proyek akan muncul di sini
      </p>
    </section>
    <section v-else class="like-commenth-[100%] mt-5">
      <div
        class="card p-5 w-full flex flex-col gap-2 relative font-cabinet-grotesk"
      >
        <div class="header flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3785_21578)">
                <circle
                  cx="18"
                  cy="18"
                  r="17.25"
                  fill="#EBEAFB"
                  stroke="#AFA9EF"
                  stroke-width="1.5"
                />
                <circle
                  cx="18"
                  cy="14.25"
                  r="6"
                  stroke="#AFA9EF"
                  stroke-width="1.5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.76758 29.0216C6.87641 25.0832 12.0911 22.5 17.9997 22.5C23.9083 22.5 29.123 25.0832 32.2319 29.0216C31.9169 29.4278 31.5849 29.82 31.237 30.1974C28.4668 26.5084 23.6466 24 17.9997 24C12.3529 24 7.53261 26.5084 4.7624 30.1974C4.4145 29.82 4.08254 29.4278 3.76758 29.0216Z"
                  fill="#AFA9EF"
                />
              </g>
              <defs>
                <clipPath id="clip0_3785_21578">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p class="font-cabinet-grotesk">
                Nama pengguna
              </p>
              <div class="mark flex items-center gap-2">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.54445 2.14601C5.00475 -0.314294 8.99369 -0.314295 11.454 2.14601C13.9143 4.60631 13.9143 8.59525 11.454 11.0556L6.99922 15.5103L2.54445 11.0556C0.084143 8.59525 0.084143 4.60631 2.54445 2.14601ZM6.99922 8.40078C7.99333 8.40078 8.79922 7.59489 8.79922 6.60078C8.79922 5.60667 7.99333 4.80078 6.99922 4.80078C6.00511 4.80078 5.19922 5.60667 5.19922 6.60078C5.19922 7.59489 6.00511 8.40078 6.99922 8.40078Z"
                    fill="#19191B"
                  />
                </svg>

                <span class="font-cabinet-grotesk text-[12px] font-normal">Gambar 1</span>
              </div>
            </div>
          </div>
          <img src="../assets/img/tripleIcon.svg" alt="">
        </div>
        <div
          class="card-body w-full items-center h-[215px] overflow-clip flex gap-[10px]"
        >
          <div class="bg-[#6C61E1] w-[10px] h-full rounded-full" />
          <img
            src="../assets/img/image3.svg"
            alt="modifikasi"
            class="object-cover w-full h-full"
          >
        </div>
        <div class="card-footer mt-2 flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quos commodi corrupti dolorum voluptatibus quisquam voluptatem
            soluta, adipisci ea beatae.
          </p>
          <p class="text-[#B0B0B5] text-[12px]">
            3 menit yang lalu
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShowModification',

  data () {
    return {
      noModification: false
    }
  }
}
</script>
