import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVisaStore = defineStore('visa', () => {
  const visaCache = ref<Record<string, any>>({})

  const fetchVisaInfo = async (isoCode: string) => {
    if (visaCache.value[isoCode]) {
      return visaCache.value[isoCode]
    }

    const url = 'https://visa-requirement.p.rapidapi.com/'
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '40f3bdcba4msh0655408d963936bp13b8f7jsn90c5c03b1d48',
        'x-rapidapi-host': 'visa-requirement.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        passport: 'RU',
        destination: isoCode,
      }),
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      visaCache.value[isoCode] = result
      return result
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return {
    visaCache,
    fetchVisaInfo,
  }
})
