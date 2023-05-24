<template>
  <div
    class="flex flex-col cursor-pointer border-b-2 border-black border-opacity-10 gap-y-2"
  >
    <div
      class="flex justify-between w-full xl:text-[20px] xl:font-bold xl:py-4"
      @click="handleDesc"
    >
      <p class="w-[553px] break-words">
        {{ item.title }}
      </p>
      <button class="arrow self-center" />
      <img
        class="transition-all duration-200"
        :class="{ ['rotate-180']: descVisibility }"
        src="../../assets/img/arrowDown.svg"
        alt="Icon Arrow Down"
      >
    </div>
    <p
      v-if="descVisibility"
      class="text-[#62626A] text-[16px] font-open-sans mb-4"
    >
      {{ item.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'FaqItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      descVisibility: false
    }
  },
  methods: {
    handleDesc () {
      this.descVisibility = !this.descVisibility
    }
  }
}
</script>
