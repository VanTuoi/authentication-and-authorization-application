import { defineStore } from 'pinia';
import { User } from '@/interfaces/user';

const exampleUser: User = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    dob: '1900-01-01',
    roles: [],
};

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        user: exampleUser as User,
    }),
    getters: {
        getUser(state): User {
            return state.user;
        },
    },
    actions: {
        async init(user: User) {
            try {
                if (user !== null) {
                    this.$patch({ user: user });
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
    },
    persist: true, // save on localstorage
});
