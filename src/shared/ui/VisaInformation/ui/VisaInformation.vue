<template>
  <div class="p-4 space-y-6">
    <!-- Заголовок -->
    <h2 class="text-2xl font-bold">
      {{ city }}, {{ country }}
    </h2>
    <p class="text-gray-600">Курсы валют на {{ exchangeDate }}</p>

    <!-- Селекты -->
    <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      <!-- Валюта -->
      <Dropdown 
        v-model="selectedCurrency" 
        :options="currencyOptions" 
        optionLabel="label" 
        optionValue="value"
        placeholder="Выберите валюту"
        class="w-full md:w-30rem"
      >
        <template #value="slotProps">
          <div class="flex items-center" v-if="slotProps.value">
            <img 
              :src="`https://flagcdn.com/w40/${getCountryCode(slotProps.value)}.png`" 
              class="w-5 h-5 mr-2" 
            />
            {{ slotProps.label }}
          </div>
          <span v-else>{{ slotProps.placeholder }}</span>
        </template>
        <template #option="slotProps">
          <div class="flex items-center">
            <img 
              :src="`https://flagcdn.com/w40/${getCountryCode(slotProps.option.value)}.png`" 
              class="w-5 h-5 mr-2" 
            />
            {{ slotProps.option.label }}
          </div>
        </template>
      </Dropdown>

      <!-- Категория -->
      <Dropdown 
        v-model="selectedCategory" 
        :options="categoryOptions" 
        optionLabel="label" 
        optionValue="value" 
        placeholder="Выберите категорию"
        class="w-full md:w-30rem"
      />
    </div>

    <!-- График -->
    <Chart type="bar" :data="chartData" :options="chartOptions" class="w-full h-30rem" />

    <!-- Таблица -->
    <DataTable :value="filteredItems" responsiveLayout="scroll">
      <Column field="item_name" header="Товар">
        <template #body="{ data }">
          {{ itemTranslations[data.item_name] || data.item_name }}
        </template>
      </Column>
      <Column field="category_name" header="Категория">
        <template #body="{ data }">
          {{ categoryTranslations[data.category_name] || data.category_name }}
        </template>
      </Column>
      <Column field="min" :header="`Мин (${selectedCurrency})`">
        <template #body="{ data }">
          {{ formatPrice(convertCurrency(data.min)) }}
        </template>
      </Column>
      <Column field="avg" :header="`Сред (${selectedCurrency})`">
        <template #body="{ data }">
          {{ formatPrice(convertCurrency(data.avg)) }}
        </template>
      </Column>
      <Column field="max" :header="`Макс (${selectedCurrency})`">
        <template #body="{ data }">
          {{ formatPrice(convertCurrency(data.max)) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

  
  <script setup lang="ts">
  import { ref, toRefs, computed, watch } from 'vue'
  import { useVisaStore } from '../model'
  
  const props = defineProps<{ isoCode: string }>()
  const { isoCode } = toRefs(props)
  
  const visaStore = useVisaStore()
  const loading = ref(false)
  const data = ref<any>(null)
  const flagLoaded = ref(false)
  
  const flagUrl = computed(() => {
    return isoCode.value ? `https://flagcdn.com/w80/${isoCode.value.toLowerCase()}.png` : ''
  })
  
  const loadVisaInfo = async () => {
    if (!isoCode.value) return
    loading.value = true
    flagLoaded.value = false
    try {
      data.value = await visaStore.fetchVisaInfo(isoCode.value)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  
  const copyLink = () => {
    if (data.value.link) {
      navigator.clipboard.writeText(data.value.link)
    }
  }
  
  watch(
    isoCode,
    (newVal) => {
      if (newVal) loadVisaInfo()
    },
    { immediate: true }
  )
  </script>
  
  <style scoped>
  img {
    object-fit: cover;
  }
  </style>
  