import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
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

export const useUserStore = defineStore(
    'useUserStore',
    () => {
        const user = ref<User>(emptyUser);

        const getUser = computed(() => user.value);

        const init = async (newUser: User) => {
            try {
                if (newUser !== null) {
                    user.value = newUser;
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        const reset = () => {
            console.log('run');
            user.value = emptyUser;
            sessionStorage.removeItem('useUserStore');
        };

        return {
            user,
            getUser,
            init,
            reset,
        };
    },
    {
        persist: {
            storage: sessionStorage,
        },
    }
);
