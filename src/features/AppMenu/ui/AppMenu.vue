<script setup>
import { ref } from 'vue';

import { AppMenuItem } from '@/shared/ui/AppMenuItem';

const model = ref([
    {
        label: 'Главное',
        items: [{ label: 'Дашборд', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Путешествия',
        items: [
            { label: 'График', icon: 'pi pi-fw pi-id-card', to: '/schedule' },
            { label: 'Анализ стран', icon: 'pi pi-fw pi-map', to: '/worldMap' },
            { label: 'Расчет остатка дней', icon: 'pi pi-fw pi-check-square', to: '' },
            { label: 'План', icon: 'pi pi-fw pi-mobile', to: '', class: 'rotated-icon' }
        ]
    },
    {
        label: 'Компоненты',
        items: [
            {
                label: 'UI компоненты',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
                    { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
                    { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
                    { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu' },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
                    { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/uikit/timeline' },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
                ]
            },
            {
                label: 'Страницы',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        to: '/landing'
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                to: '/auth/login'
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                to: '/auth/error'
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                to: '/auth/access'
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        to: '/pages/crud'
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        to: '/pages/notfound'
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        to: '/pages/empty'
                    }
                ]
            }
        ]
    },
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

<style lang="scss" scoped>
.layout-menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
</style>
