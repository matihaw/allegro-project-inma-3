<script setup lang="ts">
// 📥 Importujemy helper do odczytu parametru z URL
const route = useRoute()

// 🔢 Pobieramy ID z parametru np. /produkt/3
const id = computed(() => route.params.id)

// 📦 Pobieramy dane z API Nuxt – dynamicznie na podstawie ID
const { data: produkt, pending, error } = await useFetch(() => `/api/product/${id.value}`)
</script>

<template>
  <section class="bg-[#222222] text-white min-h-screen py-10 px-4">

    <!-- Loader -->
    <div v-if="pending" class="text-center">Ładowanie produktu...</div>

    <!-- Błąd -->
    <div v-else-if="error" class="text-center text-red-400">
      Nie znaleziono produktu.
    </div>

    <!-- Zawartość produktu -->
    <div v-else class="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8">

      <!-- Obrazek -->
      <div class="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
            :src="produkt.image"
            :alt="produkt.name"
            class="rounded-xl w-full max-w-xs object-cover shadow-md"
        />
      </div>

      <!-- Szczegóły -->
      <div class="flex flex-col gap-4 flex-1">
        <h1 class="text-2xl font-bold">{{ produkt.name }}</h1>
        <p class="text-lg font-semibold text-green-400">{{ produkt.price }} zł</p>
        <p class="text-sm text-gray-300">Dostawa: {{ produkt.delivery }}</p>

        <!-- Fejkowe informacje -->
        <ul class="text-sm text-gray-400 space-y-1">
          <li>✅ Produkt dostępny w magazynie</li>
          <li>🚚 Wysyłka w 24h</li>
          <li>⭐ 4.8/5 (122 opinie)</li>
          <li>🛡️ Gwarancja 24 miesiące</li>
        </ul>

        <!-- Przycisk Dodaj do koszyka -->
        <div class="pt-4">
          <button
              class="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition rounded-none"
          >
            <!-- Ikona koszyka -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4
                       M7 13l-1.3 5.2a1 1 0 001 1.3h11.6a1 1 0 001-1.3L17 13
                       M7 13h10
                       M10 21a1 1 0 100-2 1 1 0 000 2
                       M18 21a1 1 0 100-2 1 1 0 000 2" />
            </svg>
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
