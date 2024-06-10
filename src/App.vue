<template>
    <div id="custom-scrollbar">
        <router-view />
    </div>
</template>

<script setup></script>

<style scoped>
#custom-scrollbar {
    /* Add custom scrollbar styles */
    scrollbar-width: thin;
    scrollbar-color: #2dce89 #f5f5f5;
    height: 100vh; /* Ensure it takes full viewport height */
    overflow-y: auto; /* Add vertical scroll if needed */
}

/* For Webkit browsers (e.g., Chrome, Safari) */
#custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

#custom-scrollbar::-webkit-scrollbar-track {
    background: #f5f5f5;
}

#custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #2dce89;
    border-radius: 10px;
    border: 2px solid #f5f5f5;
}
</style>
