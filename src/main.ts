import { createApp } from 'vue';
import App from './App.vue';

// Import các thư viện chính
import { createPinia } from 'pinia';
import router from './router';
import store from './store';

// Import CSS của dự án và thư viện
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS

// Import các plugin và thư viện UI
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import ArgonDashboard from './argon-dashboard';
import Antd from 'ant-design-vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// Cấu hình các plugin
const toastOptions: ToastContainerOptions = {
    autoClose: 3000,
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
};

// Khởi tạo ứng dụng Vue
const appInstance = createApp(App);

// Sử dụng các plugin và cấu hình
appInstance.use(Vue3Toastify, toastOptions);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
appInstance.use(pinia);

appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(Antd);

// Mount ứng dụng vào DOM
appInstance.mount('#app');
