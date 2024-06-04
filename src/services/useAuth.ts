import { ref, computed } from 'vue';
import { authDangNhap, authGetThongTin } from '@/constant/api';
import axios from '@/lib/axios';
import { useUserStore } from '@/store-pinia/useUserStore';

export default function useAuth() {
    const userStore = useUserStore();

    const loading = ref(false);
    const login = async (username: string, password: string) => {
        try {
            loading.value = true;
            const data = {
                username: username,
                password: password,
            };
            const response = await axios.post(authDangNhap, data);
            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data.result.token);
                localStorage.setItem(
                    'refreshToken',
                    response.data.result.token
                );

                const info = await getUserInfo();
                userStore.init(info);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.error('Error: ', e);
            return false;
        } finally {
            loading.value = false;
        }
    };

    const getUserInfo = async () => {
        try {
            const response = await axios.get(authGetThongTin, {
                headers: {
                    includeAccessToken: true,
                },
            });
            if (response.status === 200) {
                const data = response.data.result;
                return data;
            }
            return null;
        } catch (e) {
            console.error('Error: ', e);
            return null;
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        userStore.$reset;
        return true;
    };

    return { loading, getUserInfo, login, logout };
}
