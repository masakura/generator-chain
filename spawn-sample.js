'use strict';

var spawn = require('child_process').spawn;

var yo = spawn('yo', ['gulp-webapp'], {
  env: process.env,
  stdio: 'inherit',
});
