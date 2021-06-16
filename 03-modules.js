// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')

// when a require is invoked it executes the code in the module
require('./07-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data)