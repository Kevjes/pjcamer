<template>
  <div class="space-y-6">
    <!-- Filtre par catégorie -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4 flex items-center">
        <Squares2X2Icon class="h-5 w-5 mr-2 text-red-600" />
        Catégories
      </h3>
      <div class="space-y-2">
        <label 
          v-for="category in categories" 
          :key="category.id"
          class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          <input 
            type="checkbox" 
            :checked="selectedCategories.includes(category.id)"
            @change="toggleCategory(category.id)"
            class="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
          >
          <span class="text-gray-700">{{ category.name }}</span>
          <span class="ml-auto text-sm text-gray-500">{{ category.count }}</span>
        </label>
      </div>
    </div>

    <!-- Filtre par note -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4 flex items-center">
        <StarIcon class="h-5 w-5 mr-2 text-yellow-500" />
        Note minimale
      </h3>
      <div class="space-y-2">
        <div class="flex items-center space-x-4">
          <div class="flex">
            <StarIcon 
              v-for="i in 5" 
              :key="i" 
              :class="[
                'h-5 w-5 cursor-pointer',
                i <= minRating ? 'text-yellow-400' : 'text-gray-300'
              ]"
              @click="updateRating(i)"
            />
          </div>
          <span class="text-sm text-gray-600">{{ minRating }}+</span>
        </div>
      </div>
    </div>

    <!-- Filtre par prix -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4 flex items-center">
        <BanknotesIcon class="h-5 w-5 mr-2 text-green-600" />
        Fourchette de prix
      </h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Prix moyen</label>
          <div class="grid grid-cols-4 gap-2">
            <button 
              v-for="price in priceRanges" 
              :key="price.value"
              @click="updatePriceRange(price.value)"
              :class="[
                'py-2 text-sm rounded-md transition-colors',
                selectedPriceRange === price.value 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ price.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bouton réinitialiser -->
    <button 
      @click="$emit('reset-filters')"
      class="w-full py-3 px-4 bg-red-100 text-red-700 font-medium rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
    >
      <ArrowPathIcon class="h-5 w-5" />
      Réinitialiser les filtres
    </button>
  </div>
</template>

<script setup>
import { Squares2X2Icon, StarIcon, BanknotesIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';

defineProps({
  categories: Array,
  selectedCategories: Array,
  minRating: Number,
  priceRanges: Array,
  selectedPriceRange: String
});

const emit = defineEmits([
  'update:selectedCategories', 
  'update:minRating', 
  'update:selectedPriceRange',
  'reset-filters'
]);

const toggleCategory = (categoryId) => {
  const updatedCategories = [...props.selectedCategories];
  const index = updatedCategories.indexOf(categoryId);
  
  if (index > -1) {
    updatedCategories.splice(index, 1);
  } else {
    updatedCategories.push(categoryId);
  }
  
  emit('update:selectedCategories', updatedCategories);
};

const updateRating = (rating) => {
  emit('update:minRating', rating);
};

const updatePriceRange = (range) => {
  emit('update:selectedPriceRange', range);
};
</script>
