module.exports = [
  {
    ignores: ['node_modules/**'], // 無視するファイル・ディレクトリ
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'], // 適用対象のファイル
    languageOptions: {
      ecmaVersion: 2021, // 最新のECMAScriptに対応
      sourceType: 'module', // ES Modulesを使用
      parser: require('@typescript-eslint/parser'), // TypeScriptパーサーを指定
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSXをサポート
        },
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error', // Prettierのルール違反をエラーとして表示
      quotes: ['error', 'single', { avoidEscape: true }], // 必要な場合にのみダブルクォーテーションを許可
      semi: ['error', 'always'], // セミコロンを強制
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ], // 未使用変数の検出設定を詳細化
      'no-console': 'warn', // console.log の使用を警告
      'no-debugger': 'error', // debugger の使用を禁止
      '@typescript-eslint/no-explicit-any': 'warn', // TypeScriptでany型の使用を警告
      '@typescript-eslint/explicit-function-return-type': 'off', // 関数の戻り値を明示的にするルールを無効化
    },
  },
  {
    files: ['*.js'], // JavaScriptファイル専用の設定
    rules: {
      '@typescript-eslint/no-var-requires': 'off', // requireを許可
    },
  },
];
