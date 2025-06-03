<template>
  <div>
    <!-- Affichage des entreprises -->
    <div v-if="businesses.length > 0">
      <!-- Vue en liste -->
      <div v-if="viewMode === 'list'" class="space-y-6">
        <BusinessCardList 
          v-for="business in businesses" 
          :key="business.id"
          :business="business" 
          class="animate-fade-in"
        />
      </div>
      
      <!-- Vue en grille -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BusinessCardGrid 
          v-for="business in businesses" 
          :key="'grid-' + business.id"
          :business="business" 
          class="animate-fade-in"
        />
      </div>
      
      <!-- Pagination -->
      <div class="mt-8 flex justify-center">
        <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button 
            @click="$emit('page-change', currentPage - 1)"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="$emit('page-change', page)"
            :class="[
              'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
              currentPage === page 
                ? 'bg-red-100 border-red-500 text-red-600 z-10' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ page }}
          </button>
          
          <button 
            @click="$emit('page-change', currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Aucun résultat -->
    <div v-else class="text-center py-12">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
        <ExclamationTriangleIcon class="h-6 w-6 text-red-600" />
      </div>
      <h3 class="mt-2 text-lg font-medium text-gray-900">Aucun résultat</h3>
      <p class="mt-1 text-sm text-gray-500">Essayez de modifier vos critères de recherche</p>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';
import BusinessCardList from '@/components/entreprise/BusinessCardList.vue';
import BusinessCardGrid from '@/components/entreprise/BusinessCardGrid.vue';

defineProps({
  businesses: Array,
  viewMode: String,
  currentPage: Number,
  totalPages: Number
});

defineEmits(['page-change']);
</script>
