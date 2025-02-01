export default {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "\\.ts$": ["babel-jest", { configFile: "./babel-jest.config.ts" }],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "jest-transform-stub",
  },
  globals: {
    "ts-jest": {
      useBabelrc: true,
    },
  },
};
