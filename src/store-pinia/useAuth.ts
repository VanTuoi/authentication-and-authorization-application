import { defineStore } from 'pinia';

export const useRememberAccountStore = defineStore('useRememberAccount', {
    state: () => ({
        rememberAccount: true,
    }),
    getters: {
        getStatus(state) {
            return state.rememberAccount;
        },
    },
    actions: {
        async toggleRememberAccount() {
            this.rememberAccount = !this.rememberAccount;
        },
    },
    persist: true, // save on localstorage
});
