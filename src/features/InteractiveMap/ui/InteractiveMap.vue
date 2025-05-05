<template>
  <div style="position: relative; width: 100%; height: 600px; font-family: Manrope;">
    <!-- Кнопка закрытия локальной карты -->
    <button
      v-if="selectedCountryMap"
      @click="closeCountryMap"
      style="
        position: absolute;
        top: 10px;
        right: 10px;
        background: #fff;
        color: #000;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
        z-index: 10;
        font-family: Manrope;
      "
    >
      ← Назад
    </button>

    <!-- Глобальная карта -->
    <svg
      v-if="!selectedCountryMap"
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

    <!-- Карта выбранной страны с городами -->
    <svg
      v-else
      width="100%"
      height="600"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        :d="selectedCountryMap"
        fill="#ccc"
        stroke="#fff"
        stroke-width="0.5"
      />
      <!-- Города -->
      <g v-for="city in selectedCountryCities" :key="city.city_id">
        <circle
          :cx="projectPoint(city.lng, city.lat)[0]"
          :cy="projectPoint(city.lng, city.lat)[1]"
          r="4"
          fill="red"
        />
        <text
          :x="projectPoint(city.lng, city.lat)[0] + 6"
          :y="projectPoint(city.lng, city.lat)[1] + 4"
          font-size="10"
          fill="#333"
          font-family="Manrope"
        >
          <tspan stroke="white" stroke-width="0.5" fill="black">
            {{ city.city_name }}
          </tspan>
        </text>
      </g>
    </svg>

    <ContextMenu ref="contextMenu" :model="contextMenuItems" />

    <Drawer 
      v-model:visible="isDrawerVisible" 
      header="Визовая информация" 
      position="bottom"
      :style="{ height: '40vh' }"
    >
        <VisaInformation :isoCode="iso3to2[selectedCountry]" />
    </Drawer>

    <div
      v-if="tooltip.visible && !selectedCountryMap"
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
        whiteSpace: 'nowrap',
        fontFamily: 'Manrope'
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
import { VisaInformation } from '@/shared/ui/VisaInformation'
import { worldCities as cities } from '@/shared/ui/CostOfLiving/model/cities.ts'

const countries = ref([])
const hoveredCountry = ref(null)
const selectedCountry = ref(null)
const selectedCountryMap = ref(null)
const selectedCountryCities = ref([])
const tooltip = ref({ visible: false, x: 0, y: 0, name: '' })
const clickableCountries = Object.values(iso2to3);
const contextMenu = ref(null);
const isDrawerVisible = ref(false);

const contextMenuItems = ref([
    { label: 'Визовая информация', icon: 'pi pi-globe', command: handleVisaInformation },
    { label: 'Стоимость жизни', icon: 'pi pi-wallet' },
    { label: 'Погода', icon: 'pi pi-sun' },
    { separator: true },
    { label: 'Добавить к сравнению', icon: 'pi pi-chart-bar' }
]);

const iso3to2 = Object.fromEntries(
  Object.entries(iso2to3).map(([iso2, iso3]) => [iso3, iso2])
)

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
    showCountryMap(isoCode)
  }
}

function handleContextMenuClick(event, isoCode) {
  if (isClickable(isoCode)) {
    selectedCountry.value = isoCode
  }
  nextTick(() => contextMenu.value.show(event))
}

function handleVisaInformation() {
  isDrawerVisible.value = true;
}

function getCountryFill(isoCode) {
  if (selectedCountry.value === isoCode) return '#ffcc00'
  if (hoveredCountry.value === isoCode) return '#88d8c0'
  return countryColorMap[isoCode] || '#ccc'
}

let projection;

onMounted(async () => {
  const world = geojson;
  projection = geoMercator().scale(100).translate([400, 200])
  const pathGenerator = geoPath().projection(projection)

  countries.value = world.features
    .map((feature) => {
      const iso = feature.id || feature.properties.ISO_A2 || null
      const path = pathGenerator(feature)
      const name = feature.properties.name || ''

      if (!iso) {
        console.log('Страна без ISO кода! Доступные ключи:', Object.keys(feature.properties))
      }

      return { id: iso, path: path || '', name: name, feature }
    })
    .filter((country) => country.id && country.path)
})

function showCountryMap(isoCode) {
  const country = countries.value.find((c) => c.id === isoCode)
  if (!country) return

  const proj = geoMercator().fitSize([800, 400], country.feature)
  countryProjection.value = proj // Сохраняем проекцию для городов

  const pathGen = geoPath().projection(proj)
  selectedCountryMap.value = pathGen(country.feature)

  // Фильтруем города (примерно по country_name)
  selectedCountryCities.value = cities.filter(
    (c) => c.country_name === country.name
  )
}

const countryProjection = ref(null)

function projectPoint(lon, lat) {
  return countryProjection.value ? countryProjection.value([lon, lat]) : [0, 0]
}

function closeCountryMap() {
  selectedCountry.value = null
  selectedCountryMap.value = null
  selectedCountryCities.value = []
}
</script>

<style scoped>
svg {
  user-select: none;
  transition: all 0.2s ease;
  font-family: Manrope;
}

path {
  transition: fill 0.2s ease;
}

text {
  font-family: Manrope;
  pointer-events: none;
  font-size: 10px;
  fill: #333;
}

tspan {
  stroke: white;
  stroke-width: 0.5;
  fill: black;
}
</style>
