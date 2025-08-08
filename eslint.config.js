// eslint.config.js
import js from "@eslint/js"; //bộ rule mặc định do ESLint cung cấp cho JavaScript
import globals from "globals"; //định nghĩa các biến global (VD: window, document, process…) để ESLint không báo lỗi “undefined variable”.
import react from "eslint-plugin-react"; //các rule đặc thù cho React.
import reactHooks from "eslint-plugin-react-hooks"; //đảm bảo bạn dùng React Hooks đúng quy tắc.
import jsxA11y from "eslint-plugin-jsx-a11y"; //rule về accessibility (VD: thẻ <img> phải có alt).
import prettier from "eslint-plugin-prettier"; //giữ style code đồng bộ.
import tseslint from "typescript-eslint";

export default [
  // Cấu hình mặc định cho JS
  js.configs.recommended,

  // Cấu hình mặc định cho TypeScript
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"], //Bỏ qua file cấu hình hoặc thư viện build.

    languageOptions: {
      ecmaVersion: "latest", //hỗ trợ cú pháp mới nhất của ECMAScript.
      sourceType: "module", //cho phép dùng import/export.
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // --- ESLint core rules ---
      "no-unused-vars": "warn", //// cảnh báo biến không dùng
      "no-console": ["warn", { allow: ["warn", "error"] }], // cho phép console.warn, console.error
      eqeqeq: ["error", "always"], // bắt buộc dùng === thay vì ==
      semi: ["error", "always"], // bắt buộc chấm phẩy cuối câu
      quotes: ["error", "double"], // dùng dấu nháy kép
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          trailingComma: "es5",
          endOfLine: "auto",
        },
      ],

      // --- React rules ---
      "react/jsx-uses-react": "off", // React 17+ không cần import React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Dùng TypeScript rồi thì bỏ
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // --- Accessibility rules ---
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },
];
