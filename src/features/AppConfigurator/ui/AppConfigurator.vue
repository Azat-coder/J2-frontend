<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref } from 'vue';
import { useStyleConfig } from '@/shared/composables/useStyleConfig'
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { primaryColors as initialPrimaryColors, surfaces as initialSurfaces } from '@/shared/assets';

const { layoutConfig, isDarkTheme } = useLayout();
const { preset: initialPreset, primary: initialPrimary, surface: initialSurface, onPresetChange, updateColors } = useStyleConfig();

const preset = ref(initialPreset);
const presets = {
    Aura,
    Lara,
    Nora
};
const presetOptions = ref(Object.keys(presets));

const menuModeOptions = ref([
    { label: 'Статический', value: 'static' },
    { label: 'Оверлей', value: 'overlay' }
]);
const menuMode = ref(layoutConfig.menuMode);

function onMenuModeChange() {
    layoutConfig.menuMode = menuMode.value;
}

const primaryColors = ref(initialPrimaryColors);
const surfaces = ref(initialSurfaces);
</script>

<template>
    <div
        class="config-panel hidden absolute top-[3.25rem] right-0 w-64 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"
    >
        <div class="flex flex-col gap-4">
            <div>
                <span class="text-sm text-muted-color font-semibold">Основной цвет</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-between">
                    <button
                        v-for="primaryColor of primaryColors"
                        :key="primaryColor.name"
                        type="button"
                        :title="primaryColor.name"
                        @click="updateColors('primary', primaryColor)"
                        :class="['border-none w-5 h-5 rounded-full p-0 cursor-pointer outline-none outline-offset-1', { 'outline-primary': initialPrimary === primaryColor.name }]"
                        :style="{ backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}` }"
                    ></button>
                </div>
            </div>
            <div>
                <span class="text-sm text-muted-color font-semibold">Цвет фона</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-between">
                    <button
                        v-for="surface of surfaces"
                        :key="surface.name"
                        type="button"
                        :title="surface.name"
                        @click="updateColors('surface', surface)"
                        :class="[
                            'border-none w-5 h-5 rounded-full p-0 cursor-pointer outline-none outline-offset-1',
                            { 'outline-primary': initialSurface ? surface === initialSurface : isDarkTheme ? surface.name === 'zinc' : surface.name === 'slate' }
                        ]"
                        :style="{ backgroundColor: `${surface.palette['500']}` }"
                    ></button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-sm text-muted-color font-semibold">Пресеты</span>
                <SelectButton v-model="preset" @change="onPresetChange(preset)" :options="presetOptions" :allowEmpty="false" />
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-sm text-muted-color font-semibold">Режим меню</span>
                <SelectButton v-model="menuMode" @change="onMenuModeChange" :options="menuModeOptions" :allowEmpty="false" optionLabel="label" optionValue="value" />
            </div>
        </div>
    </div>
</template>
