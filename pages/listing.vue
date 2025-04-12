<script setup lang="ts">
// 📦 Pobieramy dane z API Nuxt (endpoint: /api/products)
const { data, pending, error } = await useFetch('/api/products')

// 🔁 Tworzymy reaktywną zmienną zawierającą tylko produkty1
const produkty1 = computed(() => data.value?.produkty1 || [])
</script>

<template>
  <!-- Tło ciemne i padding z Tailwinda -->
  <section class="bg-[#222222] py-6 px-4">
    <!-- Jeżeli dane się ładują -->
    <div v-if="pending" class="text-white text-center">Ładowanie danych...</div>

    <!-- Gdy dane są dostępne -->
    <div v-else class="flex flex-col gap-4 max-w-screen-md mx-auto">
      <!-- Iterujemy po produktach -->
      <NuxtLink
          v-for="(product, index) in produkty1"
          :key="index"
          :to="`/product/${product.id}`"
          class="block no-underline text-inherit"
      >
        <!-- Karta produktu -->
        <div class="flex items-center bg-[#2a2a2a] rounded-xl p-4 gap-4 shadow-sm hover:bg-[#333] transition">
          <!-- Zdjęcie produktu -->
          <img
              :src="product.image"
              alt=""
              class="w-24 h-24 object-cover rounded-md"
          />

          <!-- Opis produktu -->
          <div class="flex flex-col flex-1 text-white">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-sm text-gray-400">Dostawa: {{ product.delivery }}</p>
            <p class="text-base mt-1 font-bold">{{ product.price }} zł</p>
          </div>

          <!-- Serduszko + przycisk -->
          <div class="flex flex-col items-end gap-2">
            <!-- Ikona ulubione (tu emoji, można zamienić na SVG) -->
            <button class="text-white hover:text-red-400 text-xl">❤️</button>

            <!-- Przycisk dodaj do koszyka -->
            <button
                class="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 text-sm font-semibold hover:bg-orange-600 transition rounded-none"
            >
              <!-- Ikona koszyka -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 001 1.3h11.6a1 1 0 001-1.3L17 13M7 13h10M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* Tu możesz dodać dodatkowe style lub animacje */
</style>
