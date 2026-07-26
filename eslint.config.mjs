import baseConfig from "./packages/eslint-config/base.mjs";

export default [
  ...baseConfig,
  {
    files: ["apps/estudioblanco/tests/**/*.mjs"],
    languageOptions: {
      globals: {
        URL: "readonly",
        process: "readonly",
        Request: "readonly",
        Response: "readonly",
      },
    },
  },
];
