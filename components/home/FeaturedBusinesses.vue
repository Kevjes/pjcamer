<template>
  <div class="bg-gradient-to-b from-gray-50 to-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
          Entreprises populaires
        </span>
        <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">
          Découvrez nos <span class="text-gradient">entreprises partenaires</span>
        </h2>
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Des entreprises de confiance recommandées par notre communauté
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(business, index) in featuredBusinesses" 
          :key="business.id"
          class="group bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          :class="'animate-fade-in-up'"
          :style="`animation-delay: ${index * 100}ms`"
        >
          <!-- Badge du top entreprise -->
          <div v-if="business.isTop" class="absolute top-4 right-4 z-10">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
              <StarIcon class="h-4 w-4 mr-1 text-yellow-500" />
              Top
            </span>
          </div>
          
          <!-- Image de couverture -->
          <div class="relative h-56 overflow-hidden">
            <img 
              :src="business.image" 
              :alt="business.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="flex items-center mb-2">
                <div class="flex items-center">
                  <StarIcon 
                    v-for="i in 5" 
                    :key="i"
                    class="h-5 w-5"
                    :class="i <= business.rating ? 'text-yellow-400' : 'text-gray-300'"
                  />
                </div>
                <span class="ml-2 text-sm text-white/90">({{ business.reviewCount }} avis)</span>
              </div>
              <h3 class="text-2xl font-bold text-white">{{ business.name }}</h3>
            </div>
          </div>
          
          <!-- Contenu de la carte -->
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <MapPinIcon class="flex-shrink-0 h-5 w-5 text-gray-400 mr-1" />
              <span>{{ business.location }}</span>
              <span class="mx-2">•</span>
              <span class="flex items-center">
                <ClockIcon class="h-4 w-4 mr-1" />
                {{ business.openStatus }}
              </span>
            </div>
            
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ business.description }}
            </p>
            
            <div class="flex items-center justify-between mt-6">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tag, i) in business.tags" 
                  :key="i"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="tagClasses[tag.type] || 'bg-gray-100 text-gray-800'"
                >
                  {{ tag.label }}
                </span>
              </div>
              <NuxtLink 
                :to="`/business/${business.id}`"
                class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 group transition-colors"
              >
                En savoir plus
                <ArrowRightIcon class="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink 
          to="/business"
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
        >
          Explorer toutes les entreprises
          <ArrowRightIcon class="ml-2 -mr-1 h-5 w-5" />
        </NuxtLink>
        
        <p class="mt-4 text-sm text-gray-500">
          Plus de 1 000 entreprises vous attendent
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import { MapPinIcon, ClockIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

// Types de tags avec leurs styles correspondants
const tagClasses = {
  category: 'bg-green-100 text-green-800',
  feature: 'bg-blue-100 text-blue-800',
  promotion: 'bg-red-100 text-red-800',
  verified: 'bg-purple-100 text-purple-800'
};

const featuredBusinesses = [
  {
    id: 1,
    name: 'Hôtel La Falaise',
    location: 'Douala, Bonanjo',
    rating: 4,
    reviewCount: 124,
    openStatus: 'Ouvert',
    isTop: true,
    description: 'Hôtel 4 étoiles offrant un hébergement de luxe avec piscine et vue imprenable sur l\'océan. Idéal pour les séjours d\'affaires et de détente.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Hôtellerie de luxe' },
      { type: 'feature', label: 'Piscine' },
      { type: 'verified', label: 'Vérifié' }
    ]
  },
  {
    id: 2,
    name: 'Restaurant Le Wouri',
    location: 'Yaoundé, Bastos',
    rating: 5,
    reviewCount: 89,
    openStatus: 'Fermé',
    isTop: true,
    description: 'Cuisine camerounaise raffinée préparée par nos chefs étoilés. Découvrez des saveurs authentiques dans un cadre élégant et moderne.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Cuisine camerounaise' },
      { type: 'feature', label: 'Terrasse' },
      { type: 'promotion', label: 'Menu dégustation' }
    ]
  },
  {
    id: 3,
    name: 'Spa Zen Attitude',
    location: 'Douala, Akwa',
    rating: 5,
    reviewCount: 67,
    openStatus: 'Ouvert',
    isTop: false,
    description: 'Centre de bien-être offrant des soins relaxants et revitalisants. Détendez-vous avec nos massages et soins du visage personnalisés.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Spa & Bien-être' },
      { type: 'feature', label: 'Massages' },
      { type: 'promotion', label: 'Offre découverte' }
    ]
  },
  {
    id: 4,
    name: 'Agence Immobilière Horizon',
    location: 'Yaoundé, Nlongkak',
    rating: 4,
    reviewCount: 92,
    openStatus: 'Ouvert',
    isTop: true,
    description: 'Votre partenaire immobilier de confiance pour trouver la maison ou l\'appartement de vos rêves au Cameroun.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    tags: [
      { type: 'category', label: 'Immobilier' },
      { type: 'feature', label: 'Location & Vente' },
      { type: 'verified', label: 'Agréé' }
    ]
  },
  {
    id: 5,
    name: 'Espace Forme & Santé',
    location: 'Douala, Bonapriso',
    rating: 4,
    reviewCount: 143,
    openStatus: 'Ouvert',
    isTop: false,
    description: 'Salle de sport moderne avec des équipements de pointe et des coachs professionnels pour vous accompagner dans votre remise en forme.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Salle de sport' },
      { type: 'feature', label: 'Coach personnel' },
      { type: 'promotion', label: '1ère séance offerte' }
    ]
  },
  {
    id: 6,
    name: 'Auto Garage Excellence',
    location: 'Douala, Akwa',
    rating: 4,
    reviewCount: 76,
    openStatus: 'Fermé',
    isTop: false,
    description: 'Service de réparation automobile de qualité avec des mécaniciens certifiés. Nous utilisons exclusivement des pièces d\'origine pour garantir la longévité de votre véhicule.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6988f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Mécanique auto' },
      { type: 'feature', label: 'Pièces d\'origine' },
      { type: 'verified', label: 'Certifié' }
    ]
  },
  {
    id: 7,
    name: 'Institut de Beauté Éclat',
    location: 'Yaoundé, Bastos',
    rating: 5,
    reviewCount: 112,
    openStatus: 'Ouvert',
    isTop: true,
    description: 'Votre institut de beauté de confiance pour des soins du visage, épilation et maquillage professionnel par des esthéticiennes expérimentées.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Beauté & Soins' },
      { type: 'feature', label: 'Soins du visage' },
      { type: 'promotion', label: 'Soin découverte -20%' }
    ]
  },
  {
    id: 8,
    name: 'Cabinet Dentaire du Dr. Nkono',
    location: 'Douala, Bonanjo',
    rating: 5,
    reviewCount: 204,
    openStatus: 'Ouvert',
    isTop: false,
    description: 'Cabinet dentaire moderne offrant des soins dentaires complets dans un cadre chaleureux et rassurant. Prenez soin de votre sourire avec notre équipe expérimentée.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: [
      { type: 'category', label: 'Dentisterie' },
      { type: 'feature', label: 'Blanchiment' },
      { type: 'verified', label: 'Docteur certifié' }
    ]
  }
];
</script>
