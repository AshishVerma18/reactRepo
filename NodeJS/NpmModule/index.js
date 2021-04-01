const chalk = require("chalk");
const validator = require("validator");
console.log(chalk.green.inverse("true"));
console.log(chalk.red.underline.inverse("false"));
const res = validator.isEmail("ashish@gmail.com2");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));