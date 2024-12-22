module.exports = {
  extends: ['stylelint-config-standard'], // 標準ルールセット
  plugins: ['stylelint-order'], // プロパティ順序を管理
  rules: {
    'order/properties-alphabetical-order': true, // プロパティをアルファベット順に
  },
};
