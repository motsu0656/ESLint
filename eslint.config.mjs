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
        ...globals.browser, // ブラウザ環境のグローバル変数
        ...globals.es2020,  // ES2020のグローバル変数
        ...globals.jquery,  // jQueryのグローバル変数
      },
    },

    // プラグインの設定をオブジェクト形式で定義
    plugins: {
      js: pluginJs,
    },

    // カスタムルールの設定
    rules: {
      "no-console": "off", // console使用許可
      "semi": ["error", "always"], // セミコロン強制
      "quotes": ["error", "single"], // シングルクォート強制
      "no-var": "error", // var禁止
      "array-bracket-spacing": "error", // 配列のブラケット間にスペースを入れない
      "comma-dangle": "warn", // カンマの後にダングルを許可
      "comma-spacing": "warn", // カンマの後にスペースを入れる
      "comma-style": "warn", // カンマスタイルの警告
      "no-nested-ternary": "error", // 入れ子の三項演算子を禁止
      "spaced-comment": "warn", // コメントの前にスペースを入れる
      "prefer-const": "warn", // const を推奨
      "no-trailing-spaces": "warn", // 行末のスペースを禁止
      "no-lonely-if": "error", // 孤立したifを禁止
      "multiline-ternary": "warn", // 三項演算子の改行
    },
  }
];
