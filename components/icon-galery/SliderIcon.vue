<template>
  <svg
    class="icon"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1L19 8M19 8L12 15M19 8L1 8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'SliderIcon'
}
</script>

<style scoped>
.icon path {
  stroke: #19191b; /* Warna stroke default */
}

@media (max-width: 767px) {
  .icon path {
    stroke: white; /* Warna stroke saat ukuran layar <= 767px */
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .icon path {
    stroke: black; /* Warna stroke saat ukuran layar antara 768px dan 1023px */
  }
}

@media (min-width: 1024px) {
  .icon path {
    stroke: black; /* Warna stroke saat ukuran layar >= 1024px */
  }
}
</style>
