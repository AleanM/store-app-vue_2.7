module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
      },
    "extends": ['eslint:recommended', 'plugin:vue/recommended'],
    "parserOptions":{
        parser: 'babel-eslint',
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
