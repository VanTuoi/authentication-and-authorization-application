import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import store from './store';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import ArgonDashboard from './argon-dashboard';

const toastOptions: ToastContainerOptions = {
    autoClose: 3000,
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
};

const appInstance = createApp(App);
const pinia = createPinia();
appInstance.use(pinia);
pinia.use(piniaPluginPersistedstate);
appInstance.use(store);
appInstance.use(router);
appInstance.use(Vue3Toastify, toastOptions);
appInstance.use(ArgonDashboard);
appInstance.mount('#app');
