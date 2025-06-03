<template>
  <div class="mt-8 rounded-lg overflow-hidden shadow-lg bg-white">
    <div ref="mapContainer" class="h-96 w-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref(null);
const props = defineProps({
  businesses: {
    type: Array,
    required: true
  }
});

onMounted(() => {
  const map = L.map(mapContainer.value).setView([3.848, 11.502], 8);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Ajouter des marqueurs pour chaque entreprise
  props.businesses.forEach(business => {
    if (business.latitude && business.longitude) {
      L.marker([business.latitude, business.longitude])
        .addTo(map)
        .bindPopup(`<b>${business.name}</b><br>${business.category}`);
    }
  });
});
</script>
