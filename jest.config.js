/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'server-only': `<rootDir>/tests/__mocks__/empty.ts`,
  },
  globalSetup: '<rootDir>/tests/setup/index.ts',
}
