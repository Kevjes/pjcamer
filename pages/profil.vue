<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="isAuthenticated && currentUser" class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Mon Profil</h1>
      
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Prénom</p>
          <p class="text-lg text-gray-900">{{ currentUser.firstName }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Nom</p>
          <p class="text-lg text-gray-900">{{ currentUser.lastName }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Email</p>
          <p class="text-lg text-gray-900">{{ currentUser.email }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Rôle</p>
          <p class="text-lg text-gray-900 capitalize">{{ currentUser.role }}</p>
        </div>
        <div v-if="currentUser.phone">
          <p class="text-sm font-medium text-gray-500">Téléphone</p>
          <p class="text-lg text-gray-900">{{ currentUser.phone }}</p>
        </div>
        <div v-if="currentUser.companyName">
          <p class="text-sm font-medium text-gray-500">Nom de l'entreprise</p>
          <p class="text-lg text-gray-900">{{ currentUser.companyName }}</p>
        </div>
      </div>

      <div class="mt-8 border-t pt-6">
        <button 
          @click="handleLogout"
          class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
          Déconnexion
        </button>
      </div>

    </div>
    <div v-else class="text-center">
      <p class="text-xl text-gray-700">Veuillez vous connecter pour voir votre profil.</p>
      <NuxtLink to="/login" class="mt-4 inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
        Se connecter
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => authStore.isAuthenticated);
const currentUser = computed(() => authStore.currentUser);

const handleLogout = async () => {
  await authStore.logout();
  router.push('/');
};

// Middleware pour cette page spécifique, si le middleware global n'est pas suffisant
// ou pour ajouter une logique spécifique à cette page.
// definePageMeta({
//   middleware: ['auth'] // Assurez-vous que ce middleware existe ou utilisez le global
// });

// Si le middleware global gère déjà la redirection, ce qui suit peut ne pas être nécessaire
// ou peut servir de double vérification.
if (process.client && !authStore.isAuthenticated && authStore.token) {
  // Si un token existe mais l'utilisateur n'est pas chargé, essayez de le charger
  authStore.fetchUser().then(() => {
    if (!authStore.isAuthenticated) {
      router.push('/login?redirect=/profil');
    }
  });
} else if (process.client && !authStore.isAuthenticated) {
  router.push('/login?redirect=/profil');
}

</script>
