<script setup>
import { PolarMap } from '@/features/PolarMap'
import {ref } from 'vue'
const mapMode = ref();
</script>

<template>
    <div class="w-full h-full">
        <div class="card mb-0 w-full h-full">
            <div class="relative top-0 left-0">
                <ToggleButton v-model="mapMode" onLabel="Карта мира" offLabel="Визовая доступность" :style="{ width: '15rem' }" />
            </div>
        
            <PolarMap :mapMode />
        </div>
    </div>
</template>