'use strict';

var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var GeneratorKicker = require('../../libs/generator-kicker');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the scrumtrulescent ' + chalk.red('generator-chain') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  },

  end: {
    kick: function () {
      var kicker = GeneratorKicker.create('gulp-webapp');
      return kicker.kick();
    },

    replace1: function () {
      console.log('replace1');
    },

    replace2: function () {
      console.log('replace2');
    },

    install: function () {
      this.installDependencies();
    }
  }
});
