<template>
    <div class="container top-0 position-sticky z-index-sticky">
        <div class="row">
            <div class="col-12">
                <navbar is-btn="bg-gradient-light" />
            </div>
        </div>
    </div>
    <main class="main-content mt-0">
        <div
            class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
            style="
                background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg');
                background-position: top;
            "
        >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 text-center mx-auto">
                        <h1 class="text-white mb-2 mt-5">Welcome!</h1>
                        <p class="text-lead text-white">
                            Use these awesome forms to login or create new
                            account in your project for free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                    <div class="card z-index-0">
                        <div class="card-header text-center pt-4">
                            <h5>Register with</h5>
                        </div>
                        <div class="row px-xl-5 px-sm-4 px-3">
                            <!-- Social buttons... -->
                        </div>
                        <div class="card-body">
                            <div>
                                <argon-input
                                    id="name"
                                    v-model="name"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                />
                                <argon-input
                                    id="email"
                                    v-model="count"
                                    type="text"
                                    placeholder="Email"
                                    aria-label="Email"
                                />
                                <argon-input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                />
                                <argon-checkbox checked>
                                    <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        I agree the
                                        <a
                                            href="javascript:;"
                                            class="text-dark font-weight-bolder"
                                            >Terms and Conditions</a
                                        >
                                    </label>
                                </argon-checkbox>
                                <div class="text-center">
                                    <argon-button
                                        full-width
                                        color="dark"
                                        variant="gradient"
                                        class="my-4 mb-2"
                                        @click="login"
                                        >Sign up</argon-button
                                    >
                                </div>
                                <div class="text-center">
                                    <argon-button
                                        class="mt-4"
                                        variant="gradient"
                                        color="success"
                                        full-width
                                        size="lg"
                                        @click="getUserInfo"
                                        >Get info</argon-button
                                    >
                                </div>
                                <p class="text-sm mt-3 mb-0">
                                    Already have an account?
                                    <a
                                        href="javascript:;"
                                        class="text-dark font-weight-bolder"
                                        >Sign in</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <app-footer />
</template>

<script setup>
import { onBeforeUnmount, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import Navbar from '@/examples/PageLayout/Navbar.vue';
import AppFooter from '@/examples/PageLayout/Footer.vue';
import ArgonInput from '@/components/ArgonInput.vue';
import ArgonCheckbox from '@/components/ArgonCheckbox.vue';
import ArgonButton from '@/components/ArgonButton.vue';
// import { computed } from 'vue'
// import { useCounterStore } from "../store/useStore"; // Adjust the path as needed

import useAuth from '@/hook/useAuth';

const { login, getUserInfo } = useAuth();

const body = document.getElementsByTagName('body')[0];

// const counterStore = useCounterStore();

// // Lấy các hành động và trạng thái từ store
// const increment = counterStore.increment;
// const doubleCount = counterStore.doubleCount;
// // const loadStateFromLocalStorage = counterStore.loadStateFromLocalStorage;
// const count = computed(() => counterStore.count);
// const name = computed(() => counterStore.name);

const store = useStore();

onBeforeMount(() => {
    store.state.hideConfigButton = true;
    store.state.showNavbar = false;
    store.state.showSidenav = false;
    store.state.showFooter = false;
    body.classList.remove('bg-gray-100');
});
onBeforeUnmount(() => {
    store.state.hideConfigButton = false;
    store.state.showNavbar = true;
    store.state.showSidenav = true;
    store.state.showFooter = true;
    body.classList.add('bg-gray-100');
});
</script>
