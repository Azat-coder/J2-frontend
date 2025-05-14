<template>
  <div class="p-4 space-y-6">
      <!-- Заголовок -->
      <h2 class="text-2xl font-bold">
      {{ cityName }}, {{ countryName }}
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
      <Chart v-if="filteredItems.length" type="bar" :data="chartData" :options="chartOptions" class="w-full h-30rem" />

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
import { ref, computed, reactive, toRefs, onMounted, watch } from 'vue';
import { itemTranslations } from '../model/constants.ts';
import { categoryTranslations } from '../model/constants.ts';
import { useToast } from 'primevue/usetoast';
import { useLocalStorage } from '@vueuse/core';

const props = defineProps<{
  cityName: string;
  countryName: string;
}>();

const { cityName, countryName } = toRefs(props);

const result = ref<any>(null);
const allItems = ref<any[]>([]);
const exchangeDate = ref('');
const currencyOptions = ref<{ label: string; value: string }[]>([]);
const categoryOptions = ref<{ label: string; value: string | null }[]>([]);

const toast = useToast();

// Ключ для локалстораджа, можно сделать зависимым от города/страны
// const storageKey = `cost_of_living_${cityName.value}_${countryName.value}`;

// const cachedData = useLocalStorage<any>(storageKey, null, {
//   serializer: {
//       read: (v: string) => JSON.parse(v),
//       write: (v: any) => JSON.stringify(v)
//   }
// });

const storageKey = 'cost_of_living_data';

const storage = useLocalStorage<Record<string, { cachedAt: number; data: any }>>(storageKey, {}, {
  serializer: {
    read: (v: string) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
});

// Валюта по умолчанию
const selectedCurrency = ref('RUB');
// Категория по умолчанию
const selectedCategory = ref(null);

// Табличные фильтры
const filters = reactive({
  item_name: { value: null, matchMode: 'contains' },
  category_name: { value: null, matchMode: 'contains' }
});

// Загрузка данных с API
const loadCostOfLivingInfo = async () => {
  const now = Date.now();
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const cityKey = `${cityName.value}_${countryName.value}`;

  const cachedEntry = storage.value[cityKey];

  if (cachedEntry && now - cachedEntry.cachedAt < sevenDaysMs) {
    result.value = cachedEntry.data;
    allItems.value = cachedEntry.data.prices;
    exchangeDate.value = cachedEntry.data.exchange_rates_updated?.date || '';

    // Валюты
    currencyOptions.value = Object.keys(result.value.exchange_rate).map(key => ({
      label: key,
      value: key
    }));

    // Категории
    const uniqueCategories = Array.from(new Set(result.value.prices.map((i: any) => i.category_name)));
    categoryOptions.value = uniqueCategories.map((c: string) => ({
      label: categoryTranslations[c] || c,
      value: c
    }));

    toast.add({
      severity: 'info',
      summary: 'Загружено из кэша',
      detail: `Данные закешированы ${new Date(cachedEntry.cachedAt).toLocaleString('ru-RU', { dateStyle: 'long' })}`,
      life: 3000
    });

    return;
  }

  // Если данных нет или они устарели — делаем запрос
  const url = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${cityName.value}&country_name=${countryName.value}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '40f3bdcba4msh0655408d963936bp13b8f7jsn90c5c03b1d48',
      'x-rapidapi-host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.status === 429) {
      toast.add({ severity: 'error', summary: 'Ошибка', detail: "Превышен лимит генерации на сегодня", life: 3000 });
      return;
    }

    result.value = data;
    allItems.value = data.prices;
    exchangeDate.value = data.exchange_rates_updated?.date || '';

    // Валюты
    currencyOptions.value = Object.keys(result.value.exchange_rate).map(key => ({
      label: key,
      value: key
    }));

    // Категории
    const uniqueCategories = Array.from(new Set(result.value.prices.map((i: any) => i.category_name)));
    categoryOptions.value = uniqueCategories.map((c: string) => ({
      label: categoryTranslations[c] || c,
      value: c
    }));

    // Обновляем хранилище
    storage.value = {
      ...storage.value,
      [cityKey]: {
        cachedAt: now,
        data,
      }
    };

  } catch (error) {
    console.error(error);
    toast.add({ severity: 'error', summary: 'Ошибка', detail: "Не удалось загрузить данные", life: 3000 });
  }
};

// Фильтрация по выбранной категории
const filteredItems = computed(() => {
  let items = allItems.value;

  if (selectedCategory.value) {
      items = items.filter(i => i.category_name === selectedCategory.value);
  }

  // Табличные фильтры (поиск)
  if (filters.item_name.value) {
      items = items.filter(i =>
      (itemTranslations[i.item_name] || i.item_name)
          .toLowerCase()
          .includes(filters.item_name.value.toLowerCase())
      );
  }
  if (filters.category_name.value) {
      items = items.filter(i =>
      (categoryTranslations[i.category_name] || i.category_name)
          .toLowerCase()
          .includes(filters.category_name.value.toLowerCase())
      );
  }

  return items;
});

// Конвертация валюты
const convertCurrency = (value: number) => {
  if (!result.value) return value;
  const rate = result.value.exchange_rate[selectedCurrency.value] || 1;
  return value * rate;
};

// График
const chartData = computed(() => ({
  labels: filteredItems.value.map(i => itemTranslations[i.item_name] || i.item_name),
  datasets: [
      {
      label: `Мин (${selectedCurrency.value})`,
      backgroundColor: '#42A5F5',
      data: filteredItems.value.map(i => convertCurrency(Number(i?.usd?.min)))
      },
      {
      label: `Сред (${selectedCurrency.value})`,
      backgroundColor: '#66BB6A',
      data: filteredItems.value.map(i => convertCurrency(Number(i?.usd?.avg)))
      },
      {
      label: `Макс (${selectedCurrency.value})`,
      backgroundColor: '#FFA726',
      data: filteredItems.value.map(i => convertCurrency(Number(i?.usd?.max)))
      }
  ]
}));

// Настройки графика
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

// Форматирование цен
const formatPrice = (value: number) => {
  return value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Карта валют → флаги
const getCountryCode = (currencyCode: string) => {
  const map: Record<string, string> = {
      USD: 'us', EUR: 'eu', RUB: 'ru', GBP: 'gb', AUD: 'au', CAD: 'ca',
      CNY: 'cn', CZK: 'cz', DKK: 'dk', HKD: 'hk', JPY: 'jp',
      NZD: 'nz', NOK: 'no', KRW: 'kr', CHF: 'ch', UAH: 'ua', SEK: 'se'
  };
  return map[currencyCode]?.toLowerCase() || 'us';
};

// Обработка фильтров таблицы
const onFilter = (e: any) => {
  Object.assign(filters, e.filters);
};

onMounted(() => {
  loadCostOfLivingInfo();
});
</script>

<style scoped>
/* Адаптивность графика */
@media (max-width: 768px) {
  .h-30rem {
      height: 20rem !important;
  }
}
</style>
