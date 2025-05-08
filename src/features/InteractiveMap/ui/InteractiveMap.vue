<template>
  <div
    ref="mapContainer"
    style="position: relative; width: 100%; height: 600px; font-family: Manrope; overflow: hidden; touch-action: none;"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <!-- Кнопка закрытия локальной карты -->
    <button
      v-if="selectedCountryMap"
      @click="closeCountryMap"
      style="position: absolute; top: 10px; right: 10px; background: #fff; color: #000; border: 1px solid #ccc; border-radius: 4px; padding: 5px 10px; cursor: pointer; z-index: 10; font-family: Manrope;"
    >
      ← Назад
    </button>

    <!-- Глобальная или локальная карта -->
    <svg
      width="100%"
      height="600"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      @mousemove="onMouseMove"
      @wheel.prevent="onWheel"
      @mousedown.prevent="onMouseDown"
      @mousemove.prevent="onDrag"
      @mouseup="onMouseUp"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
    >
      <g :transform="`translate(${translate.x}, ${translate.y}) scale(${scale})`">
        <g v-if="!selectedCountryMap">
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

        <!-- Карта выбранной страны с городами -->
        <g v-else>
          <path :d="selectedCountryMap" fill="#ccc" stroke="#fff" stroke-width="0.5" />
          <g v-for="city in selectedCountryCities" :key="city.city_id">
            <circle :cx="projectPoint(city.lng, city.lat)[0]" :cy="projectPoint(city.lng, city.lat)[1]" r="4" fill="red" />
            <text :x="projectPoint(city.lng, city.lat)[0] + 6" :y="projectPoint(city.lng, city.lat)[1] + 4">
              <tspan>{{ city.city_name }}</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>

    <ContextMenu ref="contextMenu" :model="contextMenuItems" />

    <Drawer v-model:visible="isDrawerVisible" header="Визовая информация" position="bottom" :style="{ height: isMobile ? '60vh' : '40vh' }">
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
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 768px)')

const countries = ref([])
const hoveredCountry = ref(null)
const selectedCountry = ref(null)
const selectedCountryMap = ref(null)
const selectedCountryCities = ref([])
const tooltip = ref({ visible: false, x: 0, y: 0, name: '' })
const clickableCountries = Object.values(iso2to3);
const contextMenu = ref(null);
const isDrawerVisible = ref(false);
const mapContainer = ref(null);

const contextMenuItems = ref([
  { label: 'Визовая информация', icon: 'pi pi-globe', command: handleVisaInformation },
  { label: 'Стоимость жизни', icon: 'pi pi-wallet' },
  { label: 'Погода', icon: 'pi pi-sun' },
  { separator: true },
  { label: 'Добавить к сравнению', icon: 'pi pi-chart-bar' }
]);

const iso3to2 = Object.fromEntries(Object.entries(iso2to3).map(([iso2, iso3]) => [iso3, iso2]))

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
      return { id: iso, path: path || '', name: name, feature }
    })
    .filter((country) => country.id && country.path)
})

function showCountryMap(isoCode) {
  const country = countries.value.find((c) => c.id === isoCode)
  if (!country) return

  const proj = geoMercator().fitSize([800, 400], country.feature)
  countryProjection.value = proj

  const pathGen = geoPath().projection(proj)
  selectedCountryMap.value = pathGen(country.feature)
  selectedCountryCities.value = cities.filter((c) => c.country_name === country.name)
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

// Масштабирование и перемещение
const scale = ref(1)
const translate = ref({ x: 0, y: 0 })
let isDragging = ref(false)
let dragStart = { x: 0, y: 0 }
let translateStart = { x: 0, y: 0 }
let velocity = { x: 0, y: 0 }
let lastDragTime = 0

function onWheel(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
  zoomAt(offsetX, offsetY, scaleFactor);
}

function zoomAt(x, y, factor) {
  const newScale = Math.min(Math.max(scale.value * factor, 0.5), 5);
  const dx = (x - translate.value.x) / scale.value;
  const dy = (y - translate.value.y) / scale.value;
  translate.value.x -= dx * (newScale - scale.value);
  translate.value.y -= dy * (newScale - scale.value);
  scale.value = newScale;
}

function onMouseDown(e) {
  isDragging.value = true
  dragStart = { x: e.clientX, y: e.clientY }
  translateStart = { ...translate.value }
  lastDragTime = Date.now();
}

function onDrag(e) {
  if (!isDragging.value) return
  const now = Date.now();
  const dx = e.clientX - dragStart.x;
  const dy = e.clientY - dragStart.y;
  translate.value = {
    x: translateStart.x + dx,
    y: translateStart.y + dy
  }
  velocity = { x: dx / (now - lastDragTime), y: dy / (now - lastDragTime) };
  lastDragTime = now;
}

function onMouseUp() {
  isDragging.value = false
  applyInertia()
}

function applyInertia() {
  // let friction = 0.95;
  // function step() {
  //   if (Math.abs(velocity.x) < 0.01 && Math.abs(velocity.y) < 0.01) return;
  //   translate.value.x += velocity.x * 16;
  //   translate.value.y += velocity.y * 16;
  //   velocity.x *= friction;
  //   velocity.y *= friction;
  //   requestAnimationFrame(step);
  // }
  // step();
}

// Touch pinch-zoom + pan
let lastTouchDistance = 0;
let lastTouchCenter = { x: 0, y: 0 };

function onTouchStart(e) {
  if (e.touches.length === 1) {
    onMouseDown(e.touches[0]);
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
    lastTouchCenter = {
      x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      y: (e.touches[0].clientY + e.touches[1].clientY) / 2
    };
  }
}

function onTouchMove(e) {
  if (e.touches.length === 1) {
    onDrag(e.touches[0]);
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const factor = distance / lastTouchDistance;
    zoomAt(lastTouchCenter.x, lastTouchCenter.y, factor);
    lastTouchDistance = distance;
  }
}

function onTouchEnd(e) {
  if (e.touches.length === 0) {
    onMouseUp();
  }
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
