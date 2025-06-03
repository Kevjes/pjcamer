<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <!-- Image -->
    <div class="relative h-48">
      <img 
        :src="business.image" 
        :alt="business.name" 
        class="w-full h-full object-cover"
      >
      <div class="absolute top-3 left-3 bg-white rounded-full py-1 px-2 flex items-center text-sm font-medium">
        <StarIcon class="h-4 w-4 text-yellow-400 mr-1" />
        {{ business.rating }}
      </div>
    </div>
    
    <!-- Contenu -->
    <div class="p-5 flex-1 flex flex-col">
      <div class="mb-3">
        <h3 class="text-lg font-bold text-gray-900 mb-1">{{ business.name }}</h3>
        <div class="flex items-center text-sm text-gray-600 mb-2">
          <MapPinIcon class="h-4 w-4 mr-1" />
          {{ business.location }}
        </div>
      </div>
      
      <div class="mt-auto">
        <div class="flex flex-wrap gap-1 mb-3">
          <span 
            v-for="category in business.categories" 
            :key="category"
            class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
          >
            {{ category }}
          </span>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500 flex items-center">
            <span v-if="business.priceRange" class="flex items-center mr-2">
              <BanknotesIcon class="h-4 w-4 mr-1" />
              {{ business.priceRange }}
            </span>
            <span>{{ business.reviewCount }} avis</span>
          </div>
          
          <button 
            class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            Voir détails
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon, MapPinIcon, BanknotesIcon } from '@heroicons/vue/24/outline';

defineProps({
  business: {
    type: Object,
    required: true
  }
});
</script>
