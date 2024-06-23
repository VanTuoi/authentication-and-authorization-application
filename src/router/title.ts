// src/directives/title.ts

import { Directive, App, DirectiveBinding } from 'vue';

const setTitle: Directive<App, string> = {
    mounted(el, binding) {
        document.title = binding.value || ''; // Set title khi component được mount
    },
    updated(el, binding) {
        document.title = binding.value || ''; // Update title khi giá trị thay đổi
    },
    unmounted() {
        // Xử lý khi component bị unmount (nếu cần thiết)
    },
};

export default setTitle;
