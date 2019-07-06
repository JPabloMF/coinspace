module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "react-app", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "warn",
    "no-unneeded-ternary": ["error", true],
    "prettier/prettier": "error"
  }
};
