<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            {
                label: 'Путешествия',
                icon: 'pi pi-fw pi-compass',
                items: [
                    { label: 'Мои поездки', icon: 'pi pi-fw pi-map', to: '/trips' },
                    { label: 'Планирование', icon: 'pi pi-fw pi-calendar', to: '/planning' },
                    { label: 'Бюджет', icon: 'pi pi-fw pi-wallet', to: '/budget' },
                    { label: 'Заметки', icon: 'pi pi-fw pi-pencil', to: '/notes' },
                    { label: 'Документы', icon: 'pi pi-fw pi-file', to: '/documents' }
                ]
            }
        ]
    },
    {
        label: 'System',
        items: [
            { label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/settings' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
