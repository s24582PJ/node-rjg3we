const assert = require('assert');
const packageJson = require('./package.json');

describe('package.json', () => {
  it('should have correct dependencies', () => {
    assert.deepStrictEqual(packageJson.dependencies, {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      lodash: '^4.17.21',
      'promise-all': '^1.0.0',
    });
  });
});
