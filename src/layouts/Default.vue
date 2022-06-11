<template>
  <h1 class="text-xl">Astronomy Picture of the Day</h1>
  <div v-if="!test" class="custom-skeleton w-1/2 mx-auto">
    <div class="flex mb-3">
      <p-skeleton shape="circle" size="4rem" class="mr-2"/>
      <div>
        <p-skeleton width="10rem" class="mb-2"/>
        <p-skeleton width="5rem" class="mb-2"/>
        <p-skeleton height=".5rem"/>
      </div>
    </div>
    <p-skeleton width="100%" height="150px"/>
    <div class="flex justify-content-center mt-3">
      <p-skeleton width="4rem" height="2rem"/>
      <p-skeleton width="4rem" height="2rem"/>
    </div>
  </div>
  <p-card v-else class="w-full md:w-1/2 mx-auto">
    <template #header>
      <img
        :src="test?.url"
      />
    </template>
    <template #title>Author {{ test?.copyright }}</template>
    <template #subtitle>
      {{ test?.title }}
    </template>
    <template #content>
      <p-fieldset class="px-4 py-3" legend="Show more" toggleable :collapsed="true">
        <p>
          {{ test?.explanation }}
        </p>
      </p-fieldset>
    </template>
  </p-card>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import nasaApi from '@/http/nasa'

let test = ref(null)

const api = 'planetary/apod?'

const fetchData = async () => {
  test.value = await nasaApi.fetchData(api)
}

onMounted(() => {
  fetchData()
})

// watch(() => test.value, () => {
//   console.log(test.value)
// }, { immediate: true })

</script>

<style lang="scss">

</style>
