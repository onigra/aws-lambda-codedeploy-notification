module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    semi: [2, "always"],
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        trailingComma: "none",
        arrowParens: "always",
        printWidth: 100
      }
    ]
  },
  globals: {}
};
