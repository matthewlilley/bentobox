module.exports = {
  printWidth: 120,
  overrides: [
    {
      files: "*.sol",
      options: {
        bracketSpacing: false,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        explicitTypes: "always",
      },
    },
    {
      files: "*.js",
      options: {
        semi: false,
        trailingComma: "es5",
      },
    },
  ],
}
