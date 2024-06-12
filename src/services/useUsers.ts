import { ref, reactive, onMounted } from 'vue';
import { getAllUser, updateRole } from '@/constant/api';
import axios from '@/lib/axios';
import { User, Role } from '@/interfaces/user';

export default function useUsers() {
    const loading = ref(false);
    const dataUsers = reactive<User[]>([]);

    const getAllUsers = async () => {
        try {
            loading.value = true;
            const response = await axios.get(getAllUser, {
                headers: {
                    includeAccessToken: true,
                },
            });
            if (response.status === 200) {
                dataUsers.splice(0, dataUsers.length, ...response.data.result);
                loading.value = false;
                return true;
            }
            loading.value = false;
            return false;
        } catch (e) {
            console.error('Error get all users: ', e);
            loading.value = false;
            return false;
        }
    };

    const updateRoleUser = async (id: string, roles: Role[]) => {
        try {
            const response = await axios.put(
                `${updateRole}/${id}`,
                { roles },
                {
                    headers: {
                        includeAccessToken: true,
                    },
                }
            );
            return response.status === 200;
        } catch (e) {
            console.error('Error updating role: ', e);
            return false;
        }
    };

    onMounted(() => {
        getAllUsers();
    });

    return { loading, getAllUsers, updateRoleUser, dataUsers };
}
