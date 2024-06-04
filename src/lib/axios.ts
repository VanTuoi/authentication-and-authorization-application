/* eslint-disable prettier/prettier */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ref } from 'vue';
import { authRefreshToken } from '@/constant/api';

export const apiPort = 'http://localhost:8080/identity';

const flag = ref(true);
let isRefreshing = false;
let failedQueue: {
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

const instance = axios.create({
    baseURL: apiPort,
});

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

instance.interceptors.request.use(
    async (config) => {
        await delay(500);
        const includeAccessToken = config.headers?.includeAccessToken || false;
        if (includeAccessToken) {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            flag.value = true;
        }
        return response;
    },
    async (error: any) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - 401');

            if (!originalRequest._retry) {
                originalRequest._retry = true;

                if (flag.value) {
                    flag.value = false;

                    if (isRefreshing) {
                        return new Promise(function (resolve, reject) {
                            failedQueue.push({ resolve, reject });
                        })
                            .then((token) => {
                                originalRequest.headers.Authorization =
                                    'Bearer ' + token;
                                return instance(originalRequest);
                            })
                            .catch((err) => {
                                return Promise.reject(err);
                            });
                    }

                    isRefreshing = true;

                    const refreshToken = localStorage.getItem('refreshToken');
                    return new Promise(function (resolve, reject) {
                        axios
                            .post(`${apiPort}${authRefreshToken}`, {
                                token: refreshToken,
                            })
                            .then(({ data }) => {
                                localStorage.setItem(
                                    'accessToken',
                                    data.result.token
                                );
                                localStorage.setItem(
                                    'refreshToken',
                                    data.result.token
                                ); // Cập nhật refresh token mới nếu có
                                flag.value = true;
                                instance.defaults.headers.common[
                                    'Authorization'
                                ] = 'Bearer ' + data.result.token;
                                originalRequest.headers.Authorization =
                                    'Bearer ' + data.result.token;
                                processQueue(null, data.result.token);
                                resolve(instance(originalRequest));
                            })
                            .catch((err) => {
                                processQueue(err, null);
                                reject(err);
                            })
                            .finally(() => {
                                isRefreshing = false;
                            });
                    });
                } else {
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
