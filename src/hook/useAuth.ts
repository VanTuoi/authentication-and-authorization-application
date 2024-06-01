import { ref } from 'vue';
import { authDangNhap, authGetThongTin } from '@/constant/api';
import axios from 'axios';
// import { useCounterStore } from "../store/useStore";

export default function useAuth() {
    // const counterStore = useCounterStore();
    // const login = counterStore.login;
    const jwt = ref(localStorage.getItem('jwt') || '');

    const login = async () => {
        try {
            const data = {
                username: 'admin',
                password: 'admin',
            };
            const response = await axios.post(`${authDangNhap}`, data);
            console.log('response', response);
            if (response.status === 200) {
                localStorage.setItem('jwt', response.data.result.token);
            }
        } catch (e) {
            console.error('Error: ', e);
        } finally {
            console.log('');
        }
    };

    const getUserInfo = async () => {
        try {
            const headers = { Authorization: `Bearer ${jwt.value}` };
            const response = await axios.get(`${authGetThongTin}`, { headers });
            console.log('response getUserInfo', response);
            return {};
        } catch (e) {
            console.error('Error: ', e);
        } finally {
            console.log('');
        }
    };

    const logout = () => {
        jwt.value = '';
        localStorage.removeItem('jwt');
    };

    return { jwt, getUserInfo, login, logout };
}
