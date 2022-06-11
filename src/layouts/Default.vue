<template>
  <h1 class="maz-text-2xl maz-text-primary">
    Lets GO!
  </h1>
  <h2 class="text-2xl text-red-500">Test tailwindcss</h2>
  <div class="flex space-x-3">
    <p-button label="Primary" />
    <p-button label="Secondary" class="p-button-secondary" />
    <p-button label="Success" class="p-button-success" />
    <p-button label="Info" class="p-button-info" />
    <p-button label="Warning" class="p-button-warning" />
    <p-button label="Help" class="p-button-help" />
    <p-button label="Danger" class="p-button-danger" />
  </div>
  <div class="mt-3 flex space-x-3">
    <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
    <p-button icon="pi pi-search" class="p-button-rounded p-button-success" />
    <p-button icon="pi pi-user" class="p-button-rounded p-button-info" />
    <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
    <p-button icon="pi pi-heart" class="p-button-rounded p-button-help" />
    <p-button icon="pi pi-times" class="p-button-rounded p-button-danger" />
    <p-button icon="pi pi-check" class="p-button-rounded" />
  </div>
</template>

<script setup>

</script>

<style lang="scss">

</style>
