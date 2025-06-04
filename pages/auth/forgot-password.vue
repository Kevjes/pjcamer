<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#005a43] via-[#a50e1e] to-[#ffd700] p-4 sm:p-6 lg:p-8">
    <div class="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
      <!-- Header avec effet de vague -->
      <div class="relative h-32 bg-gradient-to-r from-[#007A5E] to-[#5D8C7D] overflow-hidden">
        <div class="absolute inset-0 wave-pattern"></div>
        <div class="relative flex flex-col items-center justify-center h-full">
          <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <h1 class="text-white text-xl font-bold">PJ Camer</h1>
        </div>
      </div>
      
      <div class="p-8">
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-6">
          <span class="text-[#007A5E]">R</span>
          <span class="text-[#CE1126]">é</span>
          <span class="text-[#FCD116]">c</span>
          upération de mot de passe
        </h2>
        
        <form class="space-y-6" @submit.prevent="handleReset">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div class="relative">
              <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                     class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                     placeholder="votre@email.com">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <button type="submit"
                    class="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-[#007A5E] to-[#FCD116] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-[1.02] transition duration-300 ease-in-out">
              Réinitialiser le mot de passe
            </button>
          </div>
          
          <div class="text-center text-sm">
            <NuxtLink to="/auth/login" class="font-medium text-[#007A5E] hover:text-[#005a43] transition duration-300">
              Retour à la connexion
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleReset = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  
  try {
    // Ici vous appelleriez votre API pour réinitialiser le mot de passe
    // Exemple : await $fetch('/api/auth/forgot-password', { method: 'POST', body: { email: email.value } });
    
    // Simulation de succès
    successMessage.value = 'Un email avec les instructions a été envoyé à votre adresse.';
  } catch (error) {
    errorMessage.value = "Une erreur s'est produite. Veuillez réessayer.";
  }
};
</script>

<style scoped>
.wave-pattern {
  background: 
    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
