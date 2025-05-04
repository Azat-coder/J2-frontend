<template>
  <div style="position: relative; width: 100%; height: 600px;">
    <svg
      width="100%"
      height="600"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      @mousemove="onMouseMove"
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
          @mouseover="onCountryHover(country.id, country.name)"
          @mouseleave="onCountryHover(null, null)"
          @contextmenu="(e) => handleContextMenuClick(e, country.id)"
          :style="{
            cursor: isClickable(country.id) ? 'pointer' : 'default',
            pointerEvents: isClickable(country.id) ? 'auto' : 'none'
          }"
        />
      </g>
    </svg>

    <ContextMenu ref="contextMenu" :model="contextMenuItems" />

    <div
      v-if="tooltip.visible"
      :style="{
        position: 'absolute',
        top: tooltip.y + 10 + 'px',
        left: tooltip.x + 10 + 'px',
        background: '#333',
        color: '#fff',
        padding: '5px 8px',
        borderRadius: '4px',
        pointerEvents: 'none',
        fontSize: '12px',
        whiteSpace: 'nowrap'
      }"
    >
      {{ tooltip.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { geojson } from '@/shared/assets/geojson.ts'
import { geoPath, geoMercator } from 'd3-geo'
import { iso2to3, countriesAvailability } from '@/shared/assets/constants.ts';

const countries = ref([])
const hoveredCountry = ref(null)
const selectedCountry = ref(null)
const tooltip = ref({ visible: false, x: 0, y: 0, name: '' })
const clickableCountries = Object.values(iso2to3);
const contextMenu = ref(null);

const contextMenuItems = ref([
    {
        label: 'Визовая информация',
        icon: 'pi pi-globe',
        command: handleVisaInformation,
    },
    {
        label: 'Стоимость жизни',
        icon: 'pi pi-wallet'
    },
    {
        label: 'Погода',
        icon: 'pi pi-sun'
    },
    {
        separator: true
    },
    {
        label: 'Добавить к сравнению',
        icon: 'pi pi-chart-bar'
    }
]);

function isClickable(isoCode) {
  return isoCode && clickableCountries.includes(isoCode)
}

function onCountryHover(isoCode, name) {
  hoveredCountry.value = isoCode
  tooltip.value.visible = !!isoCode
  tooltip.value.name = name || ''
}

function onMouseMove(event) {
  const container = event.currentTarget.getBoundingClientRect()
  tooltip.value.x = event.clientX - container.left
  tooltip.value.y = event.clientY - container.top
}

const countryColorMap = Object.fromEntries(
  countriesAvailability.map(({ countryCode, color }) => [iso2to3[countryCode], color])
)

function onCountryClick(isoCode) {
  console.log('click:', isoCode)
  if (isClickable(isoCode)) {
    selectedCountry.value = isoCode
    nextTick(() => fetchCountryInfo(isoCode))
  }
}

function handleContextMenuClick(event, isoCode) {
  contextMenu.value.show(event);

  if (isClickable(isoCode)) {
    selectedCountry.value = isoCode
  }
}

function handleVisaInformation() {
  console.log("handleVisaInformation", selectedCountry.value);
}

async function fetchCountryInfo(isoCode) {
}

function getCountryFill(isoCode) {
  if (selectedCountry.value === isoCode) return '#ffcc00'
  if (hoveredCountry.value === isoCode) return '#88d8c0'
  return countryColorMap[isoCode] || '#ccc'
}

onMounted(async () => {
  const world = geojson;
  const projection = geoMercator().scale(100).translate([400, 200])
  const pathGenerator = geoPath().projection(projection)

  countries.value = world.features
    .map((feature) => {
      const iso = feature.id || feature.properties.ISO_A2 || null
      const path = pathGenerator(feature)
      const name = feature.properties.name || ''

      if (!iso) {
        console.log('Страна без ISO кода! Доступные ключи:', Object.keys(feature.properties))
      }

      return {
        id: iso,
        path: path || '',
        name: name
      }
    })
    .filter((country) => country.id && country.path)
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
