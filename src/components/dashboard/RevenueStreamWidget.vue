<script setup>
import { useStyleConfig } from '@/features/AppConfigurator/model';
import { useDarkMode } from '@/features/DarkModeButton/model';
import { onMounted, ref, watch } from 'vue';

const { getPrimary, getSurface } = useStyleConfig();
const { isDarkMode: isDarkTheme } = useDarkMode();
const chartData = ref(null);
const chartOptions = ref(null);

function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Голштинская', 'Костромская', 'Джерсейская', 'Абердин-Ангусская'],
        datasets: [
            {
                type: 'bar',
                label: '17-24',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                data: [1, 7, 6, 0],
                barThickness: 32
            },
            {
                type: 'bar',
                label: '25-29',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                data: [1, 0, 0, 0],
                barThickness: 42
            },
            {
                type: 'bar',
                label: '30+',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                data: [0, 1, 1, 0],
                borderRadius: {
                    topLeft: 8,
                    topRight: 8
                },
                borderSkipped: true,
                barThickness: 42
            }
        ]
    };
}

function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: 'transparent',
                    borderColor: 'transparent'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: borderColor,
                    borderColor: 'transparent',
                    drawTicks: false
                }
            }
        }
    };
}

watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

onMounted(() => {
    setTimeout(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    });
});
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Телки по возрастам</div>
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
    </div>
</template>
