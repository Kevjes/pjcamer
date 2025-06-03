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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Composants
import SearchHeader from '@/components/entreprise/SearchHeader.vue';
import FiltersSidebar from '@/components/entreprise/FiltersSidebar.vue';
import BusinessListHeader from '@/components/entreprise/BusinessListHeader.vue';
import BusinessList from '@/components/entreprise/BusinessList.vue';

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
</style>
