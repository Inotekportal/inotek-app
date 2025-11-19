import mantine from 'eslint-config-mantine';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

// @ts-check
export default defineConfig([
  // TypeScript recommended rules
  ...tseslint.configs.recommended,
  // Next.js TypeScript rules
  ...nextTs,
  // Next.js core web vitals rules (filter out jsx-a11y plugin)
  ...nextVitals,
  // Mantine rules (without jsx-a11y to avoid conflicts with nextVitals)
  ...mantine.filter((config) => !config.plugins?.['jsx-a11y']),

  // JSX-A11y recommended rules
  {
    rules: { ...jsxA11y.flatConfigs.recommended.rules },
  },

  // Restore next's special rules for jsx-a11y
  {
    rules: {
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },

  // Global ignores (new format)
  globalIgnores([
    '**/*.{mjs,cjs,js,d.ts,d.mts}',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // Own rules for Storybook
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },

  // TypeScript project configuration
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
  },
]);
