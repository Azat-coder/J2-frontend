module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
    ],
    parserOptions: {
      ecmaVersion: 2021,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ],
      'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ]
    }
  };
  