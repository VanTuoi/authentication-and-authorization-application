<template>
    <div>
        <div
            v-if="showModal"
            class="modal fade bd-example-modal-lg show"
            :class="positionClass"
            tabindex="-1"
            style="display: block"
        >
            <div class="modalBackdrop" @click="toggleModal"></div>
            <div class="modal-dialog" :class="[size]">
                <div
                    class="modal-content"
                    :class="`${darkMode ? 'bg-default' : 'bg-light'}`"
                >
                    <div class="modal-header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button
                            type="button"
                            class="btn-close btn-sm bg-default"
                            @click="toggleModal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p
                            v-if="description"
                            class="mt-2 mb-0"
                            v-html="description"
                        ></p>
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-sm btn-secondary"
                            @click="toggleModal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-primary"
                            @click="handleSave"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { useStore } from 'vuex';
const darkMode = computed(() => store.state.darkMode);
const store = useStore();

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: '',
    },
    position: {
        type: String,
        default: 'center',
    },
    handleSave: {
        type: Function,
        default: null,
    },
});

const emits = defineEmits(['update:showModal']);

const toggleModal = () => {
    emits('update:showModal', !props.showModal);
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
</style>
