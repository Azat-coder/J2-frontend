<template>
    <div ref="mapContainer" class="w-full h-full"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  // Убираем импорт 'leaflet' из JS, так как он теперь доступен глобально как window.L
  
  const mapContainer = ref(null)
  let map = null
  const markers = []
  
  // Настроим маркеры через L (все свойства доступны на объекте L)
  const markerIcon = new L.Icon({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
  
  onMounted(() => {
    map = L.map(mapContainer.value).setView([0, 0], 2)
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)
  
    map.on('click', (e) => {
      addMarker(e.latlng)
    })
  })
  
  function addMarker(latlng) {
    const marker = L.marker([latlng.lat, latlng.lng], { icon: markerIcon }).addTo(map)
    markers.push(marker)
  }
  </script>
  
  <style scoped>
  div {
    width: 100%;
    height: 100%;
  }
  </style>