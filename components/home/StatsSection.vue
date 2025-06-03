<template>
  <div class="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold sm:text-4xl">
          L'annuaire des entreprises du Cameroun
        </h2>
        <p class="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
          Rejoignez des milliers d'entreprises qui font confiance à notre plateforme
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" class="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <div class="text-4xl font-bold text-yellow-300 mb-2 animate-float" :style="`animation-delay: ${index * 0.5}s`">
            {{ stat.value }}
          </div>
          <div class="text-sm font-medium text-green-100 uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '10,000+', label: 'Entreprises inscrites' },
  { value: '50+', label: 'Catégories' },
  { value: '500,000+', label: 'Visites mensuelles' },
  { value: '98%', label: 'Clients satisfaits' }
];
</script>
