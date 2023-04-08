module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  env: {
    jest: true,
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
};