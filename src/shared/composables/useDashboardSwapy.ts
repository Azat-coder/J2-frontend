import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import { createSwapy, utils } from 'swapy';
import { useDashboardStore } from '@/shared/stores/useDashboardStore';

export function useDashboardSwapy() {
    const container = ref(null);
    const swapy = ref(null);
    const dashboardStore = useDashboardStore();

    const slotItemMap = ref(
        dashboardStore.currentSlotMap.length
            ? dashboardStore.currentSlotMap
            : utils.initSlotItemMap(dashboardStore.dashboardItems, 'id')
    );
    const slottedItems = computed(() => utils.toSlottedItems(dashboardStore.dashboardItems, 'id', slotItemMap.value));

    const updateSwapy = async () => {    
        const newMap = utils.initSlotItemMap(dashboardStore.dashboardItems, 'id');
        slotItemMap.value = newMap;
    
        await nextTick();
    
        if (swapy.value) {
            swapy.value.destroy();
            swapy.value = null;
        }
    
        if (container.value) {
            swapy.value = createSwapy(container.value, {
                manualSwap: true
            });
    
            swapy.value.onSwap((event) => {
                console.log('swap', event);
                dashboardStore.updateItems(event);
                requestAnimationFrame(() => {
                    slotItemMap.value = event.newSlotItemMap.asArray;
                });
            });
        }
    };

    watch(
        () => dashboardStore.dashboardItems,
        () => updateSwapy(),
        { deep: true }
    );

    onMounted(() => {
        updateSwapy();
    });

    onUnmounted(() => {
        swapy.value?.destroy();
    });

    return {
        container,
        slottedItems
    };
}
