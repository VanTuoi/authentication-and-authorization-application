<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>User table</h6>
            <div class="d-flex justify-content-between align-items-baseline mb-3">
                <div class="d-flex align-items-end gap-2">
                    <argon-input
                        id="name"
                        v-model="nameUserFind"
                        style="width: 200px"
                        type="text"
                        placeholder="Find user..."
                        name="name"
                        size="md"
                    />
                    <argon-select
                        v-model:selectedValue="selectedOption"
                        default-value=""
                        :options="selectOptions"
                        select-class="form-select custom-select-class"
                        aria-label="Choose an option"
                        label-select="Find by role"
                    ></argon-select>
                </div>
                <argon-button variant="gradient" color="success" size="md" @click="AddNewUser(true)"
                    >Add new user</argon-button
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
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loading && dataUsers.length === 0">
                            <td :colspan="7" style="text-align: center; height: 15vh">
                                <span
                                    class="spinner-border spinner-border-sm"
                                    style="width: 1.2rem; height: 1.2rem"
                                    aria-hidden="true"
                                ></span>
                            </td>
                        </tr>
                        <tr v-for="(user, index) in filteredUsers" :key="user.id">
                            <td>
                                <div
                                    class="d-flex px-2 py-1 justify-content-center align-items-center"
                                >
                                    <h6 class="mb-0 text-sm">
                                        {{ pageSize * currentPage + index + 1 }}
                                    </h6>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
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
                                <span class="text-secondary text-xs font-weight-bold">{{
                                    dayjs(user.dob).format('DD/MM/YYYY')
                                }}</span>
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
                                <div class="align-items-center d-flex justify-content-start gap-2">
                                    <argon-button
                                        variant="gradient"
                                        color="success"
                                        size="sm"
                                        @click="[handleEditClick(user.id)]"
                                        >Edit roles</argon-button
                                    >
                                    <argon-button
                                        variant="gradient"
                                        color="danger"
                                        size="sm"
                                        @click="handleClickDelete(user.id)"
                                    >
                                        Delete
                                    </argon-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7" class="text-center">
                                <div class="d-flex justify-content-end align-items-center gap-1">
                                    <argon-button
                                        :loading="loading && currentAction === 'First'"
                                        :disabled="currentPage === 0 || loading"
                                        variant="text"
                                        color="info"
                                        size="sm"
                                        class="me-2"
                                        @click="
                                            () => {
                                                currentAction = 'First';
                                                currentPage = 0;
                                            }
                                        "
                                    >
                                        <i class="fas fa-angle-double-left"></i>
                                    </argon-button>
                                    <argon-button
                                        icon="angle-left"
                                        icon-position="before"
                                        :loading="loading && currentAction === 'Previous'"
                                        :disabled="!canGoToPreviousPage || loading"
                                        variant="text"
                                        color="info"
                                        size="sm"
                                        class="me-2"
                                        @click="
                                            () => {
                                                currentAction = 'Previous';
                                                if (currentPage > 0) currentPage--;
                                            }
                                        "
                                    >
                                    </argon-button>
                                    <span class="me-2"
                                        >Page {{ currentPage + 1 }} of {{ totalPages }}</span
                                    >
                                    <argon-button
                                        icon="angle-right"
                                        icon-position="after"
                                        :loading="loading && currentAction === 'Next'"
                                        :disabled="!canGoToNextPage || loading"
                                        variant="text"
                                        color="info"
                                        size="sm"
                                        @click="
                                            () => {
                                                currentAction = 'Next';
                                                if (currentPage < totalPages - 1) currentPage++;
                                            }
                                        "
                                    >
                                    </argon-button>
                                    <argon-button
                                        :loading="loading && currentAction === 'Last'"
                                        :disabled="currentPage >= totalPages - 1 || loading"
                                        variant="text"
                                        color="info"
                                        size="sm"
                                        @click="
                                            () => {
                                                currentAction = 'Last';
                                                currentPage = totalPages - 1;
                                            }
                                        "
                                    >
                                        <i class="fas fa-angle-double-right"></i>
                                    </argon-button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <argon-dialog
        :is-save="true"
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
            {{ role.name }} ({{ role.description }})
        </argon-checkbox>
    </argon-dialog>
    <argon-dialog
        :is-save="false"
        title="Add new User"
        size="modal-md"
        description=""
        position="center"
        :show-modal="modalAddNewUserVisible"
        :handle-save="handleAddNewUser"
        @update:show-modal="AddNewUser"
    >
        <argon-input
            id="username"
            v-model="userInfo.username"
            type="text"
            placeholder="Username"
            name="username"
            size="md"
        />
        <argon-input
            id="password"
            v-model="userInfo.password"
            type="password"
            placeholder="Password"
            name="password"
            size="md"
        />
        <argon-input
            id="firstName"
            v-model="userInfo.firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            size="md"
        />
        <argon-input
            id="lastName"
            v-model="userInfo.lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            size="md"
        />
        <a-date-picker
            v-model:value="userInfo.dob"
            placeholder="Date of Birthday"
            size="large"
            format="DD/MM/YYYY"
        />
    </argon-dialog>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue';
