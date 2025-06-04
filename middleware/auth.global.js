import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Routes publiques qui ne nécessitent pas d'authentification
  const publicRoutes = ['/login', '/register'];
  if (publicRoutes.includes(to.path)) {
    return; // Permettre l'accès
  }

  // Initialiser le store si ce n'est pas déjà fait (surtout pour le SSR ou la première navigation)
  const authStore = useAuthStore();
  if (!authStore.user && authStore.token) {
    await authStore.fetchUser();
  }

  // Si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
  if (!authStore.isAuthenticated && to.meta.requiresAuth) { // ou !authStore.isAuthenticated pour tout protéger par défaut sauf publicRoutes
    // Rediriger vers la page de connexion, en conservant la page de destination initiale
    return navigateTo(`/login?redirect=${to.fullPath}`);
  }

  // Si l'utilisateur est authentifié et tente d'accéder à login/register, rediriger vers l'accueil
  if (authStore.isAuthenticated && publicRoutes.includes(to.path)) {
    return navigateTo('/');
  }
});
