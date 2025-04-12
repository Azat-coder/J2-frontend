import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { createSwapy, utils } from 'swapy';
import { useDashboardStore } from '@/shared/stores/useDashboardStore';

export function useDashboardSwapy() {
    const container = ref(null);
    const swapy = ref(null);
    const dashboardStore = useDashboardStore();

    const slotItemMap = ref(utils.initSlotItemMap(dashboardStore.dashboardItems, 'id'));
    const slottedItems = computed(() => utils.toSlottedItems(dashboardStore.dashboardItems, 'id', slotItemMap.value));

    watch(dashboardStore.dashboardItems, () => utils.dynamicSwapy(swapy.value, dashboardStore.dashboardItems, 'id', slotItemMap.value, (value) => (slotItemMap.value = value)), { deep: true });

    onMounted(() => {
        if (container.value) {
            swapy.value = createSwapy(container.value, {
                manualSwap: true
            });

            swapy.value.onSwap((event) => {
                console.log('swap', event); 
                requestAnimationFrame(() => { 
                    slotItemMap.value = event.newSlotItemMap.asArray 
                }) 
            }) 
        }
    });

    onUnmounted(() => {
        swapy.value?.destroy();
    });

    return {
        container,
        slottedItems
    };
}
