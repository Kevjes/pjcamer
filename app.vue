<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Configuration globale de l'application
import { useAuthStore } from '~/stores/auth'; // Ajustez le chemin si nécessaire
const authStore = useAuthStore();
if (process.client) {
  authStore.initAuth();
}
useHead({
  htmlAttrs: {
    lang: 'fr',
    class: 'h-full bg-white'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
</script>

<style>
/* Styles globaux */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  background-color: white;
  color: #111827; /* gray-900 */
  font-family: 'Inter', sans-serif;
}

/* Styles de base pour les titres */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.25;
}

/* Styles pour les liens */
a {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

a:hover {
  color: #dc2626; /* red-600 */
}

/* Styles pour les boutons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-color: transparent;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity));
  --tw-ring-offset-width: 2px;
}

.btn-primary {
  background-color: #dc2626; /* red-600 */
  color: white;
}

.btn-primary:hover {
  background-color: #b91c1c; /* red-700 */
}

.btn-primary:focus {
  --tw-ring-color: rgb(239 68 68 / 0.5);
}

.btn-secondary {
  background-color: white;
  border-color: #e5e7eb; /* gray-200 */
  color: #374151; /* gray-700 */
}

.btn-secondary:hover {
  background-color: #f9fafb; /* gray-50 */
}

/* Styles pour les cartes */
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
