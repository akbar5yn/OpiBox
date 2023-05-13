<template>
  <svg
    :width="width"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="rotate-180"
  >
    <path
      d="M1.33341 6.16797L6.00008 1.5013L10.6667 6.16797"
      stroke="#19191B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',
  props: {
    width: {
      type: String,
      default: '15'
    }
  }
}
</script>
