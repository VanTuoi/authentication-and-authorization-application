import { ref, onMounted, reactive } from 'vue';
import { getAllPermission, createPermission, deletePermission } from '@/constant/api';
import axios from '@/lib/axios';
import { Permission } from '@/interfaces/user';

export default function usePermissions() {
    const loading = ref(false);
    const dataPermissions = reactive<Permission[]>([]);

    const getAllPermissions = async () => {
        try {
            loading.value = true;
            const response = await axios.get(getAllPermission, {
                headers: {
                    includeAccessToken: true,
                },
            });
            if (response.status === 200) {
                dataPermissions.splice(0, dataPermissions.length, ...response.data.result);
                loading.value = false;
                return true;
            }
            loading.value = false;
            return false;
        } catch (e) {
            console.error('Error get all Permissions: ', e);
            loading.value = false;
            return false;
        }
    };
    const createPermissions = async (name: string, description: string) => {
        const data = {
            name: name,
            description: description,
        };

        try {
            const response = await axios.post(`${createPermission}`, data, {
                headers: {
                    includeAccessToken: true,
                },
            });
            return response.status === 200;
            // console.log('data', data);
        } catch (e) {
            console.error('Error add permission: ', e);
            return false;
        }
    };

    const deletePermissions = async (name: string) => {
        try {
            const response = await axios.delete(`${deletePermission}/${name}`, {
                headers: {
                    includeAccessToken: true,
                },
            });
            return response.status === 200;
        } catch (e) {
            console.error('Error delete permission: ', e);
            return false;
        }
    };

    onMounted(() => {
        getAllPermissions();
    });

    return {
        loading,
        getAllPermissions,
        createPermissions,
        deletePermissions,
        dataPermissions,
    };
}
