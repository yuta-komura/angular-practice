module.exports = [
  {
    // 無視するファイル・ディレクトリ
    ignores: ['node_modules/**'],
  },
  {
    // 適用対象のファイル（TypeScript、JavaScriptを含む）
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021, // 最新のECMAScript仕様に対応
      sourceType: 'module', // ES Modulesを使用
      parser: require('@typescript-eslint/parser'), // TypeScript用パーサーを指定
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX構文をサポート
        },
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Prettierとの連携
      'prettier/prettier': 'error', // Prettierのルール違反をエラーとして表示

      // コーディングスタイル
      quotes: ['error', 'single', { avoidEscape: true }], // 必要な場合にのみダブルクォーテーションを許可
      semi: ['error', 'always'], // セミコロンを強制

      // 未使用変数の検出
      'no-unused-vars': 'off', // デフォルトルールを無効化
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all', // すべての変数をチェック
          args: 'after-used', // 使用された引数以降をチェック
          ignoreRestSiblings: true, // レスト構文を無視
        },
      ],

      // その他の一般的なルール
      'no-console': 'warn', // console.log の使用を警告
      'no-debugger': 'error', // debugger の使用を禁止
      '@typescript-eslint/no-explicit-any': 'warn', // TypeScriptでany型の使用を警告
      '@typescript-eslint/explicit-function-return-type': 'off', // 関数の戻り値を明示的にするルールを無効化
    },
  },
  {
    // JavaScript専用の設定
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off', // requireを許可
    },
  },
];
