<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
        validator(value) {
            // Ensure each option has an id and value
            return value.every((opt) => 'id' in opt && 'value' in opt);
        },
    },
    selectedValue: {
        type: [String, Number],
        default: '',
    },
    defaultValue: {
        type: [String, Number],
        default: '',
    },
    selectClass: {
        type: String,
        default: 'form-select',
    },
    ariaLabel: {
        type: String,
        default: 'Default select example',
    },
    labelSelect: {
        type: String,
        default: 'Select example',
    },
});

const emit = defineEmits(['update:selectedValue']);

const selected = ref(props.selectedValue);

// Watch for changes in selectedValue prop to update local selected value
watch(
    () => props.selectedValue,
    (newValue) => {
        selected.value = newValue;
    }
);

// Emit the updated value whenever it changes
watch(selected, (newValue) => {
    emit('update:selectedValue', newValue);
});
</script>

<template>
    <div class="form-group">
        <label :for="props.id" class="form-label mb-0">{{ labelSelect }}</label>
        <select
            v-model="selected"
            :class="selectClass"
            class="selectpicker"
            data-style="btn-success"
            :aria-label="ariaLabel"
        >
            <option :value="defaultValue" class="option-item">ALL</option>
            <option
                v-for="option in options"
                :key="option.id"
                :value="option.value"
                class="option-item"
            >
                {{ option.value }}
            </option>
        </select>
    </div>
</template>
<style>
.option-item {
    padding: 10px; /* Điều chỉnh padding theo nhu cầu */
    background-color: white; /* Màu nền */
    color: black; /* Màu chữ */
    width: 200px; /* Chiều rộng tùy chọn */
}

/* Optional: Thêm kiểu cho trạng thái hover và đã chọn */
select .option-item:hover {
    background-color: #f1f1f1;
}

select .option-item:checked {
    background-color: #007bff; /* Màu chính của Bootstrap */
    color: white;
}
</style>
