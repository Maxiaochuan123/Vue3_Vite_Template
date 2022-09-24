/*
 * @Date: 2022-07-17
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-19
 * @Description:
 */
module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  rules: {
    // override/add rules settings here, such as:
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    '@typescript-eslint/no-var-requires': 0
  }
}
