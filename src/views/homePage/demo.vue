<template>
    <div class="row" style="min-height: 100vh">
        <div class="col-sm-4">
            <a-radio-group v-model:value="picker">
                <a-radio-button value="week">Week</a-radio-button>
                <a-radio-button value="month">Month</a-radio-button>
                <a-radio-button value="quarter">Quarter</a-radio-button>
                <a-radio-button value="year">Year</a-radio-button>
            </a-radio-group>
            <br />
            <br />
            <a-space direction="vertical" :size="12">
                <a-range-picker v-model:value="data" :picker="picker" @change="handleDateChange" />
            </a-space>
        </div>
        <div class="col-sm-8">
            <Bar :ref="barChartRef" :data="dataChart" :options="options" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import weekday from 'dayjs/plugin/weekday';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);
dayjs.extend(quarterOfYear);

const data = ref<[Dayjs, Dayjs]>();
const picker = ref<'week' | 'month' | 'quarter' | 'year'>('week');
const startDate = ref<Dayjs | null>(null);
const endDate = ref<Dayjs | null>(null);
const weekRanges = ref<Array<[Dayjs, Dayjs]>>([]);
const monthRanges = ref<Array<[Dayjs, Dayjs]>>([]);
const quarterRanges = ref<Array<[Dayjs, Dayjs]>>([]);
const yearRanges = ref<Array<[Dayjs, Dayjs]>>([]);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataChart = ref({
    labels: [],
    datasets: [
        {
            label: 'Expenses',
            backgroundColor: '#f87979',
            data: [],
        },
        {
            label: 'Income',
            backgroundColor: '#7cb5ec',
            data: [],
        },
    ],
});

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

const barChartRef = ref(''); // Reference to the Bar chart component

const handleDateChange = (value: [Dayjs, Dayjs]) => {
    data.value = value;
    if (data.value) {
        const [start, end] = data.value;
        switch (picker.value) {
            case 'week':
                startDate.value = dayjs(start).startOf('week');
                endDate.value = dayjs(end).endOf('week');

                weekRanges.value = [];
                // eslint-disable-next-line no-case-declarations
                let currentWeek = dayjs(startDate.value);
                while (currentWeek.isSameOrBefore(endDate.value, 'week')) {
                    const weekStart: any = dayjs(currentWeek.startOf('week')).format('YYYY-MM-DD');
                    const weekEnd: any = dayjs(currentWeek.endOf('week')).format('YYYY-MM-DD');
                    weekRanges.value.push([weekStart, weekEnd]);
                    currentWeek = currentWeek.add(1, 'week');
                }
                console.log('weekRanges', weekRanges.value);
                break;

            case 'month':
                startDate.value = dayjs(start).startOf('month');
                endDate.value = dayjs(end).endOf('month');

                monthRanges.value = [];
                // eslint-disable-next-line no-case-declarations
                let currentMonth = dayjs(startDate.value);
                while (currentMonth.isSameOrBefore(endDate.value, 'month')) {
                    const monthStart: any = dayjs(currentMonth.startOf('month')).format(
                        'YYYY-MM-DD'
                    );
                    const monthEnd: any = dayjs(currentMonth.endOf('month')).format('YYYY-MM-DD');
                    monthRanges.value.push([monthStart, monthEnd]);
                    currentMonth = currentMonth.add(1, 'month');
                }
                console.log('monthRanges', monthRanges.value);
                break;

            case 'quarter':
                startDate.value = dayjs(start).startOf('quarter');
                endDate.value = dayjs(end).endOf('quarter');

                quarterRanges.value = [];
                // eslint-disable-next-line no-case-declarations
                let currentQuarter = dayjs(startDate.value);
                while (currentQuarter.isSameOrBefore(endDate.value)) {
                    const quarterStart: any = dayjs(currentQuarter.startOf('quarter')).format(
                        'YYYY-MM-DD'
                    );
                    const quarterEnd: any = dayjs(currentQuarter.endOf('quarter')).format(
                        'YYYY-MM-DD'
                    );
                    quarterRanges.value.push([quarterStart, quarterEnd]);
                    currentQuarter = currentQuarter.add(1, 'quarter');
                }
                console.log('quarterRanges', quarterRanges.value);
                break;

            case 'year':
                startDate.value = dayjs(start).startOf('year');
                endDate.value = dayjs(end).endOf('year');

                yearRanges.value = [];
                // eslint-disable-next-line no-case-declarations
                let currentYear: any = dayjs(startDate.value);
                while (currentYear.isSameOrBefore(endDate.value, 'year')) {
                    const yearStart: any = dayjs(currentYear.startOf('year')).format('YYYY-MM-DD');
                    const yearEnd: any = dayjs(currentYear.endOf('year')).format('YYYY-MM-DD');
                    yearRanges.value.push([yearStart, yearEnd]);
                    currentYear = currentYear.add(1, 'year');
                }
                console.log('yearRanges', yearRanges.value);
                break;
        }
    }
};

// Insert data into dataChart
const insertDataIntoChart = (dataResponse: any) => {
    dataChart.value.labels = dataResponse.map((item: any) => item.period);
    dataChart.value.datasets[0].data = dataResponse.map((item: any) =>
        parseFloat(item.dataQueryExpenses)
    );
    dataChart.value.datasets[1].data = dataResponse.map((item: any) =>
        parseFloat(item.dataQueryIncome)
    );
    console.log('dataChart', dataChart.value);
    if (barChartRef.value) {
        barChartRef.value = '123';
    }
};

// Provided data
const dataResponse = [
    {
        period: '2024-06-09 to 2024-06-15',
        dataQueryExpenses: 10000,
        dataQueryIncome: 20000,
    },
    {
        period: '2024-06-16 to 2024-06-22',
        dataQueryExpenses: 2000,
        dataQueryIncome: 5000,
    },
];

// Insert the provided data into the chart
onMounted(() => {
    insertDataIntoChart(dataResponse);
});

watch(dataResponse, () => {
    insertDataIntoChart(dataResponse);
});

watch(picker, () => {
    if (data.value) {
        handleDateChange(data.value);
        insertDataIntoChart(dataResponse);
    }
});
</script>

<style scoped>
/* CSS styling if needed */
</style>
