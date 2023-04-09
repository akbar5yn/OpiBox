<template>
  <div class="w-[500px]">
    <h1 class="text-[40px] font-normal">
      Daftar
    </h1>
    <p class="text-[14px] font-normal tracking-wider">
      Lengkapi data di bawah ini untuk mendaftarkan akun
    </p>
    <form action="" class="flex flex-col gap-y-3 mt-4">
      <label for="">Nama</label>
      <input
        id="nama"
        class="border rounded-lg px-2 py-3 text-[14px]"
        type="text"
        name="nama"
        placeholder="Masukan nama"
      >

      <label for="">Email</label>
      <input
        id="email"
        class="border rounded-lg px-2 py-3 text-[14px]"
        type="text"
        name="email"
        placeholder="Masukan email"
      >

      <label for="">Kata sandi</label>
      <input
        id="password"
        class="border rounded-lg px-2 py-3 text-[14px]"
        type="password"
        name="password"
        placeholder="Masukan kata sandi"
      >

      <label for="">Konfirmasi kata sandi</label>
      <input
        id="password"
        class="border rounded-lg px-2 py-3 text-[14px]"
        type="password"
        name="password"
        placeholder="Masukan kata sandi"
      >

      <div class="flex justify-end underline">
        <nuxt-link to="" class="mt-2">
          Lupa kata sandi ?
        </nuxt-link>
      </div>
      <div class="mt-3">
        <button
          class="text-white bg-[#4A4A4F] p-3 w-full rounded-lg text-[18px]"
        >
          Masuk
        </button>
        <p class="text-center mt-3">
          <span class="text-[#8B8B8B]"> Sudah memiliki akun? </span>
          <nuxt-link to="/login">
            Masuk
          </nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  layout: 'AuthView'
}
</script>
