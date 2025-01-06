module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  };
  