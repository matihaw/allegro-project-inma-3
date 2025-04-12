<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/products')

// Tworzymy reaktywne zmienne za pomocą `computed`, które będą przechowywać fragmenty danych
const categories = computed(() => data.value?.categories || [])
const produkty1 = computed(() => data.value?.produkty1 || [])
const produkty2 = computed(() => data.value?.produkty2 || [])
const produkty3 = computed(() => data.value?.produkty3 || [])
const produkty4 = computed(() => data.value?.produkty4 || [])
const inspiracje = computed(() => data.value?.inspiracje || [])
</script>

<template>
      <BasicSlider/>
      <!-- Pasek kategorii -->
      <CategoryScroller :categories="categories" />

      <!-- Sekcja 1 Banner -->
      <HomeSection title="Jak niskie ceny, to czas na wiosenne zakupy" :products="produkty1" />

      <!-- Sekcja 2 -->
      <HomeSection title="Na czasie" :products="produkty2" />
      <!-- Sekcja z inspiracjami -->
      <InspirationBanner :items="inspiracje" />
      <HomeSection title="Gwarancja najniższej ceny w Domu i ogrodzie" :products="produkty3" />
      <HomeSection title="Kupuj z szybką dostawą" :products="produkty4" />
</template>

<style scoped>

</style>