/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/component-tags-order': ['error', {order: ['template', 'script', 'style']}],
        'vue/no-v-html': 0,
        '@typescript-eslint/no-var-requires': 0,
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'indent': ['error', 4],
        'vue/v-on-event-hyphenation': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'always',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/attributes-order': ['error', {
            'order': [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                ['UNIQUE', 'SLOT'],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT'
            ],
            'alphabetical': false
        }]
    },
    env: {
        'vue/setup-compiler-macros': true,
        es2021: true,
        node: true
    }
}
