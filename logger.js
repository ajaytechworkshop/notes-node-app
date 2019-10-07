const chalk = require('chalk');

const info = function(message){
    console.log(chalk.green.bold.inverse(message));
}

const error = function(error){
    console.log(chalk.red.bold.inverse(error));
}

const print = (message) => {
    console.log(chalk.green(message));
} ;

module.exports.info = info;
module.exports.error = error;
module.exports.print = print;
