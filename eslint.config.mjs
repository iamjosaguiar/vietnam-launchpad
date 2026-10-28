import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Pre-existing issues in pages outside the current redesign scope are reported as warnings.
    rules: {
      'react/no-unescaped-entities': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/immutability': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
    },
  },
  {
    files: ['*.config.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'next-env.d.ts', 'src/components.bak/**', 'src/i18n.bak/**'],
  },
];

export default eslintConfig;
