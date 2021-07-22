module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["json", "text", "lcov", "text-summary", "clover"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/tests/**/*.test.[jt]s?(x)"],
};
