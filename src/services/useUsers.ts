import { ref, reactive, onMounted } from 'vue';
import { getAllUser, updateRole, createUsers, deleteUsers } from '@/constant/api';
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
                dataUsers.splice(0, dataUsers.length, ...response.data.result.users);
                totalRecords.value = response.data.result.totalElements;
            }
        } catch (e) {
            console.error('Error get all users: ', e);
            notify.error('Failed to load users. Please try again later.');
        } finally {
            loading.value = false;
        }
    };

    const createUser = async (user: any) => {
        const data = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            dob: user.dob,
            roles: ['USER'],
        };
        try {
            const response = await axios.post(`${createUsers}`, data, {
                headers: {
                    includeAccessToken: true,
                },
            });

            if (response.status === 200) return response.data.result;
            return null;
        } catch (e) {
            console.error('Error: ', e);
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

    const deleteUser = async (id: string) => {
        try {
            const response = await axios.delete(`${deleteUsers}/${id}`, {
                headers: {
                    includeAccessToken: true,
                },
            });
            return response.status === 200;
        } catch (e) {
            console.error('Error delete user: ', e);
            return false;
        }
    };

    onMounted(() => {
        getAllUsers(0, 5);
    });

    return {
        loading,
        getAllUsers,
        updateRoleUser,
        createUser,
        deleteUser,
        totalRecords,
        dataUsers,
    };
}
