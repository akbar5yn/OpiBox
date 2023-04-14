<template>
  <div>
    <button class="focus:outline-none" @click="openMenu = !openMenu">
      <image-galery-hamburger-open
        :class="{
          hidden: openMenu,
          block: !openMenu,
          'opacity-0': openMenu,
          'opacity-100': !openMenu
        }"
        class="fill-current transition duration-75 ease-in-out"
      />
      <image-galery-hamburger-close
        :class="{
          hidden: !openMenu,
          block: openMenu,
          'opacity-0': !openMenu,
          'opacity-100': openMenu
        }"
        class="fill-current transition duration-75 ease-in-out"
      />
    </button>
    <div
      :class="{
        hidden: !openMenu,
        block: openMenu,
        'opacity-0': !openMenu,
        'opacity-100': openMenu
      }"
      class="absolute left-0 transition duration-100 ease-in-out"
    >
      <ul>
        <li>
          <nuxt-link to="#">
            Beranda
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Layanan
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Program Loyaliti
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            Bantuan
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',

  data () {
    return {
      openMenu: false
    }
  }
}
</script>
