<template>
  <div class="bg-primary-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span class="block">Prêt à commencer ?</span>
        <span class="block text-primary-200">Inscrivez votre entreprise dès aujourd'hui.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <NuxtLink 
            to="/inscription" 
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
          >
            Inscrire mon entreprise
          </NuxtLink>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-700"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de logique particulière nécessaire pour ce composant
</script>
