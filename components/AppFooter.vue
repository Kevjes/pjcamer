<template>
  <!-- Section CTA -->
  <div class="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]" />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à développer votre entreprise ?</h2>
      <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Rejoignez des milliers d'entreprises qui font confiance à AnnuaireCamer pour accroître leur visibilité en ligne.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/inscription" class="px-8 py-4 bg-white text-red-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Inscrire mon entreprise
        </NuxtLink>
        <NuxtLink to="/contact" class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Nous contacter
        </NuxtLink>
      </div>
    </div>
  </div>

  <footer class="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 pb-12 relative overflow-hidden">
    <!-- Éléments décoratifs -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute -right-20 -bottom-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
      <div class="absolute top-1/4 right-1/4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-3000"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Newsletter -->
      <div class="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 mb-16 shadow-2xl transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full"></div>
        <div class="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Restez informé</h2>
          <p class="text-green-100 text-lg mb-6">Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres exclusives.</p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              class="flex-grow px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 text-gray-900"
            >
            <button class="bg-white text-red-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Logo et description -->
        <div class="lg:col-span-2">
          <div class="flex items-center">
            <div class="bg-white p-2 rounded-lg mr-3 shadow-md">
              <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 9L12 16L21 9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 13L12 18L21 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-500">Annuaire<span class="font-extrabold">Camer</span></span>
          </div>
          <p class="mt-6 text-gray-300 text-sm leading-relaxed">
            La plateforme de référence pour trouver les meilleures entreprises au Cameroun. 
            Nous connectons les entreprises aux clients depuis 2023 avec une approche moderne et innovante.
          </p>
          <div class="mt-6 flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name" 
              :href="social.href" 
              :aria-label="social.name"
              class="bg-gray-800 hover:bg-red-600 p-2 rounded-full text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-base font-semibold text-white mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Liens rapides
          </h3>
          <ul role="list" class="space-y-3">
            <li v-for="(item, index) in quickLinks" :key="index" class="group">
              <a 
                :href="item.href" 
                class="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center group-hover:translate-x-1 group-hover:text-green-400"
              >
                <svg class="w-4 h-4 mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Catégories -->
        <div>
          <h3 class="text-base font-semibold text-white mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Catégories
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <a 
              v-for="(category, index) in categories" 
              :key="index" 
              :href="`/categories/${category.slug}`" 
              class="text-sm text-gray-400 hover:text-white px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 flex items-center"
            >
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
              {{ category.name }}
            </a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-base font-semibold text-white mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Contactez-nous
          </h3>
          <ul role="list" class="space-y-4">
            <li class="flex items-start group">
              <div class="bg-red-100 p-2 rounded-lg text-red-600 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                <MapPinIcon class="h-5 w-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">Adresse</h4>
                <p class="text-sm text-gray-400">Yaoundé, Cameroun</p>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-yellow-100 p-2 rounded-lg text-yellow-700 mr-3 group-hover:bg-yellow-200 transition-colors shadow-sm">
                <PhoneIcon class="h-5 w-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">Téléphone</h4>
                <p class="text-sm text-gray-400">+237 6XX XXX XXX</p>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-red-100 p-2 rounded-lg text-red-600 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                <EnvelopeIcon class="h-5 w-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">Email</h4>
                <p class="text-sm text-gray-400">contact@annuairecamer.cm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright et mentions légales -->
      <div class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-500 text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} AnnuaireCamer. Tous droits réservés.
        </p>
        <div class="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
          <a 
            v-for="(item, index) in legalLinks" 
            :key="index" 
            :href="item.href" 
            class="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="mt-4 md:mt-0 flex items-center">
          <span class="text-xs text-gray-600 mr-2">Paiements sécurisés</span>
          <div class="flex space-x-2">
            <CreditCardIcon class="h-5 w-8 text-gray-500" />
            <BanknotesIcon class="h-5 w-8 text-gray-500" />
            <DevicePhoneMobileIcon class="h-5 w-8 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Catégories', href: '/categories' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

const categories = [
  { name: 'Hôtels & Restaurants', slug: 'hotels-restaurants' },
  { name: 'Santé & Beauté', slug: 'sante-beaute' },
  { name: 'Éducation', slug: 'education' },
  { name: 'Immobilier', slug: 'immobilier' },
  { name: 'Services', slug: 'services' },
  { name: 'Commerces', slug: 'commerces' },
];
</script>
