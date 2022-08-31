'use strict';

const logger = require('../utils/logger');

const start = {

    index(req, res) {

        logger.info('Start page requested');

        const viewData = {
            title: 'Auto Journal - Login',
        };

        res.render('start', viewData);
    },
};

module.exports = start;
