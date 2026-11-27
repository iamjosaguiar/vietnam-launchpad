import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Lints the TypeScript and React code with the same scope as the former eslint-config-next
// setup (typescript-eslint, React hooks, and its accessibility rules). The .astro route
// files are thin wrappers that `astro check` (part of `npm run build`) type-checks.
export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**', '.astro/**', '.wrangler/**'],
  },
  ...tseslint.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'jsx-a11y': jsxA11y },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // The accessibility rules eslint-config-next enabled.
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      // Pre-existing issues in pages outside the current redesign scope are reported as warnings.
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/immutability': 'warn',
      // Unused values are reported as warnings, and a leading underscore marks one as intentional.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['*.config.js'],
    languageOptions: { globals: globals.node, sourceType: 'commonjs' },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  {
    files: ['scripts/**/*.mjs', '*.config.mjs'],
    languageOptions: { globals: globals.node },
  },
);
