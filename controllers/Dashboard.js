'use strict'

const logger = require('../utils/logger.js');
const dataStore = require('../models/data-store.js');
const uuid = require('uuid');
const accounts = require('./accounts.js');

const Dashboard = {
    
    index(req, res) {

        logger.info('Dashboard page requested');    

        const viewData = {
            title: 'Auto Journal - Dashboard',
            Manufacturers : dataStore.getData(),
        };

        logger.info('About to render', viewData.Manufacturers);
        res.render('Dashboard', viewData);
    },

    delManu(req,res) {
        const id = req.params.id;

        console.log(id)

        logger.debug('Removing Manufacturer ' + id)

        dataStore.removeManu(id);
        res.redirect('/dashboard')
    },

    addManu(req,res) {
        const manu = {
            id: uuid.v4(),
            Manufacturer: req.body.Manufacturer,
            est: req.body.est,
            logo: req.body.logo,
            Cars: [],
        };
        logger.debug(manu)
        dataStore.addManu(manu);
        res.redirect('/dashboard')
    }
};

module.exports = Dashboard;