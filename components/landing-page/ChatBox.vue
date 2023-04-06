<template>
  <div>
    <div
      class="absolute w-[449px] rounded-md bottom-20 bg-[#CACACE] left-[-100px]"
    >
      <div class="p-6 text-[19px] chat-box-left bg-[#D7D4F7]">
        <p class="break-words">
          Keren 🔥 tapi mungkin
          <span class="italic">color grading-</span> nya perlu diperbaiki
        </p>
      </div>
    </div>
    <div
      class="absolute w-[279px] rounded-md bottom-10 bg-[#E5E5E6] right-0 top-7 h-min"
    >
      <div class="p-6 text-[19px] chat-box-right bg-[#D7D4F7]">
        <p class="break-words">
          Semangat semuanya ❤️‍🔥
        </p>
      </div>
    </div>
    <div
      class="absolute w-[449px] rounded-md bottom-10 bg-[#E5E5E6] right-0 h-min"
    >
      <div class="p-6 text-[19px] chat-box-right bg-[#D7D4F7]">
        <p class="break-words">
          Menurutku, bagian itu perlu diberi jarak lagi agar terlihat jelas 🧐
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-box-left::before {
  content: '';
  position: absolute;
  top: 0;
  left: -10px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #D7D4F7;
}
.chat-box-right::before {
  content: '';
  position: absolute;
  top: 0;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #e5e5e6;
}
</style>
