import { ref, reactive, onMounted } from 'vue';
import { getAllUser, updateRole } from '@/constant/api';
import axios from '@/lib/axios';
import { User, Role } from '@/interfaces/user';
import notify from '@/lib/toast';

export default function useUsers() {
    const loading = ref(false);
    const dataUsers = reactive<User[]>([]);
    const totalRecords = ref(0);

    const getAllUsers = async (page: number, size: number) => {
        try {
            loading.value = true;
            const response = await axios.get(getAllUser, {
                headers: {
                    includeAccessToken: true,
                },
                params: {
                    page: page,
                    size: size,
                },
            });
            if (response.status === 200) {
                dataUsers.splice(0, dataUsers.length, ...response.data.result);
                totalRecords.value = response.data.result.totalElements;
            }
        } catch (e) {
            console.error('Error get all users: ', e);
            notify.error('Failed to load users. Please try again later.');
        } finally {
            loading.value = false;
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
        // getAllUsers(0, 2);
    });

    return { loading, getAllUsers, updateRoleUser, dataUsers };
}
