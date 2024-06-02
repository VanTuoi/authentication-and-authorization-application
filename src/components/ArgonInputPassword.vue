<script setup>
import { ref, computed } from 'vue';
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
        type: String,
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

const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};

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

const inputType = computed(() => {
    if (props.type === 'password') {
        return passwordVisible.value ? 'text' : 'password';
    }
    return props.type;
});
</script>

<template>
    <div class="form-group">
        <div :class="hasIcon(icon)">
            <span v-if="iconDir === 'left'" class="input-group-text">
                <i :class="getIcon(icon)"></i>
            </span>
            <input
                :id="id"
                :type="inputType"
                class="form-control"
                :class="getClasses(size, success, error)"
                :name="name"
                :value="modelValue"
                :placeholder="placeholder"
                :required="isRequired"
                @input="emit('update:modelValue', $event.target.value)"
            />
            <span
                v-if="props.type === 'password'"
                class="input-group-text password-toggle"
                @click="togglePasswordVisibility"
            >
                <i
                    :class="
                        !passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'
                    "
                ></i>
            </span>
            <span v-if="iconDir === 'right'" class="input-group-text">
                <i :class="getIcon(icon)"></i>
            </span>
        </div>
    </div>
</template>

<style scoped>
.input-group {
    position: relative;
    display: flex;
    align-items: center;
}

.input-group-text {
    cursor: pointer;
}

.form-control {
    flex-grow: 1;
    padding-right: 40px;
}

.password-toggle {
    border: none;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-100%);
}
</style>
