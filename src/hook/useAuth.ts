import { ref } from 'vue';
import { authDangNhap, authGetThongTin } from '@/constant/api';
import axios from '@/lib/axios';
import { User } from '@/interfaces/user';
// import { useUserStore } from '@/store/useStore';

export default function useAuth() {
    // const useUser = useUserStore();
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
                console.log('response', response);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.error('Error: ', e);
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
                const data: User = response.data.result;
                return data;
            } else console.log('response getUserInfo', response);
            return null;
        } catch (e) {
            console.error('Error: ', e);
        } finally {
            console.log('');
        }
    };

    const logout = () => {
        localStorage.removeItem('jwt');
    };

    return { loading, getUserInfo, login, logout };
}
