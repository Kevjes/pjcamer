```vue
<template>
  <div class="mb-6">
    <h3 class="font-semibold text-lg mb-3">Services & Équipements</h3>
    
    <!-- Filtres Services -->
    <div class="mb-4">
      <h4 class="font-medium mb-2">Services</h4>
      <div 
        v-for="service in availableServices" 
        :key="service"
        class="flex items-center mb-2"
      >
        <input 
          :id="`service-${service}`"
          type="checkbox" 
          v-model="selectedServices"
          :value="service"
          class="mr-2 h-4 w-4 text-yellow-500 rounded"
        >
        <label :for="`service-${service}`">{{ service }}</label>
      </div>
    </div>
    
    <!-- Filtres Équipements -->
    <div>
      <h4 class="font-medium mb-2">Équipements</h4>
      <div 
        v-for="equipment in availableEquipment" 
        :key="equipment"
        class="flex items-center mb-2"
      >
        <input 
          :id="`equipment-${equipment}`"
          type="checkbox" 
          v-model="selectedEquipment"
          :value="equipment"
          class="mr-2 h-4 w-4 text-yellow-500 rounded"
        >
        <label :for="`equipment-${equipment}`">{{ equipment }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const availableServices = [
  'Livraison',
  'Réservation en ligne',
  'Service client 24/7',
  'Paiement mobile'
];

const availableEquipment = [
  'Parking',
  'Climatisation',
  'WiFi',
  'Espace enfants'
];

const selectedServices = ref([]);
const selectedEquipment = ref([]);

defineExpose({
  selectedServices,
  selectedEquipment
});
</script>
```
