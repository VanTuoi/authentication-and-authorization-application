<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
    rows: {
        type: Number,
        default: 5,
    },
    name: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="form-group">
        <label :for="props.id">
            <slot />
        </label>
        <textarea
            :id="props.id"
            class="form-control"
            :rows="props.rows"
            :name="props.name"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
    </div>
</template>
