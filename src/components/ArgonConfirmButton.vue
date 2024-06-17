<!-- <argon-confirm-button
    description="Do you want to delete this user from the system ?"
    variant="gradient"
    color="danger"
    size="sm"
    size-dialog="sm"
    full-width
    :handle-confirm="handleClickDelete(user.id)"
>Delete
</argon-confirm-button> -->

<template>
    <div>
        <!-- Button Confirm -->
        <button
            class="btn mb-0"
            :disabled="loading"
            :class="getClasses(variant, color, size, fullWidth, active)"
            @click="toggleModal(true)"
        >
            <span
                v-if="loading"
                class="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
            ></span>
            <span v-if="icon && iconPosition === 'before'" :class="`fa fa-${icon} me-2`"></span>
            <slot></slot>
            <span v-if="icon && iconPosition === 'after'" :class="`fa fa-${icon} ms-2`"></span>
        </button>

        <!-- Dialog Confirm -->
        <div
            v-if="state"
            class="modal fade bd-example-modal-lg show"
            :class="positionClass"
            tabindex="-2"
            style="display: block"
        >
            <div class="modalBackdrop" @click="toggleModal(false)"></div>
            <div class="modal-dialog" :class="[sizeDialog]">
                <div class="modal-content" :class="`${darkMode ? 'bg-default' : 'bg-light'}`">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button
                            type="button"
                            class="btn-close btn-sm bg-default"
                            @click="toggleModal(false)"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p v-if="description" class="mt-2 mb-0" v-html="description"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="toggleModal(false)">
                            No
                        </button>
                        <button type="button" class="btn btn-primary" @click="handleConfirm">
                            Sure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { useStore } from 'vuex';
const darkMode = computed(() => store.state.darkMode);
const store = useStore();

const props = defineProps({
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
    title: {
        type: String,
        default: 'Confirm Actions',
    },
    description: {
        type: String,
        default: '',
    },
    sizeDialog: {
        type: String,
        default: '',
    },
    position: {
        type: String,
        default: 'center',
    },
    handleConfirm: {
        type: Function,
        default: null,
    },
});

const state = ref(false);

const toggleModal = (show) => {
    state.value = show;
};

const positionClass = computed(() => {
    switch (props.position) {
        case 'top':
            return 'modal-top';
        case 'bottom':
            return 'modal-bottom';
        case 'left':
            return 'modal-left';
        case 'right':
            return 'modal-right';
        case 'center':
        default:
            return 'modal-center';
    }
});

const getClasses = (variant, color, size, fullWidth, active) => {
    let colorValue, sizeValue, fullWidthValue, activeValue;

    if (variant === 'gradient') {
        colorValue = `bg-gradient-${color}`;
    } else if (variant === 'outline') {
        colorValue = `btn-outline-${color}`;
    } else if (variant === 'text') {
        colorValue = `btn-${color}-text`;
    } else {
        colorValue = `btn-${color}`;
    }

    sizeValue = size ? `btn-${size}` : null;
    fullWidthValue = fullWidth ? 'w-100' : null;
    activeValue = active ? 'active' : null;

    return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`.trim();
};
</script>

<style scoped>
.modalBackdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-top {
    position: absolute;
    top: 20px;
    bottom: 0;
    z-index: 1;
    overflow: auto;
    overflow-y: auto;
}

.modal-center {
    position: absolute;
    top: 15vh;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: auto;
    overflow-y: auto;
}

.modal-bottom {
    position: absolute;
    top: 50vh;
    z-index: 1;
    overflow: auto;
    overflow-y: auto;
}

.modal-left {
    position: absolute;
    top: 30vh;
    bottom: 0;
    z-index: 1;
    overflow: auto;
    overflow-y: auto;
}

.modal-right {
    position: absolute;
    top: 30vh;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: auto;
    overflow-y: auto;
}

.modal.fade.show {
    display: block;
}

.modal-dialog {
    max-width: 500px;
}

.modal-body {
    padding: 20px;
}
</style>
