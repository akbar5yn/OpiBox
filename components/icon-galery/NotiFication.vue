<template>
  <div>
    <svg
      :width="width"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 22.5H26L23.8926 20.3926C23.3211 19.8211 23 19.0459 23 18.2377V13.5C23 9.58135 20.4956 6.24763 17 5.01212V4.5C17 2.84315 15.6569 1.5 14 1.5C12.3431 1.5 11 2.84315 11 4.5V5.01212C7.50442 6.24763 5 9.58135 5 13.5V18.2377C5 19.0459 4.67892 19.8211 4.1074 20.3926L2 22.5H9.5M18.5 22.5V24C18.5 26.4853 16.4853 28.5 14 28.5C11.5147 28.5 9.5 26.4853 9.5 24V22.5M18.5 22.5H9.5"
        stroke="#19191B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'NotiFication',
  props: {
    width: {
      type: String,
      default: '20'
    }
  }
}
</script>
