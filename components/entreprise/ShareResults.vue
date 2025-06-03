```vue
<template>
  <div class="mt-8 border-t pt-6">
    <h3 class="text-lg font-semibold mb-3">Partager ces résultats</h3>
    <div class="flex space-x-4">
      <button 
        @click="shareOnFacebook"
        class="text-blue-600 hover:text-blue-800 transition"
        aria-label="Partager sur Facebook"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <!-- SVG Facebook -->
        </svg>
      </button>
      
      <button 
        @click="shareOnTwitter"
        class="text-blue-400 hover:text-blue-600 transition"
        aria-label="Partager sur Twitter"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <!-- SVG Twitter -->
        </svg>
      </button>
      
      <button 
        @click="shareOnLinkedIn"
        class="text-blue-700 hover:text-blue-900 transition"
        aria-label="Partager sur LinkedIn"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <!-- SVG LinkedIn -->
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

const shareOnTwitter = () => {
  const text = encodeURIComponent("Découvrez ces entreprises camerounaises");
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
};

const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
};
</script>
```
