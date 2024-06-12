import { ref, onMounted } from 'vue';
import { getAllRole } from '@/constant/api';
import axios from '@/lib/axios';

export default function useRoles() {
    const loading = ref(false);
    const dataRoles = ref([]);

    const getAllRoles = async () => {
        try {
            loading.value = true;
            const response = await axios.get(getAllRole, {
                headers: {
                    includeAccessToken: true,
                },
            });
            if (response.status === 200) {
                dataRoles.value = response.data.result;
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

    onMounted(() => {
        getAllRoles();
    });

    return { loading, getAllRoles, dataRoles };
}
