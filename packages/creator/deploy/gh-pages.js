"use strict";
exports.__esModule = true;
var shell = require("shelljs");
shell.mkdir('temp');
shell.cd('temp');
shell.exec("\n  git clone git@github.com:mobov/guitor.git\n");
