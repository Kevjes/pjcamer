```vue
<template>
  <div class="bg-white">
    <!-- En-tête -->
    <div class="relative bg-gradient-to-r from-green-600 to-yellow-500 py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-white">Centre d'Aide</h1>
        <p class="text-white/90 mt-4 max-w-2xl mx-auto">Trouvez des réponses à vos questions fréquemment posées</p>
        
        <!-- Barre de recherche -->
        <div class="mt-8 max-w-2xl mx-auto">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Rechercher dans la FAQ..." 
              class="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
              v-model="searchQuery"
            >
            <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute right-4 top-3.5" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Navigation par catégories -->
        <div class="lg:col-span-1">
          <div class="sticky top-8">
            <h2 class="text-xl font-bold mb-4">Catégories</h2>
            <ul class="space-y-2">
              <li 
                v-for="category in categories" 
                :key="category"
                class="px-4 py-2 rounded-lg hover:bg-yellow-50 cursor-pointer"
                :class="{ 'bg-yellow-100': activeCategory === category }"
                @click="activeCategory = category"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Liste des questions -->
        <div class="lg:col-span-3">
          <div v-for="faq in filteredFaqs" :key="faq.question" class="mb-6">
            <button 
              @click="faq.open = !faq.open"
              class="flex justify-between w-full text-left py-4 px-6 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <span class="font-medium">{{ faq.question }}</span>
              <ChevronDownIcon class="w-5 h-5 text-yellow-500 transition-transform" :class="{ 'transform rotate-180': faq.open }" />
            </button>
            <div v-show="faq.open" class="mt-2 px-6 py-4 text-gray-700">
              {{ faq.answer }}
              
              <!-- Feedback -->
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-sm mb-2">Cette réponse vous a-t-elle été utile ?</p>
                <div class="flex space-x-2">
                  <button class="text-green-600 hover:text-green-800">
                    <HandThumbUpIcon class="w-5 h-5" />
                  </button>
                  <button class="text-red-600 hover:text-red-800">
                    <HandThumbDownIcon class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Formulaire pour nouvelles questions -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
            <p class="mb-6">Envoyez-nous votre question et notre équipe vous répondra dans les plus brefs délais</p>
            <form class="space-y-4">
              <div>
                <label class="block mb-2 font-medium">Votre question</label>
                <textarea class="w-full px-4 py-2 border rounded-lg" rows="3"></textarea>
              </div>
              <div>
                <label class="block mb-2 font-medium">Votre email</label>
                <input type="email" class="w-full px-4 py-2 border rounded-lg">
              </div>
              <button type="submit" class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                Envoyer votre question
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  MagnifyingGlassIcon, 
  ChevronDownIcon,
  HandThumbUpIcon,
  HandThumbDownIcon
} from '@heroicons/vue/24/outline';

const categories = [
  "Général",
  "Inscription",
  "Paiements",
  "Entreprises",
  "Compte Utilisateur",
  "Problèmes Techniques"
];

const activeCategory = ref("Général");

const faqs = [
  {
    question: "Comment inscrire mon entreprise sur l'annuaire ?",
    answer: "Pour inscrire votre entreprise, rendez-vous sur la page d'inscription, remplissez le formulaire avec les informations requises et soumettez-le. Notre équipe validera votre inscription sous 48 heures.",
    category: "Inscription",
    open: false
  },
  {
    question: "Quels sont les tarifs pour figurer dans l'annuaire ?",
    answer: "L'inscription de base est gratuite et comprend une fiche entreprise standard. Nous proposons également des forfaits premium avec visibilité accrue et fonctionnalités supplémentaires.",
    category: "Paiements",
    open: false
  },
  {
    question: "Comment modifier les informations de mon entreprise ?",
    answer: "Connectez-vous à votre compte entreprise, accédez à votre tableau de bord et cliquez sur 'Modifier les informations'. Vos modifications seront soumises à validation avant publication.",
    category: "Entreprises",
    open: false
  }
];

const searchQuery = ref("");

const filteredFaqs = computed(() => {
  return faqs
    .filter(faq => faq.category === activeCategory.value)
    .filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>
```
