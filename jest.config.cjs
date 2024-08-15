module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "!<rootDir>/src/**/*.stories.js",
    "src/**/*.{js,jsx}",
    "!<rootDir>/node_modules/",
    "!src/main.jsx"
  ],
  coveragePathIgnorePatterns: ['.*__snapshots__/.*'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
}