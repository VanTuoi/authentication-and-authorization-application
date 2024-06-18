import { toast, ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { h } from 'vue';
import CustomToast from './CustomToast.vue';

type ActionCallback = () => void;

const notify = {
    info: (message: string, options: ToastOptions = {}) => {
        toast.info(message, {
            autoClose: 3000,
            ...options,
        });
    },
    success: (message: string, options: ToastOptions = {}) => {
        toast.success(message, {
            autoClose: 3000,
            progressStyle: {
                backgroundImage: 'linear-gradient(310deg, #2dce89 0%, #2dcecc 100%)',
            },
            ...options,
        });
    },
    error: (message: string, options: ToastOptions = {}) => {
        toast.error(message, {
            autoClose: 3000,
            progressStyle: {
                backgroundImage: 'linear-gradient(310deg, #ff9999 0%, #cc0000 100%)',
            },
            ...options,
        });
    },
    warn: (message: string, options: ToastOptions = {}) => {
        toast.warn(message, {
            autoClose: 3000,
            ...options,
        });
    },
    custom: (
        message: string,
        onUndo: ActionCallback,
        options: ToastOptions & { timeClose?: number } = {}
    ) => {
        const timeClose = options.timeClose || 3000;
        const toastId = toast(
            h(CustomToast, {
                message,
                timeClose,
                actionCallback: () => {
                    toast.remove(toastId);
                    onUndo();
                },
            }),
            {
                autoClose: timeClose,
                progressStyle: {
                    backgroundImage: 'linear-gradient(310deg, #add8e6 0%, #1189ef 100%)',
                },
                ...options,
            }
        );
    },
};

export default notify;
