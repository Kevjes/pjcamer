import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
  // S'assurer que Pinia est initialisé avant d'utiliser le store
  // nuxtApp.$pinia est automatiquement disponible si @pinia/nuxt est configuré
  const authStore = useAuthStore(nuxtApp.$pinia);

  // Ce code s'exécute uniquement côté client
  if (process.client) {
    // Tenter de récupérer l'utilisateur si un token existe dans localStorage
    // et que l'utilisateur n'est pas déjà chargé dans le store
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      authStore.token = storedToken; // Mettre à jour le token dans le store
    }

    // Si un token est maintenant dans le store (soit initialisé, soit depuis localStorage)
    // et que l'utilisateur n'est pas encore chargé
    if (authStore.token && !authStore.user) {
      // console.log('Plugin: Token found, attempting to fetch user...');
      await authStore.fetchUser();
      // if (authStore.user) {
      //   console.log('Plugin: User fetched successfully on init.');
      // } else {
      //   console.log('Plugin: Failed to fetch user on init, token might be invalid.');
      // }
    }
  }
  
  // Optionnellement, vous pouvez injecter le store ou des parties de celui-ci dans l'application Nuxt
  // return {
  //   provide: {
  //     auth: authStore
  //   }
  // };
});
