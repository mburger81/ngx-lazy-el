module.exports = {
  name: 'demoapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demoapp/',
  setupFilesAfterEnv: ['<rootDir>src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