import ArgonDialog from '@/components/ArgonDialog.vue';
import ArgonSelect from '@/components/ArgonSelect.vue';
import ArgonCheckbox from '@/components/ArgonCheckbox.vue';
import ArgonInput from '@/components/ArgonInput.vue';
import ArgonButton from '@/components/ArgonButton.vue';
import ArgonConfirmButton from '@/components/ArgonConfirmButton.vue';
import notify from '@/lib/toast';
import dayjs from 'dayjs';
import useUsers from '@/services/useUsers';
import useRoles from '@/services/useRoles';

// Data
const { dataUsers, totalRecords, updateRoleUser, createUser, getAllUsers, deleteUser, loading } =
    useUsers();
const { dataRoles, getAllRoles } = useRoles();

// Page Break
const currentPage = ref(0);
const pageSize = ref(5);
const currentAction = ref('');

// Edit User
const modalVisible = ref(false);
const idUserSelect = ref('');
const selectedRoles = reactive({});

// Add new user
const userInfo = reactive({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
});
const modalAddNewUserVisible = ref(false);
const AddNewUser = (value) => {
    modalAddNewUserVisible.value = value;
};

// Options Find
const nameUserFind = ref('');
const selectedOption = ref('');
const selectOptions = ref([]);

const totalPages = computed(() => {
    return Math.ceil(totalRecords.value / pageSize.value);
});

const canGoToPreviousPage = computed(() => currentPage.value > 0);
const canGoToNextPage = computed(() => currentPage.value < totalPages.value - 1);

const loadUsers = async () => {
    await getAllUsers(currentPage.value, pageSize.value);
};

onMounted(() => {
    loadUsers();
});

watch([currentPage, pageSize], () => {
    loadUsers();
});

onMounted(() => {
    getAllRoles().then(() => {
        if (dataRoles.length > 0) {
            selectOptions.value = dataRoles.map((role) => ({
                id: role.name,
                value: `${role.name}`,
            }));
        }
    });
});

const filteredUsers = computed(() => {
    const searchLower = nameUserFind.value ? nameUserFind.value.toLowerCase() : '';
    const selectedRole = selectedOption.value;
    return dataUsers.filter((user) => {
        const matchesName = user.username.toLowerCase().includes(searchLower);
        const matchesRole = selectedRole
            ? user.roles.some((role) => role.name === selectedRole)
            : true;
        return matchesName && matchesRole;
    });
});

const handleClickDelete = async (id) => {
    let millisecondsDelay = 5000;
    let isDelete = true;
    let userToDelete = null;
    let userIndexToDelete = -1;

    const delay = () => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(resolve, millisecondsDelay);
            const checkDeleteStatus = setInterval(() => {
                if (!isDelete) {
                    clearTimeout(timer);
                    clearInterval(checkDeleteStatus);
                    reject(new Error('Delete cancelled'));
                }
            }, 100);
        });
    };

    const userIndex = dataUsers.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        userToDelete = dataUsers[userIndex];
        userIndexToDelete = userIndex;
        dataUsers.splice(userIndex, 1); // Remove the user from the list
    }

    // Show custom notification with undo option
    notify.custom(
        'Delete user is successfully.',
        () => {
            isDelete = false;
            // Restore the user to the original position if delete is cancelled
            if (userToDelete) {
                dataUsers.splice(userIndexToDelete, 0, userToDelete);
                userToDelete = null;
                userIndexToDelete = -1;
            }
            millisecondsDelay = 0; // Set delay to 0 to prevent timeout
        },
        { timeClose: millisecondsDelay } // Set the delay time for the notification
    );

    try {
        // Await the delay Promise or timeout
        await Promise.race([
            delay(),
            new Promise((resolve) => setTimeout(resolve, millisecondsDelay, 'Timeout')),
        ]);

        if (!isDelete) {
            console.log('Delete was cancelled');
            return; // Exit if delete was cancelled
        }

        // Proceed to call the API to delete the user if confirmed
        let status = await deleteUser(id);
        if (!status) {
            notify.error('Delete user is failed');
            // Restore the user if the delete action failed
            if (userToDelete) {
                dataUsers.splice(userIndexToDelete, 0, userToDelete);
                userToDelete = null;
                userIndexToDelete = -1;
            }
        } else {
            // Reload the user list based on the current page
            if (currentPage.value === totalPages.value - 1 && dataUsers.length < pageSize.value) {
                loadUsers(currentPage.value);
            } else if (dataUsers.length === 0 && currentPage.value > 0) {
                currentPage.value--;
                loadUsers(currentPage.value);
            } else {
                loadUsers(currentPage.value);
            }
        }
    } catch (error) {
        console.log(error.message); // Log any errors
    }
};
const handleAddNewUser = async () => {
    const newUser = await createUser(userInfo);
    if (newUser != null) {
        notify.success('Create user is successfully');
        if (currentPage.value === totalPages.value - 1 && dataUsers.length < pageSize.value) {
            dataUsers.push({
                id: newUser.id,
                username: newUser.username,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                dob: newUser.dob,
                roles: newUser.roles ? newUser.roles : [],
            });
        } else {
            notify.info(
                'User created successfully but not added to the current list due to pagination.'
            );
            currentPage.value = totalPages.value - 1;
            loadUsers(currentPage.value);
        }
        resetUserInfo();
        modalAddNewUserVisible.value = false;
    } else {
        notify.error('Create user is failed');
    }
};

