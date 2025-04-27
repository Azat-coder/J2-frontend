import { useDashboardStore } from '@/shared/stores/dashboard'
import { watchEffect, watch, ref } from 'vue'
import { storeToRefs } from 'pinia'

export const useDashboard = () => {
    const dashboardStore = useDashboardStore()
    const { dashboardLayout, dashboardItems } = storeToRefs(dashboardStore)

    const isInitialized = ref(false)
    const normalize = (value: number) => Math.round(value)

    const saveDashboardState = () => {
        const config = dashboardLayout.value.map(item => ({
        id: item.id,
        x: normalize(item.x),
        y: normalize(item.y),
        w: normalize(item.w),
        h: normalize(item.h),
        }))

        console.log('[saveDashboardState] Сохраняем нормализованный конфиг:', config)
        localStorage.setItem('dashboard_layout', JSON.stringify(config))
    }

    const loadDashboardState = () => {
        const raw = localStorage.getItem('dashboard_layout')
        if (!raw) {
            console.log('[loadDashboardState] Нет сохранённого состояния')
            return
        }

        try {
            const config = JSON.parse(raw)
            console.log('[loadDashboardState] Загружаем конфиг:', config)

            dashboardLayout.value = config.map(item => ({ ...item }))
        } catch (e) {
            console.warn('Ошибка парсинга dashboard_layout:', e)
        }
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
        saveDashboardState()
    }

    const handleMoveEnd = (e) => {
        const { i, x, y, w, h } = e

        console.log(`[handleMoveEnd] Перед сохранением: ${i}`, {
            x: Math.round(x),
            y: Math.round(y),
            w: Math.round(w),
            h: Math.round(h),
        })

        const item = dashboardLayout.value.find(item => item.id === i)

        if (item) {
            item.x = Math.round(x)
            item.y = Math.round(y)
            item.w = Math.round(w)
            item.h = Math.round(h)
        }

        saveDashboardState()
    }

    const getWidgetComponentById = (id: string) => {
        return dashboardItems.value.find(widget => widget.id === id)?.component ?? null
    }

    const resetLayout = () => {
        console.log('[resetLayout] Сброс до дефолта')

        dashboardLayout.value = [
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
        ]
        saveDashboardState()
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
        dashboardLayout,
        updateLayout,
        saveDashboardState,
        loadDashboardState,
        handleMoveEnd,
        resetLayout,
        getWidgetComponentById,
    }
}