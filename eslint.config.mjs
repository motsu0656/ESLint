import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // JavaScriptファイルに対しての設定
  {
    files: ["**/*.js"],

    // 環境や言語オプションの設定
    languageOptions: {
      ecmaVersion: 2021, // ES2021を指定
      sourceType: "module", // モジュールを使う場合の設定
      globals: {
        ...globals.browser, // ブラウザ環境を定義
      },
    },

    // プラグインの推奨設定を使用
    ...pluginJs.configs.recommended,

    // カスタムルールの設定
    rules: {
      "no-console": "off", // console使用許可
    },
  },
];
