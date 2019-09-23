"use strict";
exports.__esModule = true;
var shell = require("shelljs");
var path = require("path");
// @ts-ignore
var packageJson = require("../package.json");
// console.log(packageJson.version)
shell.rm('-rf', 'temp');
shell.mkdir('temp');
shell.cd('temp');
shell.exec('git clone -b gh-pages https://github.com/mobov/guitor.git');
shell.echo('-n', 'git clone success ');
shell.cd('guitor');
shell.rm('-rf', 'css fonts img js');
shell.cp('-rf', path.resolve('../../dist/*'), './');
shell.exec('git add -A');
shell.exec("git commit -m \"[build] " + packageJson.version + "\"");
shell.exec('git push');
shell.echo('-n', 'git push success');
// shell.rm('-rf',path.resolve('../../temp'))
