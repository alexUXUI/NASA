module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:cypress/recommended",
    "next",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
