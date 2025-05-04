<template>
  <div>
    <svg
      width="100%"
      height="600"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          v-for="country in countries"
          :key="country.id"
          :d="country.path"
          :fill="getCountryFill(country.id)"
          stroke="#fff"
          stroke-width="0.5"
          @click="onCountryClick(country.id)"
          @mouseover="onCountryHover(country.id)"
          @mouseleave="onCountryHover(null)"
          :style="{
            cursor: isClickable(country.id) ? 'pointer' : 'default',
            pointerEvents: isClickable(country.id) ? 'auto' : 'none'
          }"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { geoPath, geoMercator } from 'd3-geo'

const countries = ref([])
const hoveredCountry = ref(null)
const selectedCountry = ref(null)

console.log('Компонент загружен')

// Список стран, которые кликабельны
const clickableCountries = ['USA', 'FRA', 'CHN', 'RUS']

function isClickable(isoCode) {
  return isoCode && clickableCountries.includes(isoCode)
}

function onCountryHover(isoCode) {
  hoveredCountry.value = isoCode
  console.log('hover:', isoCode)
}

function onCountryClick(isoCode) {
  console.log('click:', isoCode)
  if (isClickable(isoCode)) {
    selectedCountry.value = isoCode
    console.log('selectedCountry set to:', selectedCountry.value)
    nextTick(() => fetchCountryInfo(isoCode))
  }
}

async function fetchCountryInfo(isoCode) {
  console.log('fetchCountryInfo called with:', isoCode)
  alert(`Загрузка данных о стране: ${isoCode}`)
}

function getCountryFill(isoCode) {
  if (selectedCountry.value === isoCode) return '#ffcc00'
  if (hoveredCountry.value === isoCode) return '#88d8c0'
  return isClickable(isoCode) ? '#69b3a2' : '#ccc'
}

onMounted(async () => {
  console.log('onMounted start')
  const res = await fetch(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  )
  const world = await res.json()
  console.log('Гео-данные загружены, количество features:', world.features.length)

  const projection = geoMercator().scale(100).translate([400, 200])
  const pathGenerator = geoPath().projection(projection)

  countries.value = world.features
    .map((feature) => {
      // Правильно извлекаем код страны
      const iso = feature.id || feature.properties.ISO_A2 || null
      const path = pathGenerator(feature)

      if (!iso) {
        console.log('Страна без ISO кода! Доступные ключи:', Object.keys(feature.properties))
      }

      return {
        id: iso,
        path: path || '',
      }
    })
    .filter((country) => country.id && country.path)

  console.log('Итоговое количество стран для рендера:', countries.value.length)
  console.log('Пример стран:', countries.value.slice(0, 5))
})
</script>

<style scoped>
svg {
  user-select: none;
  transition: all 0.2s ease;
}

path {
  transition: fill 0.2s ease;
}
</style>
