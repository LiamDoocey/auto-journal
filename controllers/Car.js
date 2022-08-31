'use strict'

const logger = require('../utils/logger')
const dataStore = require('../models/data-store');
const uuid = require('uuid');

const Car = {
    index(req,res) {

        const ManuID = req.params.id;
        const carID = req.params.carID

        console.log('Manufacturer id = ', + ManuID)
        console.log('Car ID = ' + carID)

        const viewData = {
            title: 'Car',
            Car: dataStore.getCar(ManuID)
        };
        res.render('Car', viewData)
    },

    delCar(req,res) {
        const id = req.params.id;
        const carID = req.params.carID

        logger.debug('Removing car ' + carID + ' from manufactuer ' + id)

        dataStore.removeCar(id, carID);
        res.redirect('/Car/' + id)
    },

    addCar(req,res) {
        const id = req.params.id;
        const car = {

            id: uuid.v4(),	
            Model: req.body.Model,
            picture: req.body.picture,
            Year: req.body.Year,
            Price: req.body.Price,
            Engine: req.body.Engine,
            Horsepower: req.body.Horsepower,
            Topspeed: req.body.Topspeed,
            zerotosixty: req.body.zerotosixty,
        }
        logger.debug(car)
        logger.debug('Adding car ' + car.id + ' to manufactuer ' + id)

        dataStore.addCar(id, car);
        res.redirect('/Car/' + id)
    },

};

module.exports = Car;