import { ref, onMounted, reactive } from 'vue';
import { getAllRole, createRoles, deleteRole } from '@/constant/api';
import axios from '@/lib/axios';
import { User, Role } from '@/interfaces/user';

export default function useRoles() {
    const loading = ref(false);
    const dataRoles = reactive<Role[]>([]);

    const getAllRoles = async () => {
        try {
            loading.value = true;
            const response = await axios.get(getAllRole, {
                headers: {
                    includeAccessToken: true,
                },
            });
            if (response.status === 200) {
                dataRoles.splice(0, dataRoles.length, ...response.data.result);
                loading.value = false;
                return true;
            }
            loading.value = false;
            return false;
        } catch (e) {
            console.error('Error get all roles: ', e);
            loading.value = false;
            return false;
        }
    };

    const createRole = async (name: string, description: string, permissions: any) => {
        const data = {
            name: name,
            description: description,
            permissions: Object.keys(permissions).filter((key) => permissions[key] === true),
        };

        try {
            const response = await axios.post(`${createRoles}`, data, {
                headers: {
                    includeAccessToken: true,
                },
            });
            return response.status === 200;
        } catch (e) {
            console.error('Error updating role: ', e);
            return false;
        }
    };

    const deleteRoles = async (name: string) => {
        try {
            const response = await axios.delete(`${deleteRole}/${name}`, {
                headers: {
                    includeAccessToken: true,
                },
            });
            return response.status === 200;
        } catch (e) {
            console.error('Error delete role: ', e);
            return false;
        }
    };

    onMounted(() => {
        getAllRoles();
    });

    return { loading, getAllRoles, createRole, deleteRoles, dataRoles };
}
