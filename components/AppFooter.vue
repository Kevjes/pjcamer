<template>
  <!-- Section CTA -->
  <div class="bg-yellow-500 text-gray-900 py-16 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <!-- Motif SVG Camerounais subtil -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJjYW1lci1wYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSIzMCIgeTI9IjYwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIwIiB5MT0iMzAiIHgyPSI2MCIgeTI9IjMwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjYW1lci1wYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à développer votre entreprise ?</h2>
      <p class="text-xl text-gray-800/90 mb-8 max-w-3xl mx-auto">Rejoignez des milliers d'entreprises qui font confiance à AnnuaireCamer pour accroître leur visibilité en ligne.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/inscription" class="px-8 py-4 bg-gray-900 text-yellow-400 font-bold rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Inscrire mon entreprise
        </NuxtLink>
        <NuxtLink to="/contact" class="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900/10 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Nous contacter
        </NuxtLink>
      </div>
    </div>
  </div>

  <footer class="bg-gray-900 text-gray-300 pt-20 pb-12 relative overflow-hidden">
    <!-- Conteneur des bulles en arrière-plan avec effet blur -->
    <div class="absolute inset-0 overflow-hidden -z-10">
      <div 
        v-for="(blob, index) in blobs" 
        :key="index"
        class="absolute rounded-full filter blur-xl opacity-20 animate-pulse"
        :class="blob.color"
        :style="{
          width: `${blob.size}rem`,
          height: `${blob.size}rem`,
          top: `${blob.position.top}%`,
          left: `${blob.position.left}%`
        }"
      />
    </div>

    <!-- Éléments décoratifs Camerounais -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute -right-20 -bottom-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div class="absolute top-1/4 right-1/4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Newsletter -->
      <div class="bg-yellow-400 rounded-2xl p-8 mb-16 shadow-2xl transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div class="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Restez informé</h2>
          <p class="text-gray-800 text-lg mb-6">Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres exclusives.</p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              class="flex-grow px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-yellow-500 text-gray-900 placeholder-gray-600"
            >
            <button class="bg-gray-900 text-yellow-400 hover:bg-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
            <div class="bg-yellow-400 p-2 rounded-lg mr-3 shadow-md">
              <!-- Icône Logo AnnuaireCamer (peut être un SVG personnalisé) -->
              <svg class="h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 9L12 16L21 9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 13L12 18L21 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">Annuaire<span class="text-yellow-400">Camer</span></span>
          </div>
          <p class="mt-6 text-gray-400 text-sm leading-relaxed">
            La plateforme de référence pour trouver les meilleures entreprises au Cameroun. 
            Nous connectons les entreprises aux clients depuis 2023 avec une approche moderne et innovante.
          </p>
          <div class="mt-6 flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name" 
              :href="social.href" 
              :aria-label="social.name"
              class="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full text-gray-400 hover:text-gray-900 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-base font-semibold text-yellow-400 mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Liens rapides
          </h3>
          <ul role="list" class="space-y-3">
            <li v-for="(item, index) in quickLinks" :key="index" class="group">
              <a 
                :href="item.href" 
                class="text-gray-400 hover:text-yellow-300 transition-colors duration-200 inline-flex items-center group-hover:translate-x-1 group-hover:text-yellow-400"
              >
                <svg class="w-4 h-4 mr-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Catégories -->
        <div>
          <h3 class="text-base font-semibold text-green-400 mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Catégories
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <a 
              v-for="(category, index) in categories" 
              :key="index" 
              :href="`/categories/${category.slug}`" 
              class="text-sm text-gray-400 hover:text-white px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 flex items-center"
            >
              <span class="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
              {{ category.name }}
            </a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-base font-semibold text-red-400 mb-6 relative inline-flex items-center">
            <span class="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Contactez-nous
          </h3>
          <ul role="list" class="space-y-4">
            <li class="flex items-start group">
              <div class="bg-yellow-100/10 p-2 rounded-lg text-yellow-400 mr-3 group-hover:bg-yellow-200/20 transition-colors shadow-sm">
                <MapPinIcon class="h-5 w-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">Adresse</h4>
                <p class="text-sm text-gray-400">Yaoundé, Cameroun</p>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-green-100/10 p-2 rounded-lg text-green-400 mr-3 group-hover:bg-green-200/20 transition-colors shadow-sm">
                <PhoneIcon class="h-5 w-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">Téléphone</h4>
                <p class="text-sm text-gray-400">+237 6XX XXX XXX</p>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-red-100/10 p-2 rounded-lg text-red-400 mr-3 group-hover:bg-red-200/20 transition-colors shadow-sm">
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
      <div class="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center text-sm text-gray-500 text-center md:text-left">
          <!-- Petit drapeau SVG Cameroun -->
          <svg class="h-4 w-6 mr-2" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="400" fill="#007A5E"/>
            <rect x="200" width="200" height="400" fill="#CE1126"/>
            <rect x="400" width="200" height="400" fill="#FCD116"/>
            <polygon points="300,130 320,190 380,190 330,230 350,290 300,250 250,290 270,230 220,190 280,190" fill="#FCD116" transform="translate(0, 10)"/>
          </svg>
          &copy; {{ new Date().getFullYear() }} AnnuaireCamer. Tous droits réservés.
        </div>
        <div class="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
          <a 
            v-for="(item, index) in legalLinks" 
            :key="index" 
            :href="item.href" 
            class="text-sm text-gray-400 hover:text-yellow-300 transition-colors duration-200 hover:underline"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="mt-4 md:mt-0 flex items-center">
          <span class="text-xs text-gray-600 mr-2">Paiements sécurisés</span>
          <div class="flex space-x-2">
            <CreditCardIcon class="h-5 w-8 text-gray-500 hover:text-yellow-400 transition-colors" />
            <BanknotesIcon class="h-5 w-8 text-gray-500 hover:text-yellow-400 transition-colors" />
            <DevicePhoneMobileIcon class="h-5 w-8 text-gray-500 hover:text-yellow-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CreditCardIcon, BanknotesIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline';

