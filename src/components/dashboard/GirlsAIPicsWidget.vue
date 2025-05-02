<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useStorage } from '@vueuse/core'
import { onKeyStroke } from '@vueuse/core'
import { useFetch } from '@vueuse/core'

const searchValue = ref("");
const isLoading = ref(false);
const fullscreenVisible = ref(false);
const fullscreen = ref(false);

const toast = useToast();
const images = useStorage("girlPicsImages", [
    {
        "itemImageSrc": "https://blob.haxed.net/2Vfbevp7YG.png",
        "thumbnailImageSrc": "https://blob.haxed.net/2Vfbevp7YG.png"
    },
    {
        "itemImageSrc": "https://blob.haxed.net/iREuv2BIii.png",
        "thumbnailImageSrc": "https://blob.haxed.net/iREuv2BIii.png"
    },
    {
        "itemImageSrc": "https://blob.haxed.net/86Apd6lQMf.png",
        "thumbnailImageSrc": "https://blob.haxed.net/86Apd6lQMf.png"
    },
    {
        "itemImageSrc": "https://blob.haxed.net/CIjjYxiPdN.png",
        "thumbnailImageSrc": "https://blob.haxed.net/CIjjYxiPdN.png"
    },
    {
        "itemImageSrc": "https://blob.haxed.net/ZlbuSGird3.png",
        "thumbnailImageSrc": "https://blob.haxed.net/ZlbuSGird3.png"
    }
]);

const galleriaResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);

const loadPicture = async () => {
    const url = `https://ai-porn-nsfw-generator.p.rapidapi.com/?prompt=${searchValue.value}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '40f3bdcba4msh0655408d963936bp13b8f7jsn90c5c03b1d48',
            'x-rapidapi-host': 'ai-porn-nsfw-generator.p.rapidapi.com'
        }
    };

    try {
        isLoading.value = true;
        const response = await fetch(url, options);
        if (response.status === 200) {
            const result = await response.json();
            images.value = [{
                itemImageSrc: result.image,
                thumbnailImageSrc: result.image
            }, ...images.value, ];
            toast.add({ severity: 'success', summary: 'Успешно', detail: "Изображение было успешно сгенерировано", life: 1500 });
        } else {
            console.log("err response", response);
            toast.add({ severity: 'error', summary: 'Ошибка', detail: response.message, life: 2000 });
            if (response.status === 429) {
                toast.add({ severity: 'error', summary: 'Ошибка', detail: "Превышен лимит генерации на сегодня", life: 3000 });
            }
        }
    } catch (error) {
        console.error(error);
        isLoading.value = false;
        toast.add({ severity: 'error', summary: 'Ошибка', detail: error.message, life: 2000 });
    } finally {
        isLoading.value = false;
    }
};

onKeyStroke("Enter", () => {
    if (searchValue.value.length) handleGenerateImage(); 
})

const handleGenerateImage = () => {
    loadPicture();
    searchValue.value = "";
}
</script>

<template>
    <div class="w-full h-full">
        <div class="card mb-0 w-full h-full">
            <InputGroup class="mb-4">
                <Button label="Генерировать" @click="handleGenerateImage" />
                <InputText placeholder="Ключевые слова" v-model="searchValue" />
            </InputGroup>
            <div v-if="isLoading" class="flex justify-center items-center h-full">Идет генерация изображения...</div>
            <Galleria v-else :value="images" v-model:visible="fullscreenVisible" :fullScreen="fullscreen" :responsiveOptions="galleriaResponsiveOptions" :numVisible="5" containerStyle="max-width: 1200px">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="max-width: 120px;" />
                </template>
            </Galleria>
        </div>
    </div>
</template>