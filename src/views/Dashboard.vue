<script setup lang="ts">
import { useDashboard } from '@/shared/composables/dashboard/useDashboard'
import { useDashboardConfiguratorStore } from '@/shared/stores/useDashboardConfiguratorStore';

const { dashboardLayout, saveDashboardState, handleMoveEnd, getWidgetComponentById} = useDashboard();
const dashboardConfiguratorStore = useDashboardConfiguratorStore();

function handleMove(event) {
    console.log('[handleMove]', event)
    saveDashboardState()
}

function handleResize(event) {
    console.log('[handleResize]', event)
    saveDashboardState()
}

function moveEnd(newLayout) {
    console.log('[handleMoveEnd]', newLayout)
    handleMoveEnd(newLayout)
}
</script>

<template>
    <grid-layout
        v-model:layout="dashboardLayout"
        :col-num="12"
        :row-height="30"
        :isDraggable="dashboardConfiguratorStore.isDashboardOpened"
        :isResizable="dashboardConfiguratorStore.isDashboardOpened"
        :responsive="true"
    >
        <template #default="{ gridItemProps }">
        <grid-item
            v-for="item in dashboardLayout"
            v-bind="gridItemProps"
            :id="item.id"
            :key="item.id"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            style="overflow: hidden;"
            @noc-resize="handleResize"
            @noc-move="handleMove"
            @noc-move-end="moveEnd"
        >
            <component
                :is="getWidgetComponentById(item.id)"
            />
        </grid-item>
        </template>
    </grid-layout>
</template>
