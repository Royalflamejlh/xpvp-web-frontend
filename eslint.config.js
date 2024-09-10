import { fileURLToPath } from 'url'
import path from 'path'
import typescriptEslintParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import next from '@next/eslint-plugin-next'
import prettier from 'eslint-plugin-prettier'

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '.contentlayer/**',
      'out/**',
      'public/**',
      '.git/**',
      '.github/**',
      '.husky/**',
      '.vscode/**',
      '.DS_Store',
      'LICENSE',
      'README.md',
      'package-lock.json',
      'package.json',
      'tsconfig.json',
      'jsconfig.json',
      'next-env.d.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs}'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier,
      next,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]
