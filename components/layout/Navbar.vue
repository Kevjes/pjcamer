<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-primary">
            PJ-Camer
          </NuxtLink>
        </div>

        <!-- Navigation principale (desktop) -->
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            :class="{ 'border-primary-500 text-gray-900': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Boutons de connexion/profil (desktop) -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button 
            type="button" 
            class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            @click="toggleTheme"
          >
            <span class="sr-only">Changer de thème</span>
            <Icon 
              :name="colorMode.preference === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" 
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
          
          <template v-if="!user">
            <NuxtLink 
              to="/connexion" 
              class="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Connexion
            </NuxtLink>
            <NuxtLink 
              to="/inscription" 
              class="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Inscription
            </NuxtLink>
          </template>
          
          <!-- Menu déroulant du profil utilisateur -->
          <div v-else class="ml-4 relative">
            <div>
              <button 
                @click="isProfileMenuOpen = !isProfileMenuOpen" 
                class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Ouvrir le menu utilisateur</span>
                <div class="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                  {{ userInitials }}
                </div>
              </button>
            </div>
            
            <!-- Menu déroulant -->
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div 
                v-show="isProfileMenuOpen" 
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-click-outside="() => isProfileMenuOpen = false"
              >
                <NuxtLink 
                  v-for="item in userNavigation" 
                  :key="item.name" 
                  :to="item.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  @click.native="isProfileMenuOpen = false"
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
          
          <!-- Bouton ajouter une entreprise -->
          <NuxtLink 
            to="/entreprises/ajouter" 
            class="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
          >
            <Icon name="heroicons:plus" class="-ml-1 mr-2 h-5 w-5" />
            Ajouter une entreprise
          </NuxtLink>
        </div>

        <!-- Bouton menu mobile -->
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Bouton pour ouvrir/fermer le menu mobile -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-expanded="false"
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <Icon 
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-show="isMobileMenuOpen" 
        class="sm:hidden"
      >
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            :class="$route.path === item.href 
              ? 'bg-primary-50 border-primary-500 text-primary-700' 
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'"
            @click.native="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          
          <template v-if="!user">
            <div class="pt-4 pb-3 border-t border-gray-200">
              <div class="mt-3 space-y-1">
                <NuxtLink
                  to="/connexion"
                  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  @click.native="isMobileMenuOpen = false"
                >
                  Connexion
                </NuxtLink>
                <NuxtLink
                  to="/inscription"
                  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  @click.native="isMobileMenuOpen = false"
                >
                  Inscription
                </NuxtLink>
              </div>
            </div>
          </template>
          
          <template v-else>
            <div class="pt-4 pb-3 border-t border-gray-200">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                    {{ userInitials }}
                  </div>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-800">{{ user?.name }}</div>
                  <div class="text-sm font-medium text-gray-500">{{ user?.email }}</div>
                </div>
              </div>
              <div class="mt-3 space-y-1">
                <NuxtLink
                  v-for="item in userNavigation"
                  :key="item.name"
                  :to="item.href"
                  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  @click.native="isMobileMenuOpen = false"
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
          </template>
          
          <div class="pt-4 pb-3 border-t border-gray-200">
            <NuxtLink 
              to="/entreprises/ajouter" 
              class="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              @click.native="isMobileMenuOpen = false"
            >
              <div class="flex items-center justify-center">
                <Icon name="heroicons:plus" class="-ml-1 mr-2 h-5 w-5" />
                Ajouter une entreprise
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const colorMode = useColorMode();
const user = ref(null); // À remplacer par le store d'authentification
const isProfileMenuOpen = ref(false);
const isMobileMenuOpen = ref(false);

// Navigation principale
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Catégories', href: '/categories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Navigation utilisateur
const userNavigation = [
  { name: 'Mon profil', href: '/profil' },
  { name: 'Mes favoris', href: '/favoris' },
  { name: 'Mes réservations', href: '/reservations' },
  { name: 'Mes avis', href: '/avis' },
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

// Basculer entre les thèmes clair/sombre
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// Déconnexion
const logout = () => {
  // Implémenter la déconnexion
  console.log('Déconnexion');
  isProfileMenuOpen.value = false;
  isMobileMenuOpen.value = false;
};

// Fermer le menu mobile lors du changement de route
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});
</script>

<style scoped>
.router-link-active {
  @apply border-primary-500 text-gray-900;
}

.dark .router-link-active {
  @apply text-white;
}
</style>
