<template>
    <div :class="'custom-toast'">
        <p>{{ message }}</p>
        <argon-button
            style="width: 140px"
            variant="gradient"
            color="info"
            size="md"
            @click="handleUndo"
        >
            {{ undoText }}
        </argon-button>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted, onBeforeUnmount } from 'vue';
import ArgonButton from '@/components/ArgonButton.vue';

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    timeClose: {
        type: Number,
        required: true,
    },
    actionCallback: {
        type: Function,
        required: true,
    },
});

const remainingTime = ref(props.timeClose / 1000); // Convert milliseconds to seconds
const undoText = ref(`Undo (${remainingTime.value.toFixed(1)}s)`);
let interval;

const handleUndo = () => {
    clearInterval(interval);
    props.actionCallback();
};

const updateUndoText = () => {
    remainingTime.value -= 0.1;
    if (remainingTime.value <= 0) {
        clearInterval(interval);
        undoText.value = 'Undo (0.0s)';
        props.actionCallback();
    } else {
        if (remainingTime.value < 2) {
            undoText.value = `Undo (${remainingTime.value.toFixed(1)}s)`;
        } else {
            undoText.value = `Undo (${Math.floor(remainingTime.value)}s)`;
        }
    }
};

onMounted(() => {
    interval = setInterval(updateUndoText, 100);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.custom-toast {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.custom-toast p {
    margin: 0;
    padding-right: 10px;
}
</style>
