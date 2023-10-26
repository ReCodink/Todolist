module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "script"
        },
        ignores: [
            "node_modules/",
            "node_modules/*"
        ],
        rules: {
            "semi": "error",
            "prefer-const": "error"
        }
    }
];