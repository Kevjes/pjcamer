<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- En-tête -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span class="text-white font-bold text-xl">PJ</span>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Camer
              </span>
            </NuxtLink>
          </div>

          <!-- Navigation principale -->
          <nav class="hidden md:ml-10 md:flex md:space-x-8">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name" 
              :to="item.href"
              class="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              :class="currentRoute === item.href 
                ? 'bg-primary/10 text-primary' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <!-- Boutons d'action -->
          <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center space-x-4">
            <button 
              class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click="toggleColorMode"
            >
              <span class="sr-only">Changer de thème</span>
              <Icon 
                :name="colorMode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" 
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>
            
            <NuxtLink 
              v-if="!user"
              to="/auth/login" 
              class="btn btn-outline"
            >
              Connexion
            </NuxtLink>
            
            <NuxtLink 
              v-if="!user"
              to="/auth/register" 
              class="btn"
            >
              Inscription
            </NuxtLink>
            
            <div v-else class="relative ml-3" v-click-outside="closeProfileMenu">
              <div>
                <button 
                  @click="isProfileMenuOpen = !isProfileMenuOpen" 
                  class="flex items-center max-w-xs rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Ouvrir le menu utilisateur</span>
                  <div class="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                    {{ userInitials }}
                  </div>
                </button>
              </div>
              
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div 
                  v-if="isProfileMenuOpen" 
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <NuxtLink 
                    v-for="item in userNavigation" 
                    :key="item.name" 
                    :to="item.href"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    @click="isProfileMenuOpen = false"
                  >
                    {{ item.name }}
                  </NuxtLink>
                  <button
                    @click="logout"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Déconnexion
                  </button>
                </div>
              </transition>
            </div>
          </div>

          <!-- Bouton menu mobile -->
          <div class="-mr-2 flex items-center md:hidden">
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span class="sr-only">Ouvrir le menu principal</span>
              <Icon 
                :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Menu mobile -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="md:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="block py-2 pl-3 pr-4 text-base font-medium border-l-4"
              :class="[currentRoute === item.href 
                ? 'bg-primary-50 border-primary-500 text-primary-700' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800']"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
          
          <div v-if="!user" class="pt-4 pb-3 border-t border-gray-200">
            <div class="mt-3 space-y-1 px-2">
              <NuxtLink
                to="/auth/login"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                @click="isMobileMenuOpen = false"
              >
                Connexion
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                @click="isMobileMenuOpen = false"
              >
                Inscription
              </NuxtLink>
            </div>
          </div>
          
          <div v-else class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <div class="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                  {{ userInitials }}
                </div>
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
            </div>
            <div class="mt-3 space-y-1">
              <NuxtLink
                v-for="item in userNavigation"
                :key="item.name"
                :to="item.href"
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
              <button
                @click="logout"
                class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- Contenu principal -->
    <main class="flex-grow">
      <NuxtPage />
    </main>
    
    <!-- Pied de page -->
    <AppFooter />
    
    <!-- Bouton retour en haut -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-200"
      aria-label="Retour en haut"
    >
      <Icon name="heroicons:arrow-up" class="h-5 w-5" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import AppFooter from '~/components/AppFooter.vue';

const route = useRoute();
const colorMode = useColorMode();
const user = ref(null); // À remplacer par le store d'authentification
const isProfileMenuOpen = ref(false);
const isMobileMenuOpen = ref(false);
const showBackToTop = ref(false);

// Navigation
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Catégories', href: '/categories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const userNavigation = [
  { name: 'Mon profil', href: '/profil' },
  { name: 'Mes favoris', href: '/favoris' },
  { name: 'Mes réservations', href: '/reservations' },
  { name: 'Paramètres', href: '/parametres' },
];

// Initiales de l'utilisateur
const userInitials = computed(() => {
  if (!user.value) return '';
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
});

// Route actuelle
const currentRoute = computed(() => route.path);

// Basculer entre les modes clair/sombre
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// Fermer le menu profil
const closeProfileMenu = () => {
  isProfileMenuOpen.value = false;
};

// Déconnexion
const logout = () => {
  // Implémenter la déconnexion
  console.log('Déconnexion');
  isProfileMenuOpen.value = false;
  isMobileMenuOpen.value = false;
};

// Gestion du bouton retour en haut
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Écouteurs d'événements
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* .router-link-active {
  @apply border-primary-500 text-gray-900;
}

.dark .router-link-active {
  @apply text-white;
} */

/* Styles pour les transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
