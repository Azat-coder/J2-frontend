<template>
    <div ref="mapContainer" style="position: relative; width: 100%; height: 100%; overflow: hidden;">
      <svg ref="svgRef" :width="mapSize" :height="mapSize" style="position: absolute; top: 0; left: 0;">
        <g ref="globeRef">
          <path
            v-for="country in countries"
            :key="country.id"
            :d="country.path"
            :fill="getCountryFill(country.id)"
            stroke="#fff"
            stroke-width="0.5"
            @contextmenu.prevent="(e) => handleContextMenuClick(e, country.id, country.name)"
            :style="{ cursor: isClickable(country.id) ? 'pointer' : 'default' }"
          />
        </g>
      </svg>

      <ContextMenu ref="contextMenu" :model="contextMenuItems" />

    <Drawer v-model:visible="isDrawerVisible" header="Визовая информация" position="bottom" :style="{ height: '40vh' }">
      <VisaInformation :isoCode="iso3to2[selectedCountry]" />
    </Drawer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import * as d3 from 'd3'
  import { geojson } from '@/shared/assets/geojson.ts'
  import { iso2to3, countriesAvailability } from '@/shared/assets/constants.ts'
  import { VisaInformation } from '@/shared/ui/VisaInformation'
  
  const mapContainer = ref(null)
  const svgRef = ref(null)
  const globeRef = ref(null)
  const mapSize = ref(0)
  const countries = ref([])

  const selectedCountry = ref(null)
const contextMenu = ref(null)
const isDrawerVisible = ref(false)

const contextMenuItems = ref([
  { label: 'Визовая информация', icon: 'pi pi-globe', command: handleVisaInformation },
  { label: 'Стоимость жизни', icon: 'pi pi-wallet' },
  { label: 'Погода', icon: 'pi pi-sun' },
  { separator: true },
  { label: 'Добавить к сравнению', icon: 'pi pi-chart-bar' }
])

const iso3to2 = Object.fromEntries(Object.entries(iso2to3).map(([iso2, iso3]) => [iso3, iso2]))
  
  const rotation = ref([0, 0])
  const scale = ref(0)
  
  const projection = d3.geoOrthographic()
  const pathGenerator = d3.geoPath().projection(projection)
  
  const clickableCountries = Object.values(iso2to3)
  
  const countryColorMap = Object.fromEntries(
    countriesAvailability.map(({ countryCode, color }) => [iso2to3[countryCode], color])
  )
  
  function isClickable(isoCode) {
    return isoCode && clickableCountries.includes(isoCode)
  }
  
  function getCountryFill(isoCode) {
    return countryColorMap[isoCode] || '#ccc'
  }

  function handleContextMenuClick(event, isoCode) {
    selectedCountry.value = isoCode
    nextTick(() => contextMenu.value.show(event))
}

function handleVisaInformation() {
  isDrawerVisible.value = true
}
  
  function resize() {
    if (!mapContainer.value) return
    mapSize.value = Math.min(mapContainer.value.clientWidth, mapContainer.value.clientHeight)
  
    // Глобус теперь будет на 45% радиуса контейнера (почти вплотную к краю)
    scale.value = (mapSize.value / 2) * 0.9
  
    projection
      .translate([mapSize.value / 2, mapSize.value / 2])
      .scale(scale.value)
      .rotate(rotation.value)
  
    redraw()
  }
  
  function redraw() {
    countries.value = geojson.features.map((feature) => {
      return {
        id: feature.id || feature.properties.ISO_A2 || null,
        name: feature.properties.name || '',
        feature,
        path: pathGenerator(feature) || ''
      }
    })
  }
  
  let rotateTimeout: any = null
  let rotationTimer: number | null = null
  let isUserInteracted = ref(false)  // Флаг для отслеживания взаимодействия пользователя
  
  // ✅ Автоворот
  function startAutoRotate() {
    if (isUserInteracted.value) return // Если пользователь взаимодействовал, не запускаем автоворот
  
    rotationTimer = requestAnimationFrame(() => {
      // Уменьшаем скорость вращения в 3 раза
      rotation.value = [rotation.value[0] + 0.0667, rotation.value[1]]  // (0.2 / 3) = 0.0667
      projection.rotate(rotation.value)
      redraw()
      startAutoRotate()
    })
  }
  
  function stopAutoRotate() {
    if (rotationTimer !== null) cancelAnimationFrame(rotationTimer)
  }
  
  function pauseAutoRotate() {
    if (rotateTimeout) clearTimeout(rotateTimeout)
    stopAutoRotate()
    rotateTimeout = setTimeout(startAutoRotate, 3000) // Автоворот снова через 3 секунды бездействия
  }
  
  function setupInteraction() {
  const svg = d3.select(svgRef.value)

  // Вращение карты
  svg.call(d3.drag()
    .on('start', () => {
      svg.style('cursor', 'grabbing')
      isUserInteracted.value = true
      pauseAutoRotate()
    })
    .on('drag', (event) => {
      rotation.value = [rotation.value[0] + event.dx * 0.5, rotation.value[1] - event.dy * 0.5]
      projection.rotate(rotation.value)
      redraw()
    })
    .on('end', () => {
      svg.style('cursor', 'default')
    })
  )

  // Зум (поддерживает и колесо мыши, и pinch жесты)
  svg.call(d3.zoom()
    .scaleExtent([0.5, 5])
    .on('zoom', (event) => {
      scale.value = ((mapSize.value / 2) * 0.9) * event.transform.k
      projection.scale(scale.value)
      redraw()  // Без анимаций для естественного pinch zoom
      isUserInteracted.value = true
    })
  )
}
  
  let resizeObserver: ResizeObserver
  
  onMounted(() => {
    projection.clipAngle(90)
  
    resizeObserver = new ResizeObserver(resize)
    if (mapContainer.value) resizeObserver.observe(mapContainer.value)
  
    setupInteraction()
    resize()
    startAutoRotate() // Начинаем автоворот
  })
  
  onUnmounted(() => {
    resizeObserver.disconnect()
    stopAutoRotate()
    if (rotateTimeout) clearTimeout(rotateTimeout)
  })
  </script>
  
  <style scoped>
  svg {
    user-select: none;
    touch-action: none; /* 🚩 Блокирует скролл pinch жестами по умолчанию */
    }
  
  path {
    transition: fill 0.2s ease;
    transition: transform 0.5s ease; /* Плавное движение для стран */
  }
  </style>
  