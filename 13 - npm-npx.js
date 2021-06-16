// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// A package should be installed globally when it provides an executable command that you run from the shell (CLI), and it’s reused across projects.

// npx - Node Package Executer - a package runner
// npx <packageName> <command>
// You can also install executable commands locally and run them using npx, but some packages are just better installed globally.

// package.json - manifest file (stores important info about project/package)
// manual approach (creates package.json in the root, create properties etc.)
// npm init (step-by-step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash'); //dependency lodash

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);

// npm i <packageName> -D  - to install a development dependency
// npm i <packageName> --save-dev - alternative command

console.log('hello world');

// to uninstall a package
// npm uninstall <packageName> - to uninstall a local package
// npm uninstall -g <packageName> - to uninstall a global package

// to see a list of globally installed packages
// npm list -g --depth 0

// package-lock.json
// information about the dependencies of the packages (including their versions)

// version numbers
// Given a version number MAJOR.MINOR.PATCH, increment the:
// MAJOR version when you make incompatible API changes,
// MINOR version when you add functionality in a backwards-compatible manner, and
// PATCH version when you make backwards-compatible bug fixes.
