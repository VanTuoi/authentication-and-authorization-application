import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import store from './store';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import ArgonDashboard from './argon-dashboard';

const pinia = createPinia();
const appInstance = createApp(App);

appInstance.use(store);
appInstance.use(pinia);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount('#app');
