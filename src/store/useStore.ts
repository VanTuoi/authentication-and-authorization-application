import { defineStore } from 'pinia';
import useAuth from '@/hook/useAuth';
import { User } from '@/interfaces/user';

const { getUserInfo } = useAuth();

const exampleUser: User = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    dob: '1900-01-01',
    roles: [],
};

export const useUserStore = defineStore('user', {
    state: () => ({
        user: exampleUser as User,
    }),
    getters: {
        getUser(state): User {
            return state.user;
        },
    },
    actions: {
        async init() {
            console.log('khởi tạo');
            try {
                const info = await getUserInfo();
                if (info !== null) {
                    this.$patch({ user: info });
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
    },
});
