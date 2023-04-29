<template>
  <div class="flex">
    <div class="order-2 flex flex-col w-full">
      <!-- topbar -->
      <dashboard-top-bar />

      <!-- main content -->
      <h1 id="#dash" class="flex justify-center items-center h-full">
        Main Content
      </h1>
    </div>

    <!-- sidebar -->
    <dashboard-side-bar class="order-1" />
  </div>
</template>

<script>
export default {
  name: 'DashBoard'
}
</script>
