const chalk = require('chalk');

const divider = chalk.gray('\n----------------------------------------');

const logger = {
  error: err => console.error(chalk.red(err)),

  appStarted: (ip, port) => console.log(`
    Server started ! ${chalk.green('✓')} \n
    ${chalk.bold('Access URLs:')}${divider}
    Localhost: ${chalk.magenta(`http://${ip}:${port}`)}${divider}
    ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `),
};

module.exports = logger;
