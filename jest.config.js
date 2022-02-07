module.exports = {
  rootDir: "src",
  collectCoverage: true,
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["../jest.setup.ts"],
  testPathIgnorePatterns: ["../.next/", "../node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["../node_modules/"],
  moduleNameMapper: {
    "^.+\\.module\\.(css)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".interfaces.ts",
    ".styles.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
