export const apiPort = process.env.VUE_APP_API_URL;

// Xác thực
export const authDangNhap = '/auth/token';
export const authRefreshToken = '/auth/refresh';
export const authGetThongTin = '/users/myInfo';
export const authCapNhat = '/users';

// quản lý
export const getAllUser = '/users';
export const createUsers = '/users';
export const deleteUsers = '/users';

// Quyền
export const getAllRole = '/roles';
export const createRoles = '/roles';
export const updateRole = 'users/role';
export const deleteRole = '/roles';

//
export const getAllPermission = '/permissions';
export const createPermission = '/permissions';
export const deletePermission = '/permissions';
