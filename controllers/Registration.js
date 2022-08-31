'use strict';  

const logger = require('../utils/logger');

const Registration = {

    index(req, res) {

        logger.info('Registration page requested');

        const viewData = {
            title: 'Auto Journal - Registration',
        };

        res.render('registration', viewData);
    },
};

module.exports = Registration;