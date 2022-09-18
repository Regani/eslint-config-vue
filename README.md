# A shared Cherry-Very eslint configuration

Usage:

1. Install dependency
    ```sh
    npm i @cherry-very/eslint-config --save-dev
    ``` 
   or
    ```sh 
    yarn add @cherry-very/eslint-config --dev
    ```
3. In .eslintrc file do:
```js
const { vueEslintConfig } = require('@cherry-very/eslint-config')

module.exports = {
  ...vueEslintConfig
}
```
