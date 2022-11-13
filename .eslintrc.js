module.exports = {
    root: true,
    env: {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },


    parser: "@typescript-eslint/parser",
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
        lib: [],
        sourceType: "module",
        project: "tsconfig.json",
    },
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-undef": "error",
        // "no-console": "error",
    },
    ignorePatterns: ["/dist/","program/**/*.d.ts",],
    globals: {
        wx: true,
        App: true,
        Page: true,
        getCurrentPages: true,
        getApp: true,
        Component: true,
        requirePlugin: true,
        requireMiniProgram: true,
        Utils: true,
    },
};
