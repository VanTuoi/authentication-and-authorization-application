<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>Permissions table</h6>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <argon-input
                    id="name"
                    v-model="namePermissionFind"
                    style="width: 200px"
                    type="text"
                    placeholder="Find permission..."
                    name="name"
                    size="md"
                />
                <argon-button
                    variant="gradient"
                    color="success"
                    size="md"
                    @click="AddNewPermission(true)"
                    >Add new permission</argon-button
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
                                Name Permissions
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                                Description
                            </th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loadingPermissions">
                            <td :colspan="4" style="text-align: center; height: 15vh">
                                <span
                                    class="spinner-border spinner-border-sm"
                                    style="width: 1.2rem; height: 1.2rem"
                                    aria-hidden="true"
                                ></span>
                            </td>
                        </tr>
                        <tr
                            v-for="(permission, index) in filteredPermissions"
                            v-else
                            :key="permission.name"
                        >
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
                                            {{ permission.name }}
                                        </h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">
                                    {{ permission.description }}
                                </p>
                            </td>
                            <td>
                                <div class="align-middle d-flex justify-content-start gap-2">
                                    <a
                                        data-toggle="tooltip"
                                        style="cursor: pointer"
                                        class="text-secondary font-weight-bold text-xs"
                                        data-original-title="Edit permission"
                                        @click="
                                            handleEditClick(permission.name, permission.description)
                                        "
                                    >
                                        Edit
                                    </a>
                                    <a
                                        data-toggle="tooltip"
                                        style="cursor: pointer"
                                        class="text-secondary font-weight-bold text-xs"
                                        data-original-title="Delete permission"
                                        @click="handleDeleteClick(permission.name)"
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
        :handle-save="handleUpdatePermission"
        @update:show-modal="updateModal"
    >
        <argon-input
            id="nameNewPermission"
            v-model="namePermissionSelect"
            :is-disabled="true"
            style="width: 200px"
            type="text"
            placeholder="Permission name"
            name="nameNewPermission"
            size="md"
        />
        <argon-textarea
            id="descriptionNewPermission"
            v-model="descriptionPermissionSelect"
            type="text"
            placeholder="Permission description"
            name="descriptionNewPermission"
            rows="3"
        />
    </argon-dialog>

    <argon-dialog
        :is-save="false"
        title="Add new Permission"
        size="modal-md"
        description=""
        position="center"
        :show-modal="modalAddNewPermissionVisible"
        :handle-save="handleAddNewPermission"
        @update:show-modal="AddNewPermission"
    >
        <argon-input
            id="nameNewPermission"
            v-model="nameNewPermission"
            style="width: 200px"
            type="text"
            placeholder="Permission name"
            name="nameNewPermission"
            size="md"
        />
        <argon-textarea
            id="descriptionNewPermission"
            v-model="descriptionNewPermission"
            placeholder="Permission description"
            name="descriptionNewPermission"
            rows="3"
        />
    </argon-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import usePermissions from '@/services/usePermissions';
import ArgonInput from '@/components/ArgonInput.vue';
import ArgonButton from '@/components/ArgonButton.vue';
import ArgonDialog from '@/components/ArgonDialog.vue';
import ArgonTextarea from '@/components/ArgonTextarea.vue';
import notify from '@/lib/toast';

const modalVisible = ref(false);
const modalAddNewPermissionVisible = ref(false);

const namePermissionFind = ref('');

const namePermissionSelect = ref('');
const descriptionPermissionSelect = ref('');

const nameNewPermission = ref('');
const descriptionNewPermission = ref('');

const updateModal = (value) => {
    modalVisible.value = value;
};

const AddNewPermission = (value) => {
    modalAddNewPermissionVisible.value = value;
};

const handleEditClick = (namePermission, descriptionPermission) => {
    namePermissionSelect.value = namePermission;
    descriptionPermissionSelect.value = descriptionPermission;
    updateModal(true);
};

const handleAddNewPermission = async () => {
    const isSuccess = await createPermissions(
        nameNewPermission.value,
        descriptionNewPermission.value
    );

    if (isSuccess) {
        notify.success('Create permission is successful');
        dataPermissions.push({
            name: nameNewPermission.value,
            description: descriptionNewPermission.value,
        });
        nameNewPermission.value = '';
        descriptionNewPermission.value = '';
    } else {
        notify.error('Create permission failed');
    }

    AddNewPermission(false);
};

const handleUpdatePermission = async () => {
    const isSuccess = await createPermissions(
        namePermissionSelect.value,
        descriptionPermissionSelect.value
    );

    if (isSuccess) {
        notify.success('Update permission is successful');
        if (Array.isArray(dataPermissions)) {
            const index = dataPermissions.findIndex(
                (perm) => perm.name === namePermissionSelect.value
            );

            if (index !== -1) {
                dataPermissions[index].description = descriptionPermissionSelect.value;
                dataPermissions[index].name = namePermissionSelect.value;
            } else {
                notify.error('Permission not found');
            }
        } else {
            notify.error('dataPermissions is not an array');
        }
    } else {
        notify.error('Update permission failed');
    }

    modalVisible.value = false;
};
const handleDeleteClick = async (namePermissionSelect) => {
    const isSuccess = await deletePermissions(namePermissionSelect);

    if (isSuccess) {
        notify.success('Delete permission is successful');
        const index = dataPermissions.findIndex((perm) => perm.name === namePermissionSelect);

        if (index !== -1) {
            dataPermissions.splice(index, 1);
        } else {
            notify.error('Permission not found');
        }
    } else {
        notify.error('Delete permission failed');
    }
};

const filteredPermissions = computed(() => {
    if (!namePermissionFind.value) {
        return dataPermissions;
    }
    const searchLower = namePermissionFind.value.toLowerCase();
    return dataPermissions.filter((role) => role.name.toLowerCase().includes(searchLower));
});

const {
    loading: loadingPermissions,
    createPermissions,
    deletePermissions,
    dataPermissions,
} = usePermissions();
</script>
