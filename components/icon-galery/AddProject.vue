<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :stroke="strokeColor"
  >
    <path
      d="M18 2.6665V33.3332M33.3334 17.9998L2.66669 17.9998"
      stroke-width="3.83333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'AddProject',
  props: {
    strokeColor: {
      type: String,
      default: 'white'
    },
    width: {
      type: String,
      default: '36'
    },
    height: {
      type: String,
      default: '36'
    }
  }
}
</script>