// Icônes pour les réseaux sociaux (à remplacer par vos propres composants ou SVG)
const FacebookIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' })]);
const TwitterIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.728-.666 1.581-.666 2.477 0 1.61.823 3.027 2.071 3.857-.766-.024-1.483-.233-2.11-.583v.06c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.198 4.342 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z' })]);
const InstagramIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.791.218 2.175.395.484.226.885.485 1.305.905.42.42.678.821.905 1.305.177.384.343.997.395 2.175.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.178-.218 1.791-.395 2.175-.226.484-.485.885-.905 1.305-.42.42-.821.678-1.305.905-.384.177-.997.343-2.175.395-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.178-.052-1.791-.218-2.175-.395-.484-.226-.885-.485-1.305-.905-.42-.42-.678-.821-.905-1.305-.177-.384-.343-.997-.395-2.175-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.178.218-1.791.395-2.175.226-.484.485.885.905-1.305.42-.42.821-.678 1.305-.905.384-.177.997-.343 2.175-.395 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.27.058-2.164.229-2.913.521-.781.302-1.456.718-2.123 1.385s-1.083 1.342-1.385 2.123c-.292.749-.463 1.643-.521 2.913-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.27.229 2.164.521 2.913.302.781.718 1.456 1.385 2.123s1.342 1.083 2.123 1.385c.749.292 1.643.463 2.913.521 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.27-.058 2.164-.229 2.913-.521.781-.302 1.456-.718 2.123-1.385s1.083-1.342 1.385-2.123c.292-.749.463-1.643.521-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.27-.229-2.164-.521-2.913-.302-.781-.718-1.456-1.385-2.123s-1.342-1.083-2.123-1.385c-.749-.292-1.643-.463-2.913-.521-1.28-.058-1.688-.072-4.947-.072z' }), h('path', { d: 'M12 6.865c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.135c-1.703 0-3.085-1.383-3.085-3.085s1.383-3.085 3.085-3.085 3.085 1.383 3.085 3.085-1.383 3.085-3.085 3.085z' }), h('circle', { cx: '16.935', cy: '7.065', r: '1.44' })]);
const LinkedInIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z' })]);

import { h } from 'vue'; // Import h for creating render functions for icons

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Catégories', href: '/categories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const categories = [
  { name: 'Restaurants', slug: 'restaurants' },
  { name: 'Hôtels', slug: 'hotels' },
  { name: 'Shopping', slug: 'shopping' },
  { name: 'Services', slug: 'services' },
  { name: 'Santé', slug: 'sante' },
  { name: 'Éducation', slug: 'education' },
];

const legalLinks = [
  { name: 'Conditions d\'utilisation', href: '/conditions-utilisation' },
  { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { name: 'Mentions légales', href: '/mentions-legales' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FacebookIcon }, 
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
];

const blobs = [
  { size: 10, position: { top: 20, left: 5 }, color: 'bg-green-500' },
  { size: 15, position: { top: 50, left: 80 }, color: 'bg-red-500' },
  { size: 12, position: { top: 80, left: 40 }, color: 'bg-yellow-500' },
];

</script>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}

@keyframes blob {
  0% {
    transform: scale(1) translate(0px, 0px);
  }
  33% {
    transform: scale(1.1) translate(30px, -50px);
  }
  66% {
    transform: scale(0.9) translate(-20px, 20px);
  }
  100% {
    transform: scale(1) translate(0px, 0px);
  }
}
</style>
