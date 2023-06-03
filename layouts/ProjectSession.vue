<template>
  <div>
    <Nuxt />
    <DisconnectInternet v-show="$nuxt.isOffline" />
  </div>
</template>

<script>
export default {
  name: 'ProjectSession'
}
</script>
