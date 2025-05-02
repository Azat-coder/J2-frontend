<script setup lang="ts">
import { useDashboard } from '@/shared/composables/dashboard/useDashboard'

const { dashboardLayout, saveDashboardState, handleMoveEnd, getWidgetComponentById} = useDashboard("analytics");

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
    <h3 class="text-center">График</h3>
    <grid-layout
        v-model:layout="dashboardLayout"
        :col-num="12"
        :row-height="30"
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
