import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: './__tests__/coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/server.ts',
    '!src/app.ts',
    '!src/routes/**/*.ts',
  ],
  testMatch: ['**/__tests__/**/*.spec.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
