<script setup>
defineProps({
    color: {
        type: String,
        default: 'success',
    },
    size: {
        type: String,
        default: 'md',
    },
    variant: {
        type: String,
        default: 'fill',
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: null,
    },
    iconPosition: {
        type: String,
        default: 'before', // 'before' or 'after'
    },
});
const getClasses = (variant, color, size, fullWidth, active) => {
    let colorValue, sizeValue, fullWidthValue, activeValue;

    // Setting the button variant and color
    if (variant === 'gradient') {
        colorValue = `bg-gradient-${color}`;
    } else if (variant === 'outline') {
        colorValue = `btn-outline-${color}`;
    } else if (variant === 'text') {
        colorValue = `btn-${color}-text`; // Apply text only color
    } else {
        colorValue = `btn-${color}`;
    }

    sizeValue = size ? `btn-${size}` : null;
    fullWidthValue = fullWidth ? `w-100` : null;
    activeValue = active ? `active` : null;

    return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`.trim();
};
</script>
<template>
    <button
        :disabled="loading"
        class="btn mb-0"
        :class="getClasses(variant, color, size, fullWidth, active)"
    >
        <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            style="width: 1rem; height: 1rem"
            role="status"
            aria-hidden="true"
        ></span>
        <span v-else>
            <template v-if="iconPosition === 'before'">
                <i v-if="icon" :class="`fa fa-${icon} me-2`"></i>
                <slot></slot>
            </template>
            <template v-else>
                <slot></slot>
                <i v-if="icon" :class="`fa fa-${icon} ms-2`"></i>
            </template>
        </span>
    </button>
</template>
