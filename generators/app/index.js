'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to ${chalk.red('CodeMash 2020')}! Or at least using a generator made for it!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'authorName',
        message: 'What is your name?',
        default: ``
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    const packageDependencies = {
      "prop-types": "^15.7.2"
    }
    
    const packageDevDependencies = {
      "@babel/core": "^7.7.7",
      "@babel/preset-env": "^7.7.7",
      "@babel/preset-react": "^7.7.4",
      "@storybook/addon-a11y": "^5.2.8",
      "@storybook/addon-docs": "^5.2.8",
      "@storybook/addon-knobs": "^5.2.8",
      "@storybook/react": "^5.2.8",
      "babel-loader": "^8.0.6",
      "react": "^16.12.0",
      "react-dom": "^16.12.0",
      "rollup": "^1.27.14",
      "rollup-plugin-babel": "^4.3.3",
      "rollup-plugin-commonjs": "^10.1.0",
      "rollup-plugin-node-resolve": "^5.2.0",
      "styled-components": "^4.4.1"
    }
    
    const packagePeerDependencies = {
      "react": "^16.12.0",
      "styled-components": "^4.4.1"
    }
    
    const packageFile = {
        "name": "codemash-2020-component-library",
        "version": "0.0.1",
        "description": "A Component Library built in a Workshop at CodeMash.",
        "main": "dist/bundle.js",
        "scripts": {
          "start": "start-storybook -p 9001",
          "bundle": "rollup --config",
          "prepublishOnly": "rollup --config"  
        },
        "author": `${this.props.authorName}`,
        "license": "ISC",
        "dependencies": packageDependencies,
        "devDependencies": packageDevDependencies,
        "peerDependencies": packagePeerDependencies
    };

    this.fs.extendJSON(this.destinationPath('package.json'), packageFile);

    this.fs.copy(
      this.templatePath('./src'),
      this.destinationPath('./src')
    );

    this.fs.copy(
      this.templatePath('./storybook'),
      this.destinationPath('./.storybook')
    );

    this.fs.copy(
      this.templatePath('babelrc.config'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('gitignore.config'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('rollup.config.js'),
      this.destinationPath('rollup.config.js')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );

  }

  install() {
    this.installDependencies({bower: false});
  }
};
