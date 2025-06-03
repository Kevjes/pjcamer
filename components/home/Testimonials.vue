<template>
  <div class="bg-primary-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Ce que disent nos utilisateurs
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Découvrez comment PJ-Camer aide les gens à trouver les meilleures entreprises locales
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="h-12 w-12 rounded-full"
              >
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center">
              <StarIcon 
                v-for="i in 5" 
                :key="i"
                class="h-5 w-5"
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
              />
            </div>
            <p class="mt-3 text-gray-600">"{{ testimonial.comment }}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';

const testimonials = [
  {
    name: 'Jean Dupont',
    role: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: 'Grâce à PJ-Camer, j\'ai pu trouver des fournisseurs fiables pour mon entreprise. La plateforme est intuitive et complète.'
  },
  {
    name: 'Aïssatou Diallo',
    role: 'Particulier',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    comment: 'Service client réactif et nombreuses entreprises référencées. Je recommande vivement !'
  },
  {
    name: 'Marc Nkodo',
    role: 'Gérant de restaurant',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    comment: 'Excellente visibilité pour mon établissement. Les avis clients m\'aident à m\'améliorer.'
  }
];
</script>
