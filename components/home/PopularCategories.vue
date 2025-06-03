<template>
  <div class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Explorez par catégorie
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Découvrez les entreprises par secteur d'activité
        </p>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        <div 
          v-for="category in categories" 
          :key="category.name"
          @click="selectCategory(category)"
          class="group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          <div class="rounded-lg bg-primary/5 p-3 w-14 h-14 flex items-center justify-center mx-auto">
            <component 
              :is="category.icon" 
              class="h-8 w-8 text-primary" 
              aria-hidden="true" 
            />
          </div>
          <h3 class="mt-4 text-sm font-medium text-gray-900 text-center">
            {{ category.name }}
          </h3>
          <p class="mt-1 text-sm text-gray-500 text-center">
            {{ category.count }} entreprises
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  HomeIcon, 
  BuildingStorefrontIcon, 
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  HeartIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  UserGroupIcon,
  BeakerIcon,
  ShoppingBagIcon,
  TruckIcon
} from '@heroicons/vue/24/outline';

const categories = ref([
  { name: 'Immobilier', icon: HomeIcon, count: 1243 },
  { name: 'Commerces', icon: BuildingStorefrontIcon, count: 876 },
  { name: 'Services', icon: WrenchScrewdriverIcon, count: 1532 },
  { name: 'Éducation', icon: AcademicCapIcon, count: 542 },
  { name: 'Santé', icon: HeartIcon, count: 789 },
  { name: 'Entreprises', icon: BuildingOffice2Icon, count: 2310 },
]);

const emit = defineEmits(['selectCategory']);

const selectCategory = (category) => {
  emit('selectCategory', category);
};
</script>
