<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#005a43] via-[#a50e1e] to-[#ffd700] p-4 sm:p-6 lg:p-8">
    <div class="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
      <!-- Header avec effet de vague -->
      <div class="relative h-32 bg-gradient-to-r from-[#007A5E] to-[#5D8C7D] overflow-hidden">
        <div class="absolute inset-0 wave-pattern"></div>
        <div class="relative flex flex-col items-center justify-center h-full">
          <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <h1 class="text-white text-xl font-bold">PJ Camer</h1>
        </div>
      </div>
      
      <div class="p-8">
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-6">
          <span class="text-[#007A5E]">C</span>
          <span class="text-[#CE1126]">r</span>
          <span class="text-[#FCD116]">é</span>
          ez votre compte
        </h2>
        
        <form class="space-y-6" @submit.prevent="handleRegister">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
            <div class="relative">
              <input id="name" name="name" type="text" autocomplete="name" required v-model="name"
                     class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                     placeholder="Votre nom">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-3 7a6 6 0 1112 0H7z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
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
          
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div class="relative">
              <input id="password" name="password" type="password" autocomplete="new-password" required v-model="password"
                     class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                     placeholder="••••••••">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
            <div class="relative">
              <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" required v-model="confirmPassword"
                     class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                     placeholder="••••••••">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <button type="submit"
                    class="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-[#007A5E] to-[#FCD116] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-[1.02] transition duration-300 ease-in-out">
              S'inscrire
            </button>
          </div>
          
          <div class="text-center text-sm">
            <NuxtLink to="/auth/login" class="font-medium text-[#CE1126] hover:text-[#a50e1e] transition duration-300">
              Déjà un compte ? Se connecter
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }
  const success = await authStore.register({
    name: name.value,
    email: email.value,
    password: password.value,
    role: 'user' // Default role, can be extended
  });
  if (success) {
    router.push('/'); // Rediriger vers la page d'accueil ou le profil
  } else {
    alert("Erreur lors de l'inscription. L'email est peut-être déjà utilisé.");
  }
};

definePageMeta({
  layout: 'auth' // Optionnel
});
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
