<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>Role table</h6>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <argon-input
                    id="name"
                    v-model="nameRoleFind"
                    style="width: 200px"
                    type="text"
                    placeholder="Find role..."
                    name="name"
                    size="md"
                />
                <argon-button variant="gradient" color="success" size="md" @click="AddNewRole(true)"
                    >Add new role</argon-button
                >
            </div>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center"
                            >
                                No.
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Name
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                                Description
                            </th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Permissions
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loadingRoles || loadingPermissions">
                            <td :colspan="4" style="text-align: center; height: 15vh">
                                <span
                                    class="spinner-border spinner-border-sm"
                                    style="width: 1.2rem; height: 1.2rem"
                                    aria-hidden="true"
                                ></span>
                            </td>
                        </tr>
                        <tr v-for="(role, index) in filteredRoles" v-else :key="role.name">
                            <td>
                                <div
                                    class="d-flex px-2 py-1 justify-content-center align-items-center"
                                >
                                    <h6 class="mb-0 text-sm">
                                        {{ index + 1 }}
                                    </h6>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">
                                            {{ role.name }}
                                        </h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">
                                    {{ role.description }}
                                </p>
                            </td>
                            <td class="align-middle text-center">
                                <span
                                    v-if="role.permissions.length === 0"
                                    class="badge badge-sm bg-gradient-secondary"
                                >
                                    NO PERMISSIONS
                                </span>
                                <span
                                    v-for="permission in role.permissions"
                                    v-else
                                    :key="permission.name"
                                    class="m-1 badge badge-sm bg-gradient-success"
                                >
                                    {{ permission.name }}
                                </span>
                            </td>
                            <td class="align-middle">
                                <div class="align-middle d-flex justify-content-start gap-2">
                                    <a
                                        data-toggle="tooltip"
                                        style="cursor: pointer"
                                        class="text-secondary font-weight-bold text-xs"
                                        data-original-title="Edit permission"
                                        @click="handleEditClick(role.name)"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        data-toggle="tooltip"
                                        style="cursor: pointer"
                                        class="text-secondary font-weight-bold text-xs"
                                        data-original-title="Delete permission"
                                        @click="handleDeleteClick(role.name)"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <argon-dialog
        :is-save="true"
        title="Edit permissions"
        size="modal-md"
        description=""
        position="center"
        :show-modal="modalVisible"
        :handle-save="handleUpdateRole"
        @update:show-modal="updateModal"
    >
        <argon-checkbox
            v-for="permission in dataPermissions"
            :key="permission.name"
            v-model="selectedPermissions[permission.name]"
            :model-value="roleHasPermission(permission.name)"
        >
            {{ permission.name }} ({{ permission.description }})
        </argon-checkbox>
    </argon-dialog>

    <argon-dialog
        :is-save="false"
        title="Add new role"
        size="modal-md"
        description=""
        position="center"
        :show-modal="modalAddNewRoleVisible"
        :handle-save="handleAddNewRole"
        @update:show-modal="AddNewRole"
    >
        <argon-input
            id="nameNewRole"
            v-model="nameNewRole"
            style="width: 200px"
            type="text"
            placeholder="Role name"
            name="nameNewRole"
            size="md"
        />
        <argon-input
            id="descriptionNewRole"
            v-model="descriptionNewRole"
            style="width: 200px"
            type="text"
            placeholder="Role description"
            name="descriptionNewRole"
            size="md"
        />
        <p>Permissions</p>
        <argon-checkbox
            v-for="permission in dataPermissions"
            :key="permission.name"
            v-model="selectedPermissionsOfNewRole[permission.name]"
        >
            {{ permission.name }} ({{ permission.description }})
        </argon-checkbox>
    </argon-dialog>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import usePermissions from '@/services/usePermissions';
import ArgonInput from '@/components/ArgonInput.vue';
import useRoles from '@/services/useRoles';
import ArgonButton from '@/components/ArgonButton.vue';
import ArgonDialog from '@/components/ArgonDialog.vue';
import ArgonCheckbox from '@/components/ArgonCheckbox.vue';
import notify from '@/lib/toast';

const modalVisible = ref(false);
const modalAddNewRoleVisible = ref(false);
const nameRoleSelect = ref('');
const nameRoleFind = ref('');
const nameNewRole = ref('');
const descriptionNewRole = ref('');
const selectedPermissions = reactive({});
const selectedPermissionsOfNewRole = reactive({});

const updateModal = (value) => {
    modalVisible.value = value;
};

const AddNewRole = (value) => {
    modalAddNewRoleVisible.value = value;
};

const handleEditClick = (nameRole) => {
    updateModal(true);
    nameRoleSelect.value = nameRole;
    // Reset selectedPermissions when opening the modal
    for (const key in selectedPermissions) {
        selectedPermissions[key] = false;
    }
    const role = dataRoles.find((role) => role.name === nameRole);
    if (role) {
        role.permissions.forEach((permission) => {
            selectedPermissions[permission.name] = true;
        });
    }
};

const handleAddNewRole = async () => {
    const isSuccess = await createRole(
        nameNewRole.value,
        descriptionNewRole.value,
        selectedPermissionsOfNewRole
    );
    if (isSuccess) {
        notify.success('Create role is successful');
        await getAllRoles();
    } else {
        notify.error('Create role failed');
    }
    AddNewRole(false);
};

const handleUpdateRole = async () => {
    const selected = Object.keys(selectedPermissions).filter(
        (permission) => selectedPermissions[permission]
    );
    const role = dataRoles.find((role) => role.name === nameRoleSelect.value);
    const isSuccess = await createRole(role.name, role.description, selectedPermissions);
    if (isSuccess) {
        notify.success('Update permission is successful');
        const roleIndex = dataRoles.findIndex((role) => role.name === nameRoleSelect.value);
        if (roleIndex !== -1) {
            dataRoles[roleIndex].permissions = selected.map((permissionName) => ({
                name: permissionName,
            }));
        }
    } else {
        notify.error('Update permission failed');
    }
    modalVisible.value = false;
};

const handleDeleteClick = async (nameRole) => {
    const isSuccess = await deleteRoles(nameRole);

    if (isSuccess) {
        notify.success('Delete role is successful');
        const index = dataRoles.findIndex((perm) => perm.name === nameRole);

        if (index !== -1) {
            dataRoles.splice(index, 1);
        } else {
            notify.error('Role not found');
        }
    } else {
        notify.error('Delete role failed');
    }
};

const roleHasPermission = (permissionName) => {
    const role = dataRoles.find((role) => role.name === nameRoleSelect.value);
    return role && role.permissions.some((permission) => permission.name === permissionName);
};

const filteredRoles = computed(() => {
    if (!nameRoleFind.value) {
        return dataRoles;
    }
    const searchLower = nameRoleFind.value.toLowerCase();
    return dataRoles.filter((role) => role.name.toLowerCase().includes(searchLower));
});

const { dataPermissions } = usePermissions();
const { dataRoles, getAllRoles, createRole, deleteRoles, loading: loadingRoles } = useRoles();
</script>
