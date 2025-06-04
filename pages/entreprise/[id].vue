```vue
<template>
  <div class="bg-white">
    <!-- En-tête avec galerie photos -->
    <div class="relative h-96 overflow-hidden">
      <img 
        v-for="(image, index) in business.images" 
        :key="index"
        :src="image"
        :alt="business.name"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        :class="{ 'opacity-0': currentImageIndex !== index }"
      />
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button 
          v-for="(_, index) in business.images"
          :key="index"
          @click="currentImageIndex = index"
          class="w-3 h-3 rounded-full"
          :class="currentImageIndex === index ? 'bg-yellow-500' : 'bg-gray-300'"
        />
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Informations essentielles -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ business.name }}</h1>
          
          <!-- Horaires, contact, localisation -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <ClockIcon class="w-5 h-5 text-yellow-500 mr-2" />
              <span>{{ business.hours }}</span>
            </div>
            <div class="flex items-center mb-2">
              <PhoneIcon class="w-5 h-5 text-yellow-500 mr-2" />
              <a :href="`tel:${business.phone}`" class="hover:text-yellow-500">{{ business.phone }}</a>
            </div>
            <div class="flex items-center">
              <MapPinIcon class="w-5 h-5 text-yellow-500 mr-2" />
              <span>{{ business.address }}</span>
            </div>
          </div>
          
          <!-- Description détaillée -->
          <div class="prose prose-lg max-w-none mb-8">
            <h2 class="text-xl font-semibold mb-4">Description</h2>
            <p>{{ business.description }}</p>
          </div>
          
          <!-- Galerie d'images -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Galerie</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img 
                v-for="(image, index) in business.gallery" 
                :key="index"
                :src="image"
                :alt="business.name + ' image ' + (index + 1)"
                class="rounded-lg object-cover h-40 w-full"
              />
            </div>
          </div>
          
          <!-- Avis et notations -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Avis</h2>
            <div class="flex items-center mb-4">
              <div class="flex mr-2">
                <StarIcon 
                  v-for="star in 5" 
                  :key="star"
                  class="w-5 h-5"
                  :class="star <= business.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'"
                />
              </div>
              <span class="text-gray-700">{{ business.rating }} ({{ business.reviewCount }} avis)</span>
            </div>
            
            <!-- Liste des avis -->
            <div v-for="review in business.reviews" :key="review.id" class="border-t border-gray-200 pt-4 mb-4">
              <div class="flex justify-between">
                <span class="font-semibold">{{ review.author }}</span>
                <span class="text-gray-500 text-sm">{{ review.date }}</span>
              </div>
              <div class="flex mb-2">
                <StarIcon 
                  v-for="star in 5" 
                  :key="star"
                  class="w-4 h-4"
                  :class="star <= review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'"
                />
              </div>
              <p class="text-gray-700">{{ review.content }}</p>
            </div>
          </div>
          
          <!-- Formulaire de contact direct -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Contacter l'entreprise</h2>
            <form @submit.prevent="submitContactForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  v-model="contactForm.name" 
                  placeholder="Votre nom" 
                  class="px-4 py-2 border rounded-lg"
                />
                <input 
                  v-model="contactForm.email" 
                  type="email" 
                  placeholder="Votre email" 
                  class="px-4 py-2 border rounded-lg"
                />
              </div>
              <textarea 
                v-model="contactForm.message" 
                placeholder="Votre message" 
                rows="4" 
                class="w-full px-4 py-2 border rounded-lg"
              ></textarea>
              <button 
                type="submit" 
                class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Carte d'emplacement -->
          <div class="bg-gray-100 p-4 rounded-lg">
            <h2 class="text-xl font-semibold mb-4">Localisation</h2>
            <div class="h-64">
              <InteractiveMap :businesses="[business]" />
            </div>
          </div>
          
          <!-- Bouton d'appel direct -->
          <a 
            :href="`tel:${business.phone}`" 
            class="flex items-center justify-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            <PhoneIcon class="w-5 h-5 mr-2" />
            Appeler maintenant
          </a>
          
          <!-- Intégration réseaux sociaux -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Suivez-nous</h2>
            <div class="flex space-x-4">
              <a v-for="social in business.socialMedia" :key="social.name" :href="social.url" class="text-yellow-500 hover:text-yellow-700">
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <!-- Entreprises similaires -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Entreprises similaires</h2>
            <div class="space-y-4">
              <BusinessCardGrid 
                v-for="similar in similarBusinesses" 
                :key="similar.id"
                :business="similar" 
                class="border rounded-lg p-4"
              />
            </div>
          </div>
          
          <!-- Section FAQ -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Questions fréquentes</h2>
            <div v-for="(faq, index) in business.faqs" :key="index" class="mb-4">
              <button 
                @click="faq.open = !faq.open"
                class="flex justify-between w-full text-left py-2 border-b border-gray-200"
              >
                <span class="font-medium">{{ faq.question }}</span>
                <ChevronDownIcon class="w-5 h-5 transition-transform" :class="{ 'transform rotate-180': faq.open }" />
              </button>
              <div v-show="faq.open" class="mt-2 text-gray-700">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline';
import InteractiveMap from '@/components/entreprise/InteractiveMap.vue';
import BusinessCardGrid from '@/components/entreprise/BusinessCardGrid.vue';

// Données simulées (à remplacer par un appel API)
const business = {
  id: 1,
  name: "Restaurant Chez Wou",
  description: "Le restaurant Chez Wou vous propose une cuisine camerounaise authentique dans un cadre chaleureux et convivial. Nos plats sont préparés avec des produits frais et locaux.",
  hours: "Lun-Dim: 10h-22h",
  phone: "+237 6 12 34 56 78",
  address: "Rue 1.234, Douala, Cameroun",
  rating: 4.5,
  reviewCount: 42,
  images: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1554679665-f5537f187268"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1554679665-f5537f187268",
    "https://images.unsplash.com/photo-1514933657448-51c5f8b8a8e3",
    "https://images.unsplash.com/photo-1467003909585-2f8a72797488",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330"
  ],
  reviews: [
    {
      id: 1,
      author: "Jean Dupont",
      date: "2023-10-15",
      rating: 5,
      content: "Excellente cuisine et service impeccable. Je recommande !"
    },
    {
      id: 2,
      author: "Marie Lou",
      date: "2023-10-10",
      rating: 4,
      content: "Très bon restaurant, ambiance chaleureuse. Les plats sont délicieux."
    }
  ],
  socialMedia: [
    { name: 'Facebook', url: '#', icon: 'FacebookIcon' },
    { name: 'Instagram', url: '#', icon: 'InstagramIcon' },
    { name: 'Twitter', url: '#', icon: 'TwitterIcon' }
  ],
  faqs: [
    { 
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements en espèces, par carte bancaire et mobile money.",
      open: false
    },
    { 
      question: "Faites-vous de la livraison à domicile ?",
      answer: "Oui, nous proposons la livraison dans un rayon de 10km autour du restaurant.",
      open: false
    }
  ]
};

const similarBusinesses = [
  { id: 2, name: "La Fourchette", category: "Restaurant", rating: 4.2, reviewCount: 38 },
  { id: 3, name: "Le Bon Goût", category: "Restaurant", rating: 4.7, reviewCount: 56 }
];

const currentImageIndex = ref(0);
const contactForm = ref({
  name: '',
  email: '',
  message: ''
});

const submitContactForm = () => {
  // Logique de soumission du formulaire
  console.log('Formulaire soumis:', contactForm.value);
  alert('Message envoyé avec succès !');
  contactForm.value = { name: '', email: '', message: '' };
};
</script>
```
