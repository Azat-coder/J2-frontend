<script setup lang="ts">
import { useDashboardStore } from '@/shared/stores/useDashboardStore'

const dashboard = useDashboardStore()

function handleMove(event) {
    console.log('[handleMove]', event)
    dashboard.saveDashboardState()
}

function handleResize(event) {
    console.log('[handleResize]', event)
    dashboard.saveDashboardState()
}

function handleMoveEnd(newLayout) {
    console.log('[handleMoveEnd]', newLayout)
    dashboard.handleMoveEnd(newLayout)
}
</script>

<template>
    <grid-layout
        v-model:layout="dashboard.dashboardLayout"
        :col-num="12"
        :row-height="30"
    >
        <template #default="{ gridItemProps }">
        <grid-item
            v-for="item in dashboard.dashboardLayout"
            v-bind="gridItemProps"
            :id="item.id"
            :key="item.id"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            @noc-resize="handleResize"
            @noc-move="handleMove"
            @noc-move-end="handleMoveEnd"
        >
            <component
                :is="dashboard.dashboardItems.find(w => w.id === item.id)?.component"
            />
        </grid-item>
        </template>
    </grid-layout>
</template>
