<template>
  <div class="relative bg-white overflow-hidden py-16 md:py-24">
    <!-- Bannière avec drapeau camerounais en dégradé -->
    <div class="absolute inset-0 bg-gradient-to-r from-green-600 via-red-600 to-yellow-400 opacity-40"></div>
    
    <!-- Éléments décoratifs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-20 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Trouvez l'entreprise idéale</h1>
        <p class="text-xl text-white/90 mb-8">Découvrez des milliers d'entreprises locales évaluées et recommandées</p>
        
        <div class="bg-white rounded-lg shadow-xl p-1 max-w-3xl mx-auto">
          <div class="flex flex-col md:flex-row gap-2">
            <!-- Champ de recherche -->
            <div class="relative flex-1">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                :value="searchQuery"
                @input="$emit('update:searchQuery', $event.target.value)"
                placeholder="Que recherchez-vous ?"
                class="block w-full pl-10 pr-3 py-4 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
              />
            </div>
            
            <!-- Sélection de localisation -->
            <div class="relative flex-1">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon class="h-5 w-5 text-gray-400" />
              </div>
              <select 
                :value="selectedLocation"
                @change="$emit('update:selectedLocation', $event.target.value)"
                class="block w-full pl-10 pr-3 py-4 border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg appearance-none"
              >
                <option value="">Partout au Cameroun</option>
                <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDownIcon class="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <!-- Bouton de recherche -->
            <button 
              @click="$emit('search')"
              class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MagnifyingGlassIcon class="h-5 w-5" />
              <span class="hidden sm:inline">Rechercher</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

defineProps({
  searchQuery: String,
  selectedLocation: String,
  locations: Array
});

defineEmits(['update:searchQuery', 'update:selectedLocation', 'search']);
</script>
