<template>
    <div>
      <div v-if="!loading && data" class="card p-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full border overflow-hidden bg-gray-100 flex items-center justify-center">
            <img :src="flagUrl" alt="flag" class="w-12 h-12 object-cover" v-show="flagUrl" />
            <Skeleton v-show="!flagUrl" shape="circle" size="3rem" />
          </div>
          <div>
            <h2 class="text-lg font-semibold">{{ data.destination }}</h2>
            <p class="text-sm text-gray-500">{{ data.passport_of }} → {{ data.destination }}</p>
          </div>
        </div>
  
        <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3">
          <div class="space-y-2">
            <div><span class="font-medium">Виза:</span> <span>{{ data.visa }}</span></div>
            <div><span class="font-medium">Дополнительно:</span> <span>{{ data.except_text || 'Нет информации' }}</span></div>
            <div><span class="font-medium">Столица:</span> <span>{{ data.capital }}</span></div>
            <div><span class="font-medium">Валюта:</span> <span>{{ data.currency }}</span></div>
            <div><span class="font-medium">Телефонный код:</span> <span>{{ data.phone_code }}</span></div>
          </div>
  
          <div class="space-y-2">
            <div><span class="font-medium">Срок действия паспорта:</span> <span>{{ data.pass_valid }}</span></div>
            <div><span class="font-medium">Пребывание:</span> <span>{{ data.stay_of || 'Не указано' }}</span></div>
            <div><span class="font-medium">Часовой пояс:</span> <span>{{ data.timezone }}</span></div>
            <div v-if="data.link" class="flex items-center gap-2">
              <a :href="data.link" target="_blank" class="text-blue-600 hover:underline">Перейти на саит посольства</a>
              <button @click="copyLink" class="text-sm text-gray-500 hover:underline">Копировать ссылку</button>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else class="card p-4">
        <div class="flex items-center gap-4 mb-4">
          <Skeleton shape="circle" size="3rem" />
          <div class="flex flex-col gap-2">
            <Skeleton width="10rem" height="1rem" />
            <Skeleton width="8rem" height="0.8rem" />
          </div>
        </div>
  
        <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3">
          <div class="space-y-2">
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
          </div>
  
          <div class="space-y-2">
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
          </div>
        </div>
      </div>
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
  