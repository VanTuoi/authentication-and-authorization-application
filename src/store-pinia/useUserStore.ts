import { defineStore } from 'pinia';
import { User } from '@/interfaces/user';

// Khai báo một object rỗng để xóa thông tin của user
const emptyUser: User = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    dob: '',
    roles: [],
};

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        user: emptyUser,
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
                    this.$patch({ user });
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
    },
    // persist: true, // save on localstorage
});
