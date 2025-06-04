```vue
<template>
  <div class="bg-white">
    <!-- En-tête -->
    <div class="relative bg-gradient-to-r from-green-600 to-yellow-500 py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-white">À Propos de Nous</h1>
        <p class="text-white/90 mt-4 max-w-2xl mx-auto">Découvrez notre mission pour transformer l'économie camerounaise</p>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Section Histoire -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold mb-6">Notre Histoire</h2>
            <p class="mb-4">Annuaire des Entreprises Camerounaises est né en 2023 de la volonté de créer une plateforme centralisée pour mettre en lumière les entreprises locales et stimuler l'économie camerounaise.</p>
            <p>Notre mission est de faciliter les connexions entre les entreprises et leurs clients, tout en promouvant l'économie locale et le patrimoine entrepreneurial du Cameroun.</p>
          </div>
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <span class="text-gray-500">Image représentative</span>
          </div>
        </div>
      </div>
      
      <!-- Section Équipe -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Notre Équipe</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4"></div>
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-yellow-600">{{ member.position }}</p>
          </div>
        </div>
      </div>
      
      <!-- Section Statistiques -->
      <div class="bg-yellow-50 rounded-xl p-8 mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Notre Impact</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-4xl font-bold text-yellow-600">{{ stat.value }}</p>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  { name: "Jean Dupont", position: "Fondateur & CEO" },
  { name: "Marie Lou", position: "Développeuse Frontend" },
  { name: "Paul Nkolo", position: "Responsable Marketing" }
];

const stats = [
  { value: "5000+", label: "Entreprises répertoriées" },
  { value: "100K+", label: "Utilisateurs mensuels" },
  { value: "12+", label: "Villes couvertes" },
  { value: "98%", label: "Satisfaction client" }
];
</script>
```
