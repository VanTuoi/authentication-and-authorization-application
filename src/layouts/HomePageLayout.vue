<template>
    <div>
        <main class="main-content">
            <router-view />
        </main>
    </div>
</template>

<script setup></script>

<style scoped>
/* Import font chữ từ Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

/* CSS chỉ áp dụng cho các phần tử con bên trong thẻ <main> */
.main-content {
    width: 100%;
    height: 100vh;
    position: relative;
    background:
        linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)) center center / cover
            no-repeat,
        url('https://iit.vn/assets/background/overlay_3.jpg');
    background-position: center center;
    border-radius: var(--bs-border-radius);
    padding-right: 1rem;
    padding-left: 1rem;
}

.main-content * {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #333; /* Màu chữ */
}

.main-content a {
    font-family: 'Poppins', sans-serif;
    color: #333; /* Màu chữ */
}
</style>
