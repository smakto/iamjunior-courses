import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: { "no-console": "warn" },
    env: {
      node: true,
      es2021: true,
    },
  },

  pluginJs.configs.recommended,
];
