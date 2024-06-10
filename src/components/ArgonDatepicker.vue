<script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    size: {
        type: String,
        default: 'default',
    },
    success: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: '',
    },
    iconDir: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Date],
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
});

const getClasses = (size, success, error) => {
    let sizeValue, isValidValue;

    sizeValue = size ? `form-control-${size}` : null;

    if (error) {
        isValidValue = 'is-invalid';
    } else if (success) {
        isValidValue = 'is-valid';
    } else {
        isValidValue = '';
    }

    return `${sizeValue} ${isValidValue}`;
};

const getIcon = (icon) => (icon ? icon : null);
const hasIcon = (icon) => (icon ? 'input-group' : null);
</script>

<template>
    <div class="form-group">
        <div :class="hasIcon(icon)">
            <span v-if="iconDir === 'left'" class="input-group-text">
                <i :class="getIcon(icon)"></i>
            </span>
            <Datepicker
                :id="id"
                class="custom"
                :class="getClasses(size, success, error)"
                :name="name"
                :placeholder="placeholder"
                :is-required="isRequired"
                :model-value="modelValue"
                :format="'yyyy-MM-dd'"
                :enable-time-picker="false"
                @update:model-value="emit('update:modelValue', $event)"
            />
            <span v-if="iconDir === 'right'" class="input-group-text">
                <i :class="getIcon(icon)"></i>
            </span>
        </div>
    </div>
</template>

<style scoped>
.custom {
    --dp-font-size: 0.9rem;
    --dp-border-radius: 0.5rem;
    --dp-input-padding: 8px 30px 8px 12px;
}
</style>
