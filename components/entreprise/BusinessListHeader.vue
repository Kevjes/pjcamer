<template>
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    <div>
      <h2 class="text-2xl font-bold text-gray-900">{{ totalBusinesses }} entreprises trouvées</h2>
      <p class="text-gray-600">Affichage des entreprises correspondant à vos critères</p>
    </div>
    
    <div class="flex items-center gap-4">
      <!-- Sélecteur de tri -->
      <div class="relative">
        <select 
          :value="sortBy"
          @change="$emit('update:sortBy', $event.target.value)"
          class="pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm appearance-none bg-white"
        >
          <option value="relevance">Pertinence</option>
          <option value="rating">Meilleures notes</option>
          <option value="reviews">Plus d'avis</option>
          <option value="name_asc">Nom (A-Z)</option>
          <option value="name_desc">Nom (Z-A)</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon class="h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <!-- Boutons de vue -->
      <div class="flex border border-gray-300 rounded-md overflow-hidden">
        <button 
          @click="$emit('view-change', 'list')"
          :class="[
            'p-2 transition-colors',
            currentView === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'
          ]"
          aria-label="Vue liste"
        >
          <Bars3Icon class="h-5 w-5" />
        </button>
        <button 
          @click="$emit('view-change', 'grid')"
          :class="[
            'p-2 transition-colors',
            currentView === 'grid' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'
          ]"
          aria-label="Vue grille"
        >
          <Squares2X2Icon class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bars3Icon, Squares2X2Icon, ChevronDownIcon } from '@heroicons/vue/24/outline';

defineProps({
  totalBusinesses: Number,
  sortBy: String,
  currentView: String
});

defineEmits(['update:sortBy', 'view-change']);
</script>
