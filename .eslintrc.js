module.exports = {
  root: true,
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`],
  rules: {
    "no-empty": "error",
    "no-irregular-whitespace": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-alert": "warn",
    "import/first": "error",
    "import/no-duplicates": "error",
    semi: ["warn", "always", { omitLastInOneLineBlock: true }],
    "no-extra-semi": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    indent: ["warn", 2, {"SwitchCase": 1}],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-const-assign": "error",
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": [
      "warn",
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "template-curly-spacing": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "comma-spacing": ["error", { before: false, after: true }],
    "eol-last": ["error", "always"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "object-curly-spacing": ["error", "always"],
    "quote-props": [
      "error",
      "as-needed",
      { keywords: false, unnecessary: true, numbers: false },
    ],
    quotes: ["error", "single", { avoidEscape: true }],
    "space-in-parens": ["error", "never"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-curly-newline": [
      "error",
      {
        multiline: "consistent",
        singleline: "consistent",
      },
    ],
    "react/jsx-boolean-value": ["error", "never", { always: [] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/sort-prop-types": "warn",
    "react/jsx-space-before-closing": "warn",
    "react/jsx-key": "error",
    "react/jsx-sort-props": "warn",
    // 'react/prop-types': 'warn',
    "import/newline-after-import": "error",
    "react/self-closing-comp": "error",
  },
}
