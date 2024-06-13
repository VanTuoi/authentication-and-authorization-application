import { ref, onMounted, reactive } from 'vue';
import { getAllPermission } from '@/constant/api';
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
                dataPermissions.splice(
                    0,
                    dataPermissions.length,
                    ...response.data.result
                );
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

    onMounted(() => {
        getAllPermissions();
    });

    return { loading, getAllPermissions, dataPermissions };
}
