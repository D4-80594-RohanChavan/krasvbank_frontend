module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 0,
        'react/jsx-one-expression-per-line': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'no-console': 0,
        'linebreak-style': 0,
        'react/destructuring-assignment': 0,
        'react/prop-types': 0,
        'object-curly-newline': 0,
        'react/no-unstable-nested-components': 0,
        'max-len': 0,
        'no-nested-ternary': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-max-props-per-line': 0,
        'no-else-return': 0,
        'jsx-a11y/control-has-associated-label': 0,
        'react/no-array-index-key': 0,
        'array-callback-return': 0,
        'no-param-reassign': 0,
        'prefer-destructuring': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/no-unescaped-entities': 0,
        'react/jsx-no-bind': 0,
        'no-plusplus': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
