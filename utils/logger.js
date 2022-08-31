const winston = require('winston');

const logger = winston.createLogger({
    transports: [new (winston.transports.Console)({JSON: false})],
});

logger.level = 'debug';

if (process.env.LEVEL) {
    logger.level = process.env.LEVEL;
}

module.exports = logger;