import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      ecmaVersion: "latest", // Define suporte para ES6+
      sourceType: "module",  // Suporta import/export
    },

    plugins: {
      react: pluginReact
    },

    rules: {
      ...pluginJs.configs.recommended.rules, // Aplica regras JS padrão
      ...pluginReact.configs["flat/recommended"].rules, // Aplica regras React
      "no-unused-vars": "warn", // Apenas alerta em variáveis não usadas
      "no-console": "off" // Permite console.log
    }
  }
];
