<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>User table</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Username
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                                FirstName
                            </th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                LastName
                            </th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Date of brithday
                            </th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Role
                            </th>
                            <th class="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loading">
                            <td
                                :colspan="6"
                                style="text-align: center; height: 15vh"
                            >
                                <span
                                    class="spinner-border spinner-border-sm"
                                    style="width: 1.2rem; height: 1.2rem"
                                    aria-hidden="true"
                                ></span>
                            </td>
                        </tr>
                        <tr v-for="user in dataUsers" v-else :key="user.id">
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div
                                        class="d-flex flex-column justify-content-center"
                                    >
                                        <h6 class="mb-0 text-sm">
                                            {{ user.username }}
                                        </h6>
                                        <p class="text-xxs text-secondary mb-0">
                                            (id: {{ user.id }})
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">
                                    {{ user.firstName }}
                                </p>
                            </td>
                            <td class="align-middle text-center text-sm">
                                <p class="text-xs font-weight-bold mb-0">
                                    {{ user.lastName }}
                                </p>
                            </td>
                            <td class="align-middle text-center">
                                <span
                                    class="text-secondary text-xs font-weight-bold"
                                    >{{
                                        dayjs(user.dob).format('DD/MM/YYYY')
                                    }}</span
                                >
                            </td>
                            <td class="align-middle text-center">
                                <span
                                    v-if="user.roles.length === 0"
                                    class="badge badge-sm bg-gradient-secondary"
                                    >NO ROLES</span
                                >
                                <span
                                    v-for="role in user.roles"
                                    v-else
                                    :key="role.name"
                                    class="m-1 badge badge-sm bg-gradient-success"
                                    >{{ role.name }}</span
                                >
                            </td>
                            <td class="align-middle">
                                <a
                                    data-toggle="tooltip"
                                    style="cursor: pointer"
                                    class="text-secondary font-weight-bold text-xs"
                                    data-original-title="Edit user"
                                    @click="handleEditClick(user.id)"
                                    >Edit roles</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <argon-dialog
        title="Edit roles"
        size="modal-sm"
        description=""
        position="center"
        :show-modal="modalVisible"
        :handle-save="handleUpdateRole"
        @update:show-modal="updateModal"
    >
        <argon-checkbox
            v-for="role in dataRoles"
            :key="role.name"
            v-model="selectedRoles[role.name]"
            :model-value="userHasRole(role.name)"
        >
            {{ role.name }}
        </argon-checkbox>
    </argon-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import useUsers from '@/services/useUsers';
import useRoles from '@/services/useRoles';
import ArgonDialog from '@/components/ArgonDialog.vue';
import ArgonCheckbox from '@/components/ArgonCheckbox.vue';
import dayjs from 'dayjs';
import notify from '@/lib/toast';

const modalVisible = ref(false);
const idUserSelect = ref('');
const selectedRoles = reactive({});

const updateModal = (value) => {
    modalVisible.value = value;
};

const handleEditClick = (userId) => {
    updateModal(true);
    idUserSelect.value = userId;
    const user = dataUsers.find((user) => user.id === userId);
    if (user) {
        user.roles.forEach((role) => {
            selectedRoles[role.name] = true;
        });
    }
};

const handleUpdateRole = async () => {
    const selected = Object.keys(selectedRoles).filter(
        (role) => selectedRoles[role]
    );
    const isSuccess = await updateRoleUser(idUserSelect.value, selected);
    if (isSuccess) {
        notify.success(`Update role is successfully`);
        const userIndex = dataUsers.findIndex(
            (user) => user.id === idUserSelect.value
        );
        if (userIndex !== -1) {
            dataUsers[userIndex].roles = selected.map((roleName) => ({
                name: roleName,
            }));
        }
    } else {
        notify.error(`Update role is failed`);
    }
    modalVisible.value = false;
};

const userHasRole = (roleName) => {
    const user = dataUsers.find((user) => user.id === idUserSelect.value);
    return user && user.roles.some((role) => role.name === roleName);
};

const { dataUsers, updateRoleUser, getAllUsers, loading } = useUsers();
const { dataRoles } = useRoles();
</script>
