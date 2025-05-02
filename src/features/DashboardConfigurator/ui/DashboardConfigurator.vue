<template>
    <div v-if="treeTableValue && treeTableValue.length">
        <TreeTable :value="treeTableValue" selectionMode="checkbox" v-model:selectionKeys="selectedTreeTableValue">
            <Column field="name" header="Раздел" :expander="true"></Column>
            <Column field="size" header="Размер"></Column>
            <Column field="type" header="Тип"></Column>
        </TreeTable>
    </div>
    <div v-else>
        <p>Данные для дерева не загружены.</p>
    </div>
</template>

<script setup lang="ts">
import { useDashboard } from '@/shared/composables/dashboard/useDashboard';
import { nextTick, onMounted, ref, watch } from 'vue';

const treeTableValue = ref(null);
const selectedTreeTableValue = ref(null);

const dashboardStore = useDashboard();
const isUpdatingFromStore = ref(false);

onMounted(() => {
    treeTableValue.value = [
        {
            key: '0',
            data: {
                name: 'Личное',
                size: 'Большой',
                type: 'График'
            },
            children: [
                {
                    key: '0-0',
                    data: {
                        name: 'Коровы',
                        size: 'Средний',
                        type: 'График'
                    },
                    children: [
                        {
                            key: '0-0-0',
                            data: {
                                name: 'Коровы по возрастам',
                                id: "girlsbyage",
                                size: 'Средний',
                                type: 'График',
                            }
                        },
                        {
                            key: '0-0-1',
                            data: {
                                name: 'Коровы по весу',
                                id: "girlsbynationality",
                                size: 'Средний',
                                type: 'График',
                            }
                        },
                        {
                            key: '0-0-2',
                            data: {
                                name: 'Коровы по дням доения',
                                id: "ccdf",
                                size: 'Средний',
                                type: 'График',
                            }
                        },
                        {
                            key: '0-0-3',
                            data: {
                                name: 'Коровы по весу',
                                id: "girlsbyweight",
                                size: 'Средний',
                                type: 'График',
                            }
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: {
                        name: 'Тренировки',
                        size: 'Средний',
                        type: 'График'
                    }
                },
            ]
        },
        {
            key: '1',
            data: {
                name: 'Общая информация',
                size: 'Маленький',
                type: 'Виджет'
            },
            children: [
                {
                    key: '1-0-0',
                    data: {
                        name: 'Заказы',
                        size: 'Маленький',
                        type: 'Виджет',
                        id: 'orders',
                    }
                },
                {
                    key: '1-1-0',
                    data: {
                        name: 'Выручка',
                        size: 'Маленький',
                        type: 'Виджет',
                        id: 'revenue',
                    }
                },
                {
                    key: '1-2-0',
                    data: {
                        name: 'Комментарии',
                        size: 'Маленький',
                        type: 'Виджет',
                        id: 'comments',
                    }
                },
                {
                    key: '1-3-0',
                    data: {
                        name: 'Клиенты',
                        size: 'Маленький',
                        type: 'Виджет',
                        id: 'clients',
                    }
                }
            ]
        },
        {
            key: '2',
            data: {
                name: 'Экспериментальные разделы',
                size: 'Маленький',
                type: 'Виджет'
            },
            children: [
                {
                    key: '2-0-0',
                    data: {
                        name: 'Генератор фото девушек',
                        size: 'Маленький',
                        type: 'Виджет',
                        id: 'girlsAiPics',
                    }
                },
            ]
        },
    ];

    nextTick(() => {
        console.log('Инициализация данных дерева:', treeTableValue.value);
        syncSelectedFromDashboard(dashboardStore.dashboardLayout.value);
        processItems(dashboardStore.dashboardLayout.value);
    });
});

watch(selectedTreeTableValue, (value) => {
    if (isUpdatingFromStore.value) return;

    const selectedLeafKeys = Object.entries(value)
        .filter(([key, val]) => key.split('-').length === 3 && val.checked)
        .map(([key]) => key);

    const selectedIds: string[] = [];

    const traverse = (nodes) => {
        for (const node of nodes) {
            if (selectedLeafKeys.includes(node.key)) {
                selectedIds.push(node.data.id);
            }
            if (node.children) {
                traverse(node.children);
            }
        }
    };

    if (treeTableValue.value) {
        traverse(treeTableValue.value);
    }

    selectedIds.forEach((id) => {
        if (!dashboardStore.dashboardLayout.value.some(item => item.id === id)) {
            const widget = dashboardStore.dashboardItems.value.find(item => item.id === id);
            console.log("widget", widget);
            if (widget) {
                dashboardStore.addWidgetToLayout(widget);
            }
        }
    });

    dashboardStore.updateDashboardLayout(selectedIds);
}, { deep: true });

const processItems = (items) => {
    console.log("items", items);
    const selected = {};

    const markNode = (node) => {
        const isLeaf = !node.children || node.children.length === 0;

        if (isLeaf) {
            const isChecked = node.data?.id && items.some(i => i.id === node.data.id);

            if (isChecked) {
                selected[node.key] = { checked: true };
            }

            return isChecked;
        }

        const childrenCheckedStates = node.children.map(markNode);
        const checkedCount = childrenCheckedStates.filter(Boolean).length;

        if (checkedCount === node.children.length) {
            selected[node.key] = { checked: true };
            return true;
        } else if (checkedCount > 0) {
            selected[node.key] = { partialChecked: true };
            return true;
        } else {
            return false;
        }
    };

    if (treeTableValue.value) {
        treeTableValue.value.forEach(markNode);
    }

    isUpdatingFromStore.value = true;
    selectedTreeTableValue.value = selected;
    nextTick(() => {
        isUpdatingFromStore.value = false;
    });
};

watch(
    () => dashboardStore.dashboardLayout.value,
    processItems,
    { immediate: true, deep: true }
);

const syncSelectedFromDashboard = (items) => {
    if (!Array.isArray(treeTableValue.value)) return;

    const selected = {};

    const setCheckedKeys = (nodes) => {
        for (const node of nodes) {
            if (node.data?.id && items.some(i => i.id === node.data.id)) {
                selected[node.key] = { checked: true };
            }
            if (Array.isArray(node.children)) {
                setCheckedKeys(node.children);
            }
        }
    };

    setCheckedKeys(treeTableValue.value);

    isUpdatingFromStore.value = true;
    selectedTreeTableValue.value = selected;
    nextTick(() => {
        isUpdatingFromStore.value = false;
    });
};
</script>
