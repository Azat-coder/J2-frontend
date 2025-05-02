import { storeToRefs } from 'pinia'
import { useMainDashboardStore } from '@/shared/stores/useMainDashboardStore'
import { ref, watch, watchEffect } from 'vue'
import { useAnalyticsDashboardStore } from '@/shared/stores/useAnalyticsDashboardStore'

const dashboardStoreMap = {
    main: useMainDashboardStore,
    analytics: useAnalyticsDashboardStore,
  // можно добавлять сколько угодно других дашбордов
}

export function useDashboard(storeId: keyof typeof dashboardStoreMap = 'main') {
    const storeInstance = dashboardStoreMap[storeId]()
    const { dashboardItems, dashboardLayout } = storeToRefs(storeInstance)

    const isInitialized = ref(false)

  // Логика обработки события перемещения
    const handleMoveEnd = (e) => {
        const { i, x, y, w, h } = e
        const item = dashboardLayout.value.find(item => item.id === i)
        if (item) {
        item.x = Math.round(x)
        item.y = Math.round(y)
        item.w = Math.round(w)
        item.h = Math.round(h)
        }
        storeInstance.saveDashboardState() // Сохраняем состояние после перемещения
    }

    const updateLayout = (newLayout) => {
        for (const item of newLayout) {
            const existing = dashboardLayout.value.find(i => i.id === item.id)
            if (existing) {
                existing.x = item.x
                existing.y = item.y
                existing.w = item.w
                existing.h = item.h
            }
        }
    storeInstance.saveDashboardState()
}

    const resetLayout = () => {
        console.log('[resetLayout] Сброс до дефолта')

        dashboardLayout.value = [
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
        ]
        storeInstance.saveDashboardState()
    }

    // Взаимодействие с состоянием (сохранение/загрузка)
    const saveDashboardState = () => {
        storeInstance.saveDashboardState()
    }

    const loadDashboardState = () => {
        storeInstance.loadDashboardState()
    }

    const findWidgetComponent = (id: string) => {
        return dashboardItems.value.find(w => w.id === id)?.component || null
    }

    const getWidgetComponentById = (id: string) => {
        return dashboardItems.value.find(widget => widget.id === id)?.component ?? null
    }

    const addWidgetToLayout = (widget) => {
        dashboardLayout.value.push({
            id: widget.id,
            x: 0,
            y: 0,
            w: widget.initialSizes.w,
            h: widget.initialSizes.h
        });
    }

    const updateDashboardLayout = (selectedIds) => {
        dashboardLayout.value = dashboardLayout.value.filter(item =>
            selectedIds.includes(item.id)
        );
    }

    watchEffect(() => {
        if (!isInitialized.value) {
            console.log('[watchEffect] Инициализация')
            loadDashboardState()
            isInitialized.value = true
        }
    })

    watch(
        () => dashboardLayout.value,
        () => {
            saveDashboardState()
        },
        { deep: true }
    )

    return {
        dashboardItems,
        dashboardLayout,
        findWidgetComponent,
        handleMoveEnd,
        updateLayout,
        resetLayout,
        saveDashboardState,
        loadDashboardState,
        getWidgetComponentById,
        addWidgetToLayout,
        updateDashboardLayout,
    }
}