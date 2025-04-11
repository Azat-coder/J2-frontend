<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const treeTableValue = ref(null);
const selectedTreeTableValue = ref(null);

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
                        name: 'Девушки',
                        size: 'Средний',
                        type: 'График'
                    },
                    children: [
                        {
                            key: '0-0-0',
                            data: {
                                name: 'Девушки по возрастам',
                                size: 'Средний',
                                type: 'График'
                            }
                        },
                        {
                            key: '0-0-1',
                            data: {
                                name: 'Девушки по национальности',
                                size: 'Средний',
                                type: 'График'
                            }
                        },
                        {
                            key: '0-0-2',
                            data: {
                                name: 'Девушки по упитанности',
                                size: 'Средний',
                                type: 'График'
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
                {
                    key: '0-2',
                    data: {
                        name: 'Рестораны',
                        size: 'Средний',
                        type: 'График'
                    }
                }
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
                    key: '1-0',
                    data: {
                        name: 'Заказы',
                        size: 'Маленький',
                        type: 'Виджет'
                    }
                },
                {
                    key: '1-1',
                    data: {
                        name: 'Выручка',
                        size: 'Маленький',
                        type: 'Виджет'
                    }
                },
                {
                    key: '1-2',
                    data: {
                        name: 'Комментарии',
                        size: 'Маленький',
                        type: 'Виджет'
                    }
                },
                {
                    key: '1-3',
                    data: {
                        name: 'Клиенты',
                        size: 'Маленький',
                        type: 'Виджет'
                    }
                }
            ]
        },
        {
            key: '2',
            data: {
                name: 'Продажи',
                size: 'Средний',
                type: 'Разное'
            },
            children: [
                {
                    key: '2-0',
                    data: {
                        name: 'Последние продажи',
                        size: 'Средний',
                        type: 'Таблица'
                    }
                },
                {
                    key: '2-1',
                    data: {
                        name: 'Уведомления',
                        size: 'Средний',
                        type: 'Таблица'
                    }
                },
                {
                    key: '2-2',
                    data: {
                        name: 'Бестселлеры',
                        size: 'Средний',
                        type: 'Таблица'
                    }
                }
            ]
        }
    ];
});

watch(selectedTreeTableValue, () => {
    console.log('selectedTreeTableValue', selectedTreeTableValue);
});
</script>

<template>
    <TreeTable :value="treeTableValue" selectionMode="checkbox" v-model:selectionKeys="selectedTreeTableValue">
        <Column field="name" header="Раздел" :expander="true"></Column>
        <Column field="size" header="Размер"></Column>
        <Column field="type" header="Тип"></Column>
    </TreeTable>
</template>
