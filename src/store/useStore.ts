import { defineStore } from 'pinia';
import useAuth from '@/hook/useAuth';

const { getUserInfo } = useAuth();
export const useCounterStore = defineStore('counter', {
    state: () => ({
        name: '',
        role: 'user',
        jwt: '',
    }),
    getters: {},
    actions: {
        async getUserInfo() {
            await this.loadUserInfo();
            this.saveStateToLocalStorage();
        },
        async loadUserInfo() {
            const jwtFromLocalStorage = localStorage.getItem('jwt');
            if (jwtFromLocalStorage) {
                try {
                    const userInfo: any = await getUserInfo();
                    this.$patch({ jwt: jwtFromLocalStorage, ...userInfo });
                } catch (error) {
                    console.error('Error fetching user info:', error);
                }
            }
        },
        saveStateToLocalStorage() {
            localStorage.setItem('counterState', JSON.stringify(this.$state));
        },
        loadStateFromLocalStorage() {
            const state = localStorage.getItem('counterState');
            if (state) {
                this.$patch(JSON.parse(state));
            }
        },
    },
});
