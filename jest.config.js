const config = {
  preset: '@vue/cli-plugin-unit-jest',
};

if (process.env.CI) {
  Object.assign(config, {
    testResultsProcessor: './test-results-processor.js',
    reporters: [],
  });
}

module.exports = config;