const resetUserInfo = () => {
    userInfo.username = '';
    userInfo.password = '';
    userInfo.firstName = '';
    userInfo.lastName = '';
    userInfo.dob = '';
};

const updateModal = (value) => {
    modalVisible.value = value;
};

const handleEditClick = (userId) => {
    updateModal(true);
    idUserSelect.value = userId;

    for (const key in selectedRoles) {
        selectedRoles[key] = false;
    }

    const user = dataUsers.find((user) => user.id === userId);
    if (user) {
        user.roles.forEach((role) => {
            selectedRoles[role.name] = true;
        });
    }
};

const handleUpdateRole = async () => {
    const selected = Object.keys(selectedRoles).filter((role) => selectedRoles[role]);
    const isSuccess = await updateRoleUser(idUserSelect.value, selected);
    if (isSuccess) {
        notify.success(`Update role is successfully`);
        const userIndex = dataUsers.findIndex((user) => user.id === idUserSelect.value);
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
</script>

<!-- 
<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>User table</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <a-table :data-source="dataSource" :columns="columns" row-key="id" />
        </div>
    </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import useUsers from '@/services/useUsers';
import dayjs from 'dayjs';

const { dataUsers } = useUsers();

const columns = ref([
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dob',
        key: 'dob',
        customRender: ({ text }) => dayjs(text).format('DD/MM/YYYY'),
    },
]);

const dataSource = ref([]);

watch(
    dataUsers,
    (newValue) => {
        const formattedData = newValue.map((user) => ({
            ...user,
            roles: user.roles.map((role) => role.name).join(', '),
        }));
        dataSource.value = formattedData;
        console.log('Data Source:', dataSource.value);
    },
    { immediate: true }
);
</script> -->
<!-- <template>
    <div class="d-flex gap-1">
        <a-select
            v-model:value="selectedValue"
            size="large"
            placeholder="Please select"
            style="width: 100px"
            @change="handleChange"
        >
            <a-select-option value="date">Date</a-select-option>
            <a-select-option value="week">Week</a-select-option>
            <a-select-option value="month">Month</a-select-option>
            <a-select-option value="quarter">Quarter</a-select-option>
            <a-select-option value="year">Year</a-select-option>
        </a-select>
        <a-range-picker
            v-model="dateRange"
            placement="bottomRight"
            size="large"
            :picker="selectedValue"
            format="DD/MM/YYYY"
            @change="handleDateChange"
        />
        <a-button size="large" @click="restoreAlerts">Restore</a-button>
    </div>
    <div class="mt-3 d-flex gap-1">
        <div
            v-if="showStartDateAlert"
            style="width: 300px"
            class="alert alert-info alert-dismissible fade show"
            role="alert"
        >
            startDate: {{ startDate.format('DD/MM/YYYY') }}
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="closeStartDateAlert"
            ></button>
        </div>
        <div
            v-if="showEndDateAlert"
            style="width: 300px"
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            endDate: {{ endDate.format('DD/MM/YYYY') }}
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="closeEndDateAlert"
            ></button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const selectedValue = ref('date');
const dateRange = ref([dayjs('2024-06-13T12:40:30.000Z'), dayjs('2024-06-13T12:40:30.000Z')]);
const startDate = ref(dayjs());
const endDate = ref(dayjs());

const showStartDateAlert = ref(true);
const showEndDateAlert = ref(true);

const handleChange = (value) => {
    console.log('Selected Value:', value);
};

function handleDateChange(value) {
    if (value && value.length === 2) {
        startDate.value = value[0];
        endDate.value = value[1];
        showStartDateAlert.value = true;
        showEndDateAlert.value = true;
    }
}

function restoreAlerts() {
    showStartDateAlert.value = true;
    showEndDateAlert.value = true;
    print();
}

function closeStartDateAlert() {
    showStartDateAlert.value = false;
}

function closeEndDateAlert() {
    showEndDateAlert.value = false;
}

function print() {
    // call api here
    console.log('startDate: ', startDate.value.format('DD/MM/YYYY'));
    console.log('endDate: ', endDate.value.format('DD/MM/YYYY'));
}
</script>

<style scoped>
.d-flex {
    display: flex;
}
.gap-1 > * + * {
    margin-left: 1rem; /* Adjust this value as needed */
}
.mt-3 {
    margin-top: 1rem;
}
</style> -->
