export default {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^leaflet/dist/leaflet\\.css$': 'jest-transform-stub'
  },
  testRegex: '(/__tests__/.*\\.((test|spec)\\.tsx?))$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/pages/**/*.{ts,tsx}',
    'src/common/handlers/*.ts',
    '!src/pages/**/styles.ts',
    '!src/pages/**/validation.ts',
    '!src/pages/**/constants.ts',
    '!src/pages/**/enums.ts'
  ],
  coverageReporters: ['text', 'html']
};
