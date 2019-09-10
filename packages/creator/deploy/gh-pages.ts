import * as shell from 'shelljs'
import * as path from 'path'

shell.mkdir('temp')
shell.cd('temp')
shell.exec(`
  git clone git@github.com:mobov/guitor.git
`)

