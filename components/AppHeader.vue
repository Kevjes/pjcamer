<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300" :class="{ 'shadow-md': isScrolled }">
    <!-- Barre supérieure avec contacts -->
    <div class="bg-gradient-to-r from-green-600 to-green-700 text-white text-sm">
      <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <a href="tel:+237690000000" class="flex items-center hover:text-green-100 transition-colors">
            <DevicePhoneMobileIcon class="h-4 w-4 mr-1" />
            +237 6 90 00 00 00
          </a>
          <a href="mailto:contact@annuairecamer.com" class="hidden md:flex items-center hover:text-green-100 transition-colors">
            <EnvelopeIcon class="h-4 w-4 mr-1" />
            contact@annuairecamer.com
          </a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-green-100 transition-colors">
            <span class="hidden md:inline">Devenez partenaire</span>
            <span class="md:hidden">Partenariat</span>
          </a>
          <a href="#" class="hover:text-green-100 transition-colors">
            <span class="hidden md:inline">Ajouter mon entreprise</span>
            <span class="md:hidden">Ajouter</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation principale -->
    <div class="bg-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-gray-900">Annuaire<span class="text-green-600">Camer</span></span>
          </NuxtLink>

          <!-- Navigation desktop -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.href" 
              class="text-gray-700 hover:text-green-600 px-1 py-2 text-sm font-medium relative group"
              :class="{ 'text-green-600': $route.path === item.href }"
            >
              {{ item.name }}
              <span 
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"
                :class="{ 'w-full': $route.path === item.href }"
              ></span>
            </NuxtLink>
          </nav>

          <!-- Boutons de connexion/recherche -->
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-600 hover:text-green-600 focus:outline-none">
              <MagnifyingGlassIcon class="h-5 w-5" />
            </button>
            <div class="hidden md:flex items-center space-x-2">
              <NuxtLink to="/connexion" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                Connexion
              </NuxtLink>
              <NuxtLink to="/inscription" class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                Inscription
              </NuxtLink>
            </div>
            <!-- Menu mobile -->
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen" 
              class="md:hidden p-2 text-gray-600 hover:text-green-600 focus:outline-none"
              aria-label="Menu mobile"
            >
              <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
              <XMarkIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Menu mobile -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.href"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
              :class="{ 'bg-gray-100 text-green-600': $route.path === item.href }"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="pt-4 pb-2 border-t border-gray-200">
              <NuxtLink
                to="/connexion"
                class="block w-full text-center px-4 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Connexion
              </NuxtLink>
              <NuxtLink
                to="/inscription"
                class="mt-2 block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Inscription
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Catégories', href: '/categories' },
  { name: 'Villes', href: '/villes' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Vérifier l'état initial
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Fermer le menu mobile lors du redimensionnement de la fenêtre
const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});


// Fermer le menu mobile lors de la navigation
const route = useRoute();
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});
</script>

<style scoped>
.router-link-active {
  @apply text-green-600;
}

/* Animation de soulignement */
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #16a34a;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>
