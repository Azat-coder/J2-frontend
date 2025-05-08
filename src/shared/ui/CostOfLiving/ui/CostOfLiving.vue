<template>
    <div class="p-4 space-y-6">
      <!-- Заголовок -->
      <h2 class="text-2xl font-bold">
        {{ city }}, {{ country }}
      </h2>
      <p class="text-gray-600">Курсы валют на {{ exchangeDate }}</p>
  
      <!-- Селекты -->
      <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <!-- Категория -->
        <Dropdown 
          v-model="selectedCategory" 
          :options="categoryOptions" 
          optionLabel="label" 
          optionValue="value" 
          placeholder="Выберите категорию"
          class="w-full md:w-30rem"
        />
  
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
              {{ slotProps.value }}
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
      </div>
  
      <!-- График -->
      <Chart type="bar" :data="chartData" :options="chartOptions" class="w-full h-30rem" />
  
      <!-- Таблица -->
      <DataTable 
        :value="filteredItems" 
        responsiveLayout="scroll"
        filterDisplay="row"
        :filters="filters"
        @filter="onFilter"
      >
        <Column 
          field="item_name" 
          header="Товар" 
          :sortable="true" 
          filter 
          filterPlaceholder="Поиск товара"
        >
          <template #body="{ data }">
            {{ itemTranslations[data.item_name] || data.item_name }}
          </template>
        </Column>
  
        <Column 
          field="category_name" 
          header="Категория" 
          :sortable="true" 
          filter 
          filterPlaceholder="Поиск категории"
        >
          <template #body="{ data }">
            {{ categoryTranslations[data.category_name] || data.category_name }}
          </template>
        </Column>
  
        <Column 
          field="min" 
          :header="`Мин (${selectedCurrency})`" 
          :sortable="true"
        >
          <template #body="{ data }">
            {{ formatPrice(convertCurrency(data.min)) }}
          </template>
        </Column>
  
        <Column 
          field="avg" 
          :header="`Сред (${selectedCurrency})`" 
          :sortable="true"
        >
          <template #body="{ data }">
            {{ formatPrice(convertCurrency(data.avg)) }}
          </template>
        </Column>
  
        <Column 
          field="max" 
          :header="`Макс (${selectedCurrency})`" 
          :sortable="true"
        >
          <template #body="{ data }">
            {{ formatPrice(convertCurrency(data.max)) }}
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, reactive } from 'vue';
  import { result } from '../model/apiResultExample.ts';
  import { itemTranslations } from '../model/constants.ts';
  import { categoryTranslations } from '../model/constants.ts';
  
  // Город и страна
  const city = result.city_name;
  const country = result.country_name;
  
  // Дата курсов
  const exchangeDate = result.exchange_rates_updated.date;
  
  // Данные
  const allItems = ref(result.prices);
  
  // Валюта по умолчанию (рубль)
  const selectedCurrency = ref('RUB');
  
  // Список валют
  const currencyOptions = Object.keys(result.exchange_rate).map(code => ({
    label: code,
    value: code
  }));
  
  // Категории с "Все категории"
  const categoryOptions = [
    { label: 'Все категории', value: null },
    ...[...new Set(allItems.value.map(i => i.category_name))]
      .map(cat => ({ label: categoryTranslations[cat] || cat, value: cat }))
  ];
  
  const selectedCategory = ref(null);
  
  // Фильтрация по категории
  const filteredItems = computed(() => {
    return selectedCategory.value
      ? allItems.value.filter(item => item.category_name === selectedCategory.value)
      : allItems.value;
  });
  
  // Перевод валюты
  const convertCurrency = (value: number) => {
    const rate = result.exchange_rate[selectedCurrency.value] || 1;
    return value * rate;
  };
  
  // График
  const chartData = computed(() => {
    return {
      labels: filteredItems.value.map(i => itemTranslations[i.item_name] || i.item_name),
      datasets: [
        {
          label: `Мин (${selectedCurrency.value})`,
          backgroundColor: '#42A5F5',
          data: filteredItems.value.map(i => convertCurrency(i.min))
        },
        {
          label: `Сред (${selectedCurrency.value})`,
          backgroundColor: '#66BB6A',
          data: filteredItems.value.map(i => convertCurrency(i.avg))
        },
        {
          label: `Макс (${selectedCurrency.value})`,
          backgroundColor: '#FFA726',
          data: filteredItems.value.map(i => convertCurrency(i.max))
        }
      ]
    };
  });
  
  // Опции графика
  const chartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false }
    },
    scales: {
      x: { ticks: { autoSkip: false, maxRotation: 90, minRotation: 45 } },
      y: {
        beginAtZero: true,
        title: { display: true, text: `Цена (${selectedCurrency.value})` }
      }
    }
  }));
  
  // Формат цен
  const formatPrice = (value: number) => {
    return value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
  
  // Карта валют → коды флагов
  const getCountryCode = (currencyCode: string) => {
    const map: Record<string, string> = {
      USD: 'us', EUR: 'eu', RUB: 'ru', GBP: 'gb', AUD: 'au', CAD: 'ca',
      CNY: 'cn', CZK: 'cz', DKK: 'dk', HKD: 'hk', JPY: 'jp',
      NZD: 'nz', NOK: 'no', KRW: 'kr', CHF: 'ch', UAH: 'ua', SEK: 'se'
    };
    return map[currencyCode]?.toLowerCase() || 'us';
  };
  
  // Фильтры для таблицы
  const filters = reactive({
    item_name: { value: null, matchMode: 'contains' },
    category_name: { value: null, matchMode: 'contains' }
  });
  
  // Обработка фильтрации
  const onFilter = (e: any) => {
    Object.assign(filters, e.filters);
  };

  </script>
  
  <style scoped>
  /* Адаптивность графика */
  @media (max-width: 768px) {
    .h-30rem {
      height: 20rem !important;
    }
  }
  </style>
  