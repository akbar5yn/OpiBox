<template>
  <div class="flex flex-col space-y-6">
    <h1 class="text-2xl font-semibold">
      Ubah Profile
    </h1>
    <p class="text-[#8B8B8B]">
      Kata sandi minimal harus enam karakter dan berisi kombinasi angka, huruf,
      dan karakter khusus (!$@%)
    </p>
    <form class="flex flex-col space-y-4">
      <div class="flex flex-col space-y-2">
        <label for="old-password">Kata sandi saat ini</label>
        <input
          id="old-password"
          class="p-2 border border-gray-400 rounded-lg"
          type="password"
          placeholder="Masukkan kata sandi lama"
        >
      </div>
      <div class="flex flex-col space-y-2">
        <label for="new-password">Kata sandi baru</label>
        <input
          id="new-password"
          class="p-2 border border-gray-400 rounded-lg"
          type="password"
          placeholder="Masukkan kata sandi baru"
        >
      </div>
      <div class="flex flex-col space-y-2">
        <label for="confirm-new-password">Ulangi kata sandi baru</label>
        <input
          id="confirm-new-password"
          class="p-2 border border-gray-400 rounded-lg"
          type="password"
          placeholder="Ulangi kata sandi baru"
        >
      </div>
      <button
        class="text-white p-3 w-full max-w-[200px] rounded-lg text-[18px] ml-auto"
        :disabled="disabled"
        :class="{ 'bg-[#6C61E1]': !disabled, 'bg-gray-200': disabled }"
      >
        Simpan Perubahan
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'UpdatePassword',
  data () {
    return {
      disabled: true,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      errors: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      }
    }
  }
}
</script>
