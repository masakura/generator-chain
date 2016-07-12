'use strict';

var spawn = require('child_process').spawn;

function GeneratorKicker() {
}

GeneratorKicker.prototype.kick = function () {
  var argv = Array.from(process.argv);

  argv.shift();
  var command = argv.shift();
  argv = argv.map(function (arg) {
    return arg === 'chain' ? 'gulp-webapp' : arg;
  });

  console.log(command);
  console.log(argv);
  var yo = spawn(command, argv, {
    env: process.env,
    stdio: 'inherit',
  });

  return new Promise(function (resolve, reject) {
    yo.on('close', function (code) {
      if (!code) {
        resolve();
      } else {
        reject(code);
      }
    })
  });
}

GeneratorKicker.create = function (name) {
  return new GeneratorKicker();
}

module.exports = GeneratorKicker;
