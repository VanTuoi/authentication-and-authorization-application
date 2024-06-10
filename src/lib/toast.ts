/* eslint-disable prettier/prettier */
// Import necessary packages
import { toast, ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// Define a type for the notify functions
type NotifyFunction = (message: string, options?: ToastOptions) => void;

// Define custom toast functions
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
                backgroundImage:
                    'linear-gradient(310deg, #2dce89 0%, #2dcecc 100%)',
            },
            ...options,
        });
    },
    error: (message: string, options: ToastOptions = {}) => {
        toast.error(message, {
            autoClose: 3000,
            progressStyle: {
                backgroundImage: 'linear-gradient(310deg, #ff9999 0%, #cc0000 100%)'
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
};

// Export the custom notify object
export default notify;
