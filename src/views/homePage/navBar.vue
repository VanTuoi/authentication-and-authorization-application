<template>
    <div
        class="position-sticky left-auto top-0 z-index-sticky"
        style="margin-left: -1rem; margin-right: -1rem"
    >
        <nav id="navbar-custom" class="navbar navbar-expand-lg">
            <div id="progress-bar" class=""></div>
            <div class="container-fluid">
                <div class="col-3 d-flex justify-content-center">
                    <router-link to="/" class="navbar-brand">
                        <img
                            style="height: 40px; width: 40px; cursor: pointer"
                            alt="logo"
                            src="images/iit/logo.png"
                        />
                    </router-link>
                </div>
                <div class="col-2"></div>
                <div class="col-7">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        id="navbarSupportedContent"
                        class="collapse navbar-collapse collapse-custom"
                    >
                        <ul class="navbar-nav me-3 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link
                                    to="/"
                                    class="nav-link active"
                                    style="font-weight: 600"
                                    aria-current="page"
                                    >Home</router-link
                                >
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    id="navbarDropdown"
                                    style="font-weight: 600"
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Software</a></li>
                                    <li><a class="dropdown-item" href="#">Video</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Electronic paintings</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Computer</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Camera</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Display</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Sound</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Mouse</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Keyboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    id="navbarDropdown"
                                    style="font-weight: 600"
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Consulting on technology solutions</a
                                        >
                                    </li>
                                    <li><a class="dropdown-item" href="#">Graphic design</a></li>
                                    <li><a class="dropdown-item" href="#">Video editing</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Promote and run ads</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Equipment repair and maintenance</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Network installation construction</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Construction of internet room</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Replace office printer ink</a
                                        >
                                    </li>
                                    <li><a class="dropdown-item" href="#">Printing house</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/"
                                    class="nav-link active"
                                    aria-current="page"
                                    style="font-weight: 600"
                                    >New</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/"
                                    class="nav-link active"
                                    aria-current="page"
                                    style="font-weight: 600"
                                    >Chat AI</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/"
                                    class="nav-link active"
                                    aria-current="page"
                                    style="font-weight: 600"
                                    >Team</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/"
                                    class="nav-link active me-3"
                                    aria-current="page"
                                >
                                    <i class="fa fa-cog fa-spin fa-lg" aria-hidden="true"></i>
                                </router-link>
                            </li>
                            <li>
                                <argon-button
                                    variant="outline"
                                    size="sm"
                                    class="btn btn-outline-success"
                                    type="submit"
                                >
                                    Login
                                </argon-button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, onBeforeUnmount } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import ArgonButton from '@/components/ArgonButton.vue';

onMounted(() => {
    const updateProgressBar = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById('progress-bar').style.width = `${scrollPercent}%`;

        // Thay đổi chiều cao của navbar
        const navbar = document.getElementById('navbar-custom');
        if (window.scrollY < 2) {
            navbar.classList.remove('navbar-short');
            navbar.classList.add('navbar-tall');
        } else {
            navbar.classList.remove('navbar-tall');
            navbar.classList.add('navbar-short');
        }
    };

    window.addEventListener('scroll', updateProgressBar);

    // Clean up event listener on component unmount
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', updateProgressBar);
    });
});
</script>

<style>
#progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-image: linear-gradient(310deg, #2dce89 0%, #2dcecc 100%);
    transition: width 1s;
    border-radius: 8px;
}
#navbar-custom {
    transition: height 0.5s ease; /* Thêm transition cho height */
}

.navbar-tall {
    background: transparent;
    height: 80px; /* Chiều cao khi đầu trang */
}

.navbar-short {
    background: #fff;
    height: 70px; /* Chiều cao khi cuộn xuống */
    box-shadow: none !important; /* Tắt bóng đổ */
}

/* Đảm bảo rằng dropdown không bị ẩn */
.navbar-nav .nav-item {
    margin-right: 25px; /* Điều chỉnh giá trị theo nhu cầu */
}
.navbar .dropdown-menu {
    display: none;
}

/* Hiển thị dropdown khi hover vào phần tử điều khiển */
.navbar .dropdown:hover .dropdown-menu {
    display: block;
}

/* Đảm bảo dropdown hiển thị đúng vị trí */
.navbar .dropdown-menu {
    margin-top: 0; /* Tùy chọn: Điều chỉnh margin nếu cần */
}
.fa-spin {
    animation: spin 10s infinite linear;
}

.collapse-custom ul li a {
    font-weight: 600;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
