import { defineStore } from 'pinia'
import { ref } from 'vue'

export function createDashboardStore(options: {
    storageKey: string,
    widgets: { id: string, component: any, initialSizes: { w: number, h: number } }[]
}) {
    return defineStore(`dashboard-${options.storageKey}`, () => {
        const dashboardItems = ref(options.widgets)
        const dashboardLayout = ref(options.widgets.map(w => ({
            id: w.id,
            x: 0,
            y: 0,
            w: w.initialSizes.w,
            h: w.initialSizes.h
        })))

        const saveDashboardState = () => {
            localStorage.setItem(options.storageKey, JSON.stringify(dashboardLayout.value))
        }

        const loadDashboardState = () => {
            const raw = localStorage.getItem(options.storageKey)
            if (raw) {
                dashboardLayout.value = JSON.parse(raw)
            }
        }

        return {
            dashboardItems,
            dashboardLayout,
            saveDashboardState,
            loadDashboardState,
        }
    })
}
