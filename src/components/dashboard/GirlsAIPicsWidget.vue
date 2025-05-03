<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { PinCodeGate } from '@/shared/ui/PinCodeGate';
import { useToast } from 'primevue/usetoast';
import { useStorage } from '@vueuse/core'
import { onKeyStroke } from '@vueuse/core'
import { useFetch } from '@vueuse/core'

const galleria = ref();
const searchValue = ref("");
const isLoading = ref(false);
const fullScreen = ref(false);
const activeIndex = ref(0);
const showThumbnails = ref(false);
const isAutoPlay = ref(false);

const toast = useToast();
const images = useStorage("girlPicsImages2", [
    {
        itemImageSrc: "https://blob.haxed.net/2Vfbevp7YG.png",
        thumbnailImageSrc: "https://blob.haxed.net/2Vfbevp7YG.png",
        title: "Title 1"
    },
    {
        itemImageSrc: "https://blob.haxed.net/iREuv2BIii.png",
        thumbnailImageSrc: "https://blob.haxed.net/iREuv2BIii.png",
        title: "Title 2"
    },
    {
        itemImageSrc: "https://blob.haxed.net/86Apd6lQMf.png",
        thumbnailImageSrc: "https://blob.haxed.net/86Apd6lQMf.png",
        title: "Title 3"
    },
    {
        itemImageSrc: "https://blob.haxed.net/CIjjYxiPdN.png",
        thumbnailImageSrc: "https://blob.haxed.net/CIjjYxiPdN.png",
        title: "Title 4"
    },
    {
        itemImageSrc: "https://blob.haxed.net/ZlbuSGird3.png",
        thumbnailImageSrc: "https://blob.haxed.net/ZlbuSGird3.png",
        title: "Title 5"
    }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const toggleAutoSlide = () => {
    isAutoPlay.value  = !isAutoPlay.value ;
};
const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};

const toggleFullScreen = () => {
    if (fullScreen.value ) {
        closeFullScreen();
    } else {
        openFullScreen();
    }
};
const onFullScreenChange = () => {
    fullScreen.value  = !fullScreen.value ;
};

const openFullScreen = () =>{
    let elem = galleria.value.$el;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};

const closeFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

const bindDocumentListeners = () => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
};
const unbindDocumentListeners = () => {
    document.removeEventListener('fullscreenchange', onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    document.removeEventListener('msfullscreenchange', onFullScreenChange);
};

const fullScreenIcon = computed(() => {
    return `pi ${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}`;
});
const slideButtonIcon = computed(() => {
    return `pi ${isAutoPlay.value ? 'pi-pause' : 'pi-play'}`;
});

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

onMounted(() => {
    bindDocumentListeners();
});
onUnmounted(() => {
    unbindDocumentListeners();
});
</script>

<template>
    <div class="w-full h-full">
        <PinCodeGate pin="3013">
            <div class="card mb-0 w-full h-full">
                <InputGroup class="mb-4">
                    <Button label="Генерировать" @click="handleGenerateImage" />
                    <InputText placeholder="Ключевые слова" v-model="searchValue" />
                </InputGroup>
                <div v-if="isLoading" class="flex justify-center items-center h-full">Идет генерация изображения...</div>
                <Galleria v-else
                    ref="galleria"
                    v-model:activeIndex="activeIndex"
                    :value="images"
                    :numVisible="5"
                    containerStyle="max-width: 1200px"
                    :showThumbnails="showThumbnails"
                    :showItemNavigators="true"
                    :showItemNavigatorsOnHover="true"
                    :circular="true"
                    :autoPlay="isAutoPlay"
                    :transitionInterval="3000"
                    :responsiveOptions="responsiveOptions"
                    :pt="{
                        root: {
                            class: [{ 'flex flex-col': fullScreen }]
                        },
                        content: {
                            class: ['relative', { 'flex-1 justify-center': fullScreen }]
                        },
                        thumbnails: 'absolute w-full left-0 bottom-0'
                    }"
                >
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid gap-4 justify-center">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                        </div>
                    </template>
                    <template #footer>
                        <div class="flex items-stretch bg-surface-950 text-white h-10">
                            <button type="button" @click="onThumbnailButtonClick" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3">
                                <i class="pi pi-th-large"></i>
                            </button>
                            <button type="button" @click="toggleAutoSlide" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"><i :class="slideButtonIcon"></i></button>
                            <span v-if="images" class="flex items-center gap-4 ml-3">
                                <span class="text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
                                <span class="font-bold text-sm">{{ images[activeIndex].title }}</span>
                                <span class="text-sm">{{ images[activeIndex].alt }}</span>
                            </span>
                            <button type="button" @click="toggleFullScreen" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto">
                                <i :class="fullScreenIcon"></i>
                            </button>
                        </div>
                    </template>
                </Galleria>
            </div>
        </PinCodeGate>
    </div>
</template>