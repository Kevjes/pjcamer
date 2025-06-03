<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Barre de recherche -->
    <SearchHeader 
      :search-query="searchQuery"
      :selected-location="selectedLocation"
      :locations="locations"
      @update:search-query="updateSearchQuery"
      @update:selected-location="updateSelectedLocation"
      @search="performSearch"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filtres latéraux -->
        <div class="lg:w-1/4">
          <FiltersSidebar 
            :categories="categories"
            :selected-categories="selectedCategories"
            :min-rating="minRating"
            :price-ranges="priceRanges"
            :selected-price-range="selectedPriceRange"
            @update:selected-categories="updateSelectedCategories"
            @update:min-rating="updateMinRating"
            @update:selected-price-range="updateSelectedPriceRange"
            @reset-filters="resetFilters"
          />
          <FacetFilters ref="facetFilters" class="mt-6" />
        </div>

        <!-- Contenu principal -->
        <div class="lg:w-3/4">
          <!-- En-tête de liste -->
          <BusinessListHeader 
            :total-businesses="filteredBusinesses.length"
            :sort-by="sortBy"
            :current-view="currentView"
            @update:sort-by="updateSortBy"
            @view-change="changeView"
          />

          <!-- Liste des entreprises -->
          <BusinessList 
            :businesses="paginatedBusinesses"
            :view-mode="currentView"
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-change="changePage"
          />
        </div>
      </div>

      <!-- Section carte interactive -->
      <div class="mt-12 relative">
        <!-- Nouveaux effets de fond -->
        <div class="absolute inset-0 overflow-hidden -z-10">
          <div class="absolute inset-0 bg-yellow-500"></div>
          <div 
            class="absolute top-0 left-0 right-0 bottom-0"
            style="background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
                   background-size: 40px 40px;"
          ></div>
          <div class="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div class="absolute top-3/4 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div class="container mx-auto px-4 py-12 relative">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Carte des entreprises</h2>
          <InteractiveMap :businesses="filteredBusinesses" />
        </div>
      </div>
      
      <!-- Section de partage des résultats -->
      <ShareResults class="mt-10" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Composants
import SearchHeader from '@/components/entreprise/SearchHeader.vue';
import FiltersSidebar from '@/components/entreprise/FiltersSidebar.vue';
import BusinessListHeader from '@/components/entreprise/BusinessListHeader.vue';
import BusinessList from '@/components/entreprise/BusinessList.vue';
import InteractiveMap from '@/components/entreprise/InteractiveMap.vue';
import FacetFilters from '@/components/entreprise/FacetFilters.vue';
import ShareResults from '@/components/entreprise/ShareResults.vue';

// Données simulées
const locations = ref(['Douala', 'Yaoundé', 'Bafoussam', 'Garoua', 'Bamenda']);
const categories = ref([
  { id: 1, name: 'Restaurants', count: 245 },
  { id: 2, name: 'Hôtels', count: 187 },
  { id: 3, name: 'Boutiques', count: 342 },
  { id: 4, name: 'Services', count: 156 },
  { id: 5, name: 'Automobile', count: 89 },
]);

const priceRanges = ref([
  { value: 'all', label: 'Tous' },
  { value: 'low', label: '€' },
  { value: 'medium', label: '€€' },
  { value: 'high', label: '€€€' },
]);

const businessesData = ref([
  {
    id: 1,
    name: "Hôtel La Falaise",
    location: "Douala, Bonanjo",
    categories: ["Hôtels", "Restaurants"],
    description: "Hôtel de luxe avec piscine et spa, situé au cœur du quartier des affaires.",
    rating: 4.7,
    reviewCount: 128,
    priceRange: "€€€",
    image: "/images/hotel.jpg"
  },
  // Ajouter plus d'entreprises ici
]);

// États réactifs
const searchQuery = ref('');
const selectedLocation = ref('');
const selectedCategories = ref([]);
const minRating = ref(0);
const selectedPriceRange = ref('all');
const sortBy = ref('relevance');
const currentView = ref('grid');
const currentPage = ref(1);
const itemsPerPage = 12;

// Sauvegarde des filtres dans localStorage
const saveFilters = () => {
  const filterState = {
    searchQuery: searchQuery.value,
    selectedCategories: selectedCategories.value,
    selectedLocation: selectedLocation.value,
    minRating: minRating.value,
    selectedPriceRange: selectedPriceRange.value
  };
  localStorage.setItem('businessFilters', JSON.stringify(filterState));
};

// Chargement des filtres au montage
onMounted(() => {
  const savedFilters = localStorage.getItem('businessFilters');
  if (savedFilters) {
    const parsedFilters = JSON.parse(savedFilters);
    searchQuery.value = parsedFilters.searchQuery;
    selectedCategories.value = parsedFilters.selectedCategories;
    selectedLocation.value = parsedFilters.selectedLocation;
    minRating.value = parsedFilters.minRating;
    selectedPriceRange.value = parsedFilters.selectedPriceRange;
  }
});

// Mettre à jour les sauvegardes quand les filtres changent
watch([searchQuery, selectedCategories, selectedLocation, minRating, selectedPriceRange], () => {
  saveFilters();
});

// Filtrage et pagination
const filteredBusinesses = computed(() => {
  let result = [...businessesData.value];

  // Filtrage par texte
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(b => 
      b.name.toLowerCase().includes(query) || 
      b.description.toLowerCase().includes(query) ||
      b.categories.some(cat => cat.toLowerCase().includes(query))
    );
  }

  // Filtrage par catégories
  if (selectedCategories.value.length > 0) {
    result = result.filter(b => 
      b.categories.some(cat => 
        selectedCategories.value.includes(categories.value.find(c => c.name === cat)?.id)
      )
    );
  }

  // Filtrage par note
  if (minRating.value > 0) {
    result = result.filter(b => b.rating >= minRating.value);
  }

  // Filtrage par prix
  if (selectedPriceRange.value !== 'all') {
    result = result.filter(b => b.priceRange === selectedPriceRange.value);
  }

  // Tri
  if (sortBy.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy.value === 'reviews') {
    result.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (sortBy.value === 'name_asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === 'name_desc') {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
});

const totalPages = computed(() => {
  return Math.ceil(filteredBusinesses.value.length / itemsPerPage);
});

const paginatedBusinesses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredBusinesses.value.slice(start, end);
});

// Méthodes
const updateSearchQuery = (value) => {
  searchQuery.value = value;
  currentPage.value = 1;
};

const updateSelectedLocation = (value) => {
  selectedLocation.value = value;
  currentPage.value = 1;
};

const updateSelectedCategories = (value) => {
  selectedCategories.value = value;
  currentPage.value = 1;
};

const updateMinRating = (value) => {
  minRating.value = value;
  currentPage.value = 1;
};

const updateSelectedPriceRange = (value) => {
  selectedPriceRange.value = value;
  currentPage.value = 1;
};

const updateSortBy = (value) => {
  sortBy.value = value;
};

const changeView = (view) => {
  currentView.value = view;
};

const changePage = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resetFilters = () => {
  selectedCategories.value = [];
  minRating.value = 0;
  selectedPriceRange.value = 'all';
  currentPage.value = 1;
};

const performSearch = () => {
  currentPage.value = 1;
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-blob {
  animation: blob 10s infinite;
}

@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, 20px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>
