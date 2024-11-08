module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
      "**/*.{ts,tsx,js,jsx}",
      "!index.js",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!.eslintrc.js",
      "!.prettierrc.js",
      "!**/*.config.js"
    ],
    coverageReporters: [ "json-summary", "text", "cobertura" ]
};
