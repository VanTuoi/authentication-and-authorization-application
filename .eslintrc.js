module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error', { tabWidth: 4, useTabs: false }],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off', // Vô hiệu hóa quy tắc cấm sử dụng v-html
        // 'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
    },
};
