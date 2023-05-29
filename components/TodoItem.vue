<template>
  <div class="flex space-x-4 border-t p-6">
    <h2 class="text-lg font-semibold mt-2">
      {{ numberItem }}.
    </h2>
    <div class="flex flex-col space-y-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <svg
            class="w-4"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1887 39.6234C31.1303 39.6234 40.0003 30.7534 40.0003 19.8117C40.0003 8.87 31.1303 0 20.1887 0C9.24695 0 0.376953 8.87 0.376953 19.8117C0.376953 20.3651 0.399646 20.9133 0.444151 21.4552L0.381185 21.3973L0.381182 40.0002L20.1887 39.6234C20.1887 39.6234 20.1886 39.6234 20.1887 39.6234Z"
              fill="#19191B"
            />
          </svg>
          <span>Gambar {{ keyItem }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_7301_44734)">
              <path
                d="M24.2198 13.1936L20.3896 16.4076C19.5316 17.1275 18.9727 18.0794 18.7342 19.102L14.8775 14.5057C15.9541 14.4509 16.9758 14.0505 17.8184 13.3434L21.6486 10.1295L24.2198 13.1936ZM27.6802 14.2062L21.2524 6.54576C20.8988 6.12444 20.2649 6.06897 19.8435 6.4225C19.4222 6.77604 19.3668 7.41001 19.7203 7.83134L20.3631 8.59738L16.5328 11.8113C15.2612 12.8783 13.3734 12.7132 12.3064 11.4415L10.7743 12.7271L14.6117 17.3004L9.24939 21.7999L9.12614 23.2088L10.535 23.332L15.8973 18.8325L19.7733 23.4517L21.3054 22.1662C20.2384 20.8945 20.4035 19.0067 21.6751 17.9397L25.5054 14.7257L26.1482 15.4918C26.5017 15.9131 27.1357 15.9686 27.557 15.615C27.9783 15.2615 28.0338 14.6275 27.6802 14.2062Z"
                fill="#19191B"
              />
            </g>
            <rect
              x="21.0059"
              y="9.36328"
              width="6"
              height="8"
              transform="rotate(50 21.0059 9.36328)"
              fill="#19191B"
            />
            <defs>
              <clipPath id="clip0_7301_44734">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(18.2852 -0.101562) rotate(50)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L2 2.01M2 9L2 9.01M2 16L2 16.01M2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3ZM2 10C1.44771 10 1 9.55228 1 9C1 8.44772 1.44771 8 2 8C2.55228 8 3 8.44772 3 9C3 9.55228 2.55228 10 2 10ZM2 17C1.44771 17 0.999999 16.5523 0.999999 16C0.999999 15.4477 1.44771 15 2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17Z"
              stroke="#19191B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p>
        Di area yang udah aku tandain, menurutku gradasi pewarnaan susunya masih
        kurang kontras, mungkin bisa diubah menjadi lebih gelap 🧐
      </p>
      <p
        class="border border-gray-500 rounded-full p-2 text-sm w-fit text-gray-300"
      >
        Ditambahkan dari
        <span class="text-black">Nama Pengguna</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    keyItem: {
      type: Number,
      default: 0
    }
  },
  computed: {
    numberItem () {
      return this.keyItem + 1
    }
  }
}
</script>
