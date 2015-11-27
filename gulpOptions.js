'use strict';

var options = {
  'appName': 'realtime',
  'appServer': './src/server/index.js',
  'artifactsFolder': 'artifacts',
  'buildFolder': './src/client/_realtime',
  'clientFolder': './src/client',
  'specs': {
    'server': {
      'sources': [
        './src/server/**/*.js',
        '!./src/server/config/**'
      ],
      'tests': [ './test/unit/server/**/*.js' ]
    }
  }
};

module.exports = options;
