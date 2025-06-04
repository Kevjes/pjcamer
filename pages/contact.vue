```vue
<template>
  <div class="bg-white">
    <!-- En-tête -->
    <div class="relative bg-gradient-to-r from-green-600 to-yellow-500 py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-white">Contactez-nous</h1>
        <p class="text-white/90 mt-4 max-w-2xl mx-auto">Nous sommes à votre écoute pour répondre à vos questions</p>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Formulaire de contact -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form class="space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium">Nom complet</label>
              <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg">
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg">
            </div>
            <div>
              <label for="subject" class="block mb-2 font-medium">Sujet</label>
              <input type="text" id="subject" class="w-full px-4 py-2 border rounded-lg">
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium">Message</label>
              <textarea id="message" rows="5" class="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" class="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
              Envoyer le message
            </button>
          </form>
        </div>
        
        <!-- Informations de contact -->
        <div>
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="bg-yellow-100 p-2 rounded-full mr-4">
                  <PhoneIcon class="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 class="font-medium">Téléphone</h3>
                  <p>+237 6 12 34 56 78</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-yellow-100 p-2 rounded-full mr-4">
                  <EnvelopeIcon class="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 class="font-medium">Email</h3>
                  <p>contact@annuaire-cameroun.cm</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-yellow-100 p-2 rounded-full mr-4">
                  <MapPinIcon class="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 class="font-medium">Adresse</h3>
                  <p>Rue 1.234, Douala, Cameroun</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carte de localisation -->
          <div class="h-64 rounded-lg overflow-hidden">
            <div class="h-full w-full bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Carte interactive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline';
</script>
```
