<script setup>
import { onBeforeUnmount, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import Navbar from '@/examples/PageLayout/Navbar.vue';
import ArgonInput from '@/components/ArgonInput.vue';
import ArgonSwitch from '@/components/ArgonSwitch.vue';
import ArgonButton from '@/components/ArgonButton.vue';
import ArgonInputPassword from '@/components/ArgonInputPassword.vue';
import notify from '@/lib/toast';
import useAuth from '@/services/useAuth';
import { useUserStore } from '@/store-pinia/useUserStore';
import { useRememberAccountStore } from '@/store-pinia/useAuth';
const body = document.getElementsByTagName('body')[0];

const router = useRouter();

const store = useStore();
const useUser = useUserStore();
const user = ref(null);

const { getUserInfo, loading, login } = useAuth();

const name = ref('admin');
const password = ref('admin');
const isCheck = ref(false);

const useRemember = useRememberAccountStore();

const handleChange = () => {
    useRemember.toggleRememberAccount();
};

const handleLogin = async () => {
    const isSuccess = await login(name.value, password.value);
    if (isSuccess) {
        notify.success(`Login is successfully`);
        // router.push('/dashboard-default');
    } else {
        notify.error('Login in failed');
    }
    getUserInfo();
};

const show = async () => {
    const isSuccess = await getUserInfo();
    console.log('isSuccess', isSuccess);
    if (isSuccess !== null) {
        notify.success(`Get info is successfully`);
    } else {
        notify.error('Get info in failed');
    }
};

onBeforeMount(() => {
    if (user?.value?.name !== '') {
        // router.push('/');
    }
});

onBeforeMount(() => {
    user.value = computed(() => {
        return useUser.getUser;
    });
    isCheck.value = computed(() => {
        return useRemember.getStatus;
    });
});

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

<template>
    <div class="container top-0 position-sticky z-index-sticky">
        <div class="row">
            <div class="col-12">
                <navbar
                    is-blur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
                    :dark-mode="true"
                    is-btn="bg-gradient-success"
                />
            </div>
        </div>
    </div>
    <main class="mt-0 main-content">
        <section>
            <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row">
                        <div
                            class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
                        >
                            <div class="card card-plain">
                                <div class="pb-0 card-header text-start">
                                    <h4 class="font-weight-bolder">Sign In</h4>
                                    <p class="mb-0">
                                        Enter your username and password to sign
                                        in
                                        <!-- |{{ user?.value?.firstName }}| -->
                                    </p>
                                </div>
                                <div class="card-body">
                                    <form
                                        role="form"
                                        @submit.prevent="() => {}"
                                    >
                                        <div class="mb-3">
                                            <argon-input
                                                id="email"
                                                v-model="name"
                                                type="text"
                                                placeholder="Email"
                                                name="email"
                                                size="lg"
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <argon-input-password
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                size="lg"
                                            />
                                        </div>
                                        <argon-switch
                                            id="rememberMe"
                                            :checked="isCheck"
                                            name="remember-me"
                                            @change="handleChange"
                                            >Remember me</argon-switch
                                        >

                                        <div class="text-center">
                                            <argon-button
                                                :loading="loading"
                                                class="mt-4"
                                                variant="gradient"
                                                color="success"
                                                :is-required="true"
                                                full-width
                                                size="lg"
                                                @click="handleLogin"
                                                >Sign in</argon-button
                                            >
                                        </div>
                                        <div class="text-center">
                                            <argon-button
                                                class="mt-4"
                                                variant="gradient"
                                                color="success"
                                                full-width
                                                size="lg"
                                                @click="show"
                                            >
                                                Get my info
                                            </argon-button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    class="px-1 pt-0 text-center card-footer px-lg-2"
                                >
                                    <p class="mx-auto mb-4 text-sm">
                                        Don't have an account?
                                        <router-link
                                            to="/signup"
                                            class="text-success text-gradient font-weight-bold"
                                        >
                                            Sign up
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
                        >
                            <div
                                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                                style="
                                    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                                    background-size: cover;
                                "
                            >
                                <span
                                    class="mask bg-gradient-success opacity-6"
                                ></span>
                                <h4
                                    class="mt-5 text-white font-weight-bolder position-relative"
                                >
                                    "Attention is the new currency"
                                </h4>
                                <p class="text-white position-relative">
                                    The more effortless the writing looks, the
                                    more effort the writer actually put into the
                                    process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
