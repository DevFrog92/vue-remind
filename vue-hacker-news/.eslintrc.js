module.exports = {
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/recommended",
    "eslint:recommended"
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "indent": ["error", 2],
    "eol-last": ["error", "always"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "one-var": ["error", "never"],
    "curly": ["error", "all"],
    "keyword-spacing": ["error", { "before": true, "after": true, }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, }],
    "comma-spacing": ["error", { "before": false, "after": true, }],
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": "error",
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
      "imports": "always",
      "exports": "always",
      "functions": "never",
    }],
    "prefer-arrow-callback": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return", },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*", },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"], }
    ],
  },
}
