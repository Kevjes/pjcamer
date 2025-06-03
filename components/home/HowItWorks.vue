<template>
  <div class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Comment ça marche
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Trouvez l'entreprise qu'il vous faut en quelques clics
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <div v-for="(step, index) in steps" :key="index" class="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {{ index + 1 }}
          </div>
          <div class="mt-6 text-center">
            <component 
              :is="step.icon" 
              class="mx-auto h-12 w-12 text-green-600"
              aria-hidden="true"
            />
            <h3 class="mt-6 text-lg font-medium text-gray-900">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-base text-gray-600">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const steps = [
  {
    title: 'Recherchez',
    description: 'Trouvez des entreprises par nom, catégorie ou localisation',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Découvrez',
    description: 'Consultez les détails, avis et coordonnées des entreprises',
    icon: MapPinIcon
  },
  {
    title: 'Contactez',
    description: 'Prenez contact directement avec les entreprises qui vous intéressent',
    icon: PhoneIcon
  }
];
</script>
