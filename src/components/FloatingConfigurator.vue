<script setup>
import { AppConfigurator } from '@/features/AppConfigurator';
import { DarkModeButton } from '@/features/DarkModeButton';
</script>

<template>
    <div class="fixed flex gap-4 top-8 right-8">
        <DarkModeButton />
        <div class="relative">
            <Button
                icon="pi pi-palette"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                type="button"
                rounded
            />
            <AppConfigurator />
        </div>
    </div>
</template>
