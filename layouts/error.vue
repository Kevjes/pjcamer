<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col items-center justify-center px-4">
    <div class="max-w-lg w-full text-center">
      <!-- Illustration -->
      <div class="mb-8 mx-auto">
        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto flex items-center justify-center">
          <span class="text-gray-500">{{ error.statusCode === 404 ? '404' : 'Erreur' }}</span>
        </div>
      </div>
      
      <h1 class="text-6xl md:text-9xl font-bold text-yellow-500 mb-4">
        {{ error.statusCode || 'Erreur' }}
      </h1>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {{ error.statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}
      </h2>
      
      <p class="text-gray-600 mb-8 max-w-md mx-auto">
        {{ error.statusCode === 404 
          ? 'Oups ! Il semble que la page que vous cherchez n\'existe pas ou a été déplacée.'
          : error.message || 'Une erreur inattendue s\'est produite.'
        }}
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink 
          to="/" 
          class="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition shadow-md hover:shadow-lg"
        >
          Retour à l'accueil
        </NuxtLink>
        
        <button 
          @click="goBack"
          class="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Retour en arrière
        </button>
      </div>
      
      <!-- Barre de recherche -->
      <div class="mt-12 max-w-md mx-auto">
        <p class="text-gray-600 mb-4">Rechercher sur le site</p>
        <div class="relative">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
          >
          <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute right-4 top-3.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const router = useRouter();
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

const goBack = () => {
  // Si l'utilisateur est arrivé directement sur cette page d'erreur, on le redirige vers l'accueil
  if (window.history.length <= 1) {
    router.push('/');
  } else {
    router.go(-1);
  }
};

// Optionnel : logger l'erreur pour le débogage
onMounted(() => {
  console.error('Error page:', props.error);
});
</script>
