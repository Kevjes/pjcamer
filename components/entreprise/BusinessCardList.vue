<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex">
    <!-- Image -->
    <div class="w-1/4 relative">
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
    <div class="flex-1 p-6">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-1">{{ business.name }}</h3>
          <div class="flex items-center text-sm text-gray-600 mb-2">
            <MapPinIcon class="h-4 w-4 mr-1" />
            {{ business.location }}
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span 
              v-for="category in business.categories" 
              :key="category"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
            >
              {{ category }}
            </span>
          </div>
          <p class="text-gray-700 mb-4 line-clamp-2">{{ business.description }}</p>
        </div>
        
        <div class="flex flex-col items-end">
          <div class="text-sm text-gray-500 mb-2">{{ business.reviewCount }} avis</div>
          <button 
            class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Voir détails
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-4">
        <div class="text-sm text-gray-500">
          <span v-if="business.priceRange" class="flex items-center">
            <BanknotesIcon class="h-4 w-4 mr-1" />
            {{ business.priceRange }}
          </span>
        </div>
        <div class="flex space-x-1">
          <button class="text-gray-400 hover:text-red-600 p-1">
            <HeartIcon class="h-5 w-5" />
          </button>
          <button class="text-gray-400 hover:text-red-600 p-1">
            <ShareIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon, MapPinIcon, BanknotesIcon, HeartIcon, ShareIcon } from '@heroicons/vue/24/outline';

defineProps({
  business: {
    type: Object,
    required: true
  }
});
</script>
