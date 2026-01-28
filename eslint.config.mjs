import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'eqeqeq': ['error', 'always'],
      'indent': ['error', 2],
      'no-eval': ['error'],
      'no-trailing-spaces': ['error'],
      'no-unused-vars': ['error'],
      'no-var': ['error'],
      'prefer-const': ['error'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/commonmark', extends: ['markdown/recommended'] },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
]);
