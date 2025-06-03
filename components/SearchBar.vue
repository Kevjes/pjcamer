<template>
  <div class="relative max-w-3xl mx-auto w-full">
    <div class="relative">
      <input
        type="text"
        :placeholder="placeholder"
        class="w-full px-6 py-4 pr-14 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-md hover:shadow-lg transition-shadow duration-200"
        v-model="searchQuery"
        @keyup.enter="performSearch"
      />
      <button
        @click="performSearch"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <!-- Suggestions de recherche -->
    <div v-if="suggestions.length > 0" class="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
      <div v-for="suggestion in suggestions" :key="suggestion" 
           class="px-4 py-2 hover:bg-gray-50 cursor-pointer"
           @click="selectSuggestion(suggestion)">
        {{ suggestion }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Rechercher une entreprise, un service...'
  },
  initialQuery: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['search']);

const searchQuery = ref(props.initialQuery);
const suggestions = ref([
  'Restaurants à Douala',
  'Hôtels à Yaoundé',
  'Médecins à Bafoussam',
  'Super Marchés',
  'Garages automobiles'
]);

const performSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.trim());
  }
};

const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion;
  performSearch();
};
</script>
