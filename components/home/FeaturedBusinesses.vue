<template>
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Entreprises à la une
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Découvrez les entreprises les mieux notées par nos utilisateurs
        </p>
      </div>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="business in featuredBusinesses" 
          :key="business.id"
          class="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <div class="relative h-48">
            <img 
              :src="business.image" 
              :alt="business.name"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">{{ business.name }}</h3>
              <div class="flex items-center mt-1">
                <div class="flex items-center">
                  <StarIcon 
                    v-for="i in 5" 
                    :key="i"
                    class="h-5 w-5"
                    :class="i <= business.rating ? 'text-yellow-400' : 'text-gray-300'"
                  />
                </div>
                <span class="ml-2 text-sm text-white">({{ business.reviewCount }} avis)</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500">
              <MapPinIcon class="flex-shrink-0 h-5 w-5 text-gray-400" />
              <span class="ml-1">{{ business.location }}</span>
            </div>
            <p class="mt-3 text-base text-gray-600 line-clamp-2">
              {{ business.description }}
            </p>
            <div class="mt-4 flex items-center justify-between">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                {{ business.category }}
              </span>
              <NuxtLink 
                :to="`/business/${business.id}`"
                class="text-primary-600 hover:text-primary-900 font-medium text-sm"
              >
                Voir plus →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <NuxtLink 
          to="/business"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Voir toutes les entreprises
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import { MapPinIcon } from '@heroicons/vue/24/outline';

const featuredBusinesses = [
  {
    id: 1,
    name: 'Hôtel La Falaise',
    category: 'Hôtellerie',
    location: 'Douala, Bonanjo',
    rating: 4,
    reviewCount: 124,
    description: 'Hôtel 4 étoiles offrant un hébergement de luxe avec piscine et vue sur l\'océan.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    name: 'Restaurant Le Wouri',
    category: 'Restauration',
    location: 'Yaoundé, Bastos',
    rating: 5,
    reviewCount: 89,
    description: 'Cuisine camerounaise raffinée dans un cadre élégant et moderne.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    name: 'Auto Garage Excellence',
    category: 'Mécanique',
    location: 'Douala, Akwa',
    rating: 4,
    reviewCount: 156,
    description: 'Service de réparation automobile de qualité avec des techniciens certifiés.',
    image: 'https://images.unsplash.com/photo-1609525314877-63cfc64d4c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];
</script>
