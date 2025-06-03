<template>
  <div class="relative bg-white overflow-hidden">
    <!-- Bannière avec drapeau camerounais en dégradé -->
    <div class="absolute inset-0 bg-gradient-to-r from-green-600 via-red-600 to-yellow-400 opacity-40"></div>
    
    <!-- Éléments décoratifs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-20 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="text-center">
        <!-- Logo et slogan -->
        <div class="inline-flex items-center justify-center mb-8">
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <span class="ml-4 text-3xl font-black text-gray-900">PJ-CAMER</span>
        </div>

        <!-- Titre principal -->
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">L'annuaire des entreprises</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-red-600 to-yellow-400">
            du Cameroun
          </span>
        </h1>
        
        <!-- Sous-titre -->
        <p class="mt-6 max-w-lg mx-auto text-xl text-gray-600 sm:max-w-3xl">
          Découvrez plus de 10 000 entreprises locales à travers les 10 régions du Cameroun. 
          Trouvez des professionnels de confiance près de chez vous.
        </p>

        <!-- Barre de recherche améliorée -->
        <div class="mt-12 max-w-2xl mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              class="block w-full pl-12 pr-4 py-4 border-0 rounded-full shadow-lg focus:ring -2 focus:ring-yellow-400 focus:ring-opacity-50 text-lg" 
              placeholder="Rechercher une entreprise, un service..."
              @input="handleSearchInput"
              @keyup.enter="performSearch"
              v-model="searchQuery"
            >
            <button 
              @click="performSearch"
              class="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-200 transform hover:scale-105"
            >
              Rechercher
              <svg class="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <!-- Suggestions de recherche -->
          <div v-if="showSuggestions && suggestions.length > 0" class="mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div v-for="(suggestion, index) in suggestions" :key="index" 
                 @click="selectSuggestion(suggestion)"
                 class="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center">
              <svg class="h-5 w-5 text-gray-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 1 1 0 001.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">{{ suggestion }}</span>
            </div>
          </div>
          
          <!-- Mots-clés populaires -->
          <div class="mt-4 flex flex-wrap justify-center gap-2">
            <span class="text-sm text-gray-500">Populaire :</span>
            <button 
              v-for="(tag, index) in popularTags" 
              :key="index"
              @click="searchTag(tag)"
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            >
              #{{ tag }}
            </button>
          </div>
        </div>

        <!-- Statistiques -->
        <div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="text-3xl font-bold text-gray-900">{{ stat.value }}</div>
            <div class="mt-1 text-sm font-medium text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');
const showSuggestions = ref(false);

// Données de démonstration
const popularTags = [
  'Restaurant', 
  'Hôtel', 
  'Médecin', 
  'École', 
  'Super marché', 
  'Coiffure'
];

const stats = [
  { value: '10 000+', label: 'Entreprises' },
  { value: '10', label: 'Régions' },
  { value: '50+', label: 'Catégories' },
  { value: '98%', label: 'Clients satisfaits' }
];

// Suggestions de recherche basées sur la saisie
const suggestions = computed(() => {
  if (!searchQuery.value) return [];
  const query = searchQuery.value.toLowerCase();
  return [
    `Entreprises à ${query}`,
    `${query} à Douala`,
    `${query} à Yaoundé`,
    `Meilleurs ${query} au Cameroun`
  ];
});

// Gestion de la recherche
const performSearch = () => {
  if (!searchQuery.value.trim()) return;
  router.push({
    path: '/recherche',
    query: { q: searchQuery.value }
  });
};

// Gestion de la sélection d'une suggestion
const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion;
  performSearch();
};

// Recherche par tag
const searchTag = (tag) => {
  searchQuery.value = tag;
  performSearch();
};

// Affichage des suggestions
const handleSearchInput = () => {
  showSuggestions.value = searchQuery.value.length > 1;
};

// Émission des événements
const emit = defineEmits(['search']);
</script>
