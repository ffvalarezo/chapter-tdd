import type { Config } from 'jest';
const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts','html','js','json'],
  transform: { '^.+\\.(ts|mjs|js)$': 'ts-jest' }
};
export default config;
