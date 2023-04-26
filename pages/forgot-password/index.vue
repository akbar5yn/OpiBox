<template>
  <div class="h-[650px] items-center">
    <div class="text-center">
      <h1 class="text-[50px] font-cabinet-grotesk font-normal text-[#19191B]">
        Lupa Kata Sandi
      </h1>
      <p
        class="text-[20px] font-normal font-open-sans order-1 text-[#4A4A4F]"
        style="line-height: 2"
      >
        Masukkan <strong> alamat email </strong> yang Anda gunakan untuk
        mendaftar <br>
        akun Opibox. Kami akan mengirim pesan melalui email berisi <br>
        tautan untuk mereset kata sandi Anda.
      </p>
      <form action="" class="flex flex-col gap-y-3 mt-4">
        <label
          for="email"
          class="self-start text-[16px] font-normal text-black"
          style="font-family: 'Open Sans', sans-serif"
        >Email</label>
        <input
          id="email"
          class="border rounded-lg px-2 py-3 text-[14px] outline-none flex w-[580px] placeholder:text-[#D9D9D9] border-gray-300"
          type="text"
          name="email"
          placeholder="Masukkan email"
          required
          style="font-family: 'Open Sans', sans-serif"
        >
      </form>
      <div class="mt-8">
        <button
          class="text-white bg-[#6C61E1] p-3 w-full rounded-lg text-[18px] font-normal font-cabinet-grotesk"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordView',
  layout: 'AuthView',

  data () {
    return {
      showPassword: false,
      showPasswordConfirmed: false,
      isClose: false
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('@/assets/CabinetGrotesk-Medium.otf') format('truetype');
}

.font-cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
}

@font-face {
  font-family: 'Open Sans';
  src: url('@/assets/OpenSans-Light.ttf') format('truetype');
}

.font-open-sans {
  font-family: 'Open Sans', sans-serif;
}
</style>
