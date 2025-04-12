<template>
  <!-- Główna belka nagłówka -->
  <header class="bg-[#1b1b1b] text-white text-sm w-full">
    <!-- Górna sekcja: logo + search + przyciski -->
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4 py-3">

      <!-- Logo -->
      <NuxtLink to="/">
        <div class="font-bold text-orange-500 text-xl">
          allegro
        </div>
      </NuxtLink>


      <!-- Pasek wyszukiwania -->
      <div class="flex flex-col sm:flex-row flex-grow w-full lg:max-w-3xl gap-2">
        <!-- Input + ikony -->
        <div class="flex items-center bg-[#2b2b2b] border border-[#3a3a3a] rounded-md sm:rounded-l-md w-full px-2">
          <input
              type="text"
              placeholder="czego szukasz?"
              class="bg-transparent flex-grow py-2 px-2 placeholder-gray-400 text-white focus:outline-none"
          />
        </div>

        <!-- Select kategorii -->
        <select
            class="bg-[#2b2b2b] text-white border border-[#3a3a3a] px-2 py-2 text-sm focus:outline-none sm:rounded-none"
        >
          <option>Wszystkie kategorie</option>
        </select>

        <!-- Przycisk SZUKAJ -->
        <button
            class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-semibold text-sm"
        >
          SZUKAJ
        </button>
      </div>

      <!-- Moje Allegro jako przycisk -->
      <div class="w-full lg:w-auto">
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-semibold w-full lg:w-auto">
          Moje Allegro
        </button>
      </div>
    </div>

    <!-- Dolny pasek linków -->
    <div class="bg-[#1b1b1b] border-t border-[#2c2c2c]">
      <div class="max-w-7xl mx-auto px-4 py-2 flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm text-white gap-2">

        <!-- Lewa część -->
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/listing" class="hover:underline">Kategorie</NuxtLink>
          <a href="#" class="hover:underline">Strefa Okazji</a>
          <a href="#" class="hover:underline">Allegro Protect</a>
          <a href="#" class="hover:underline">Gwarancja najniższej ceny</a>
          <a href="#" class="hover:underline">Sprzedawaj na Allegro</a>
        </div>

        <!-- Prawa część -->
        <div class="text-orange-400 font-semibold whitespace-nowrap">
          bądź SMART
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>