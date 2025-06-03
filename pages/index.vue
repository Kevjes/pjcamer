<template>
  <div>
    <HeroSection @search="handleSearch" />
    
    <PopularCategories @select-category="handleCategorySelect" />
    
    <FeaturedBusinesses />
    
    <Testimonials />
    
    <CallToAction />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Importer les composants
import HeroSection from '~/components/home/HeroSection.vue';
import PopularCategories from '~/components/home/PopularCategories.vue';
import FeaturedBusinesses from '~/components/home/FeaturedBusinesses.vue';
import Testimonials from '~/components/home/Testimonials.vue';
import CallToAction from '~/components/home/CallToAction.vue';

const router = useRouter();

const handleSearch = (query) => {
  // Rediriger vers la page de recherche avec le terme de recherche
  router.push({
    path: '/recherche',
    query: { q: query }
  });
};

const handleCategorySelect = (category) => {
  // Rediriger vers la page de la catégorie sélectionnée
  router.push({
    path: '/categorie',
    query: { id: category.name.toLowerCase() }
  });
};

// Définir le titre de la page
useHead({
  title: 'Accueil | Annuaire des entreprises du Cameroun',
  meta: [
    { name: 'description', content: 'Trouvez les meilleures entreprises locales au Cameroun. Services, avis et contacts en un clic !' }
  ]
});
</script>