'use strict'

const _ = require('lodash');
const logger = require('../utils/logger');
const JsonStore = require('./json-store');

const dataStore = {

    Data: new JsonStore('./models/data-store.json', { Data: [] }),
    collection: 'Data',
    

    getData(){
        return this.Data.findAll(this.collection);
    },
    
    getCar(id) {
        return this.Data.findOneBy(this.collection, { id: id });
    },

    removeCar(id, carID) {
        const Manu = this.getCar(id);
        const Cars = Manu.Cars;
        _.remove(Cars, { id: carID})
    },

    removeManu(id) {
        const Manu = this.getCar(id);
        this.Data.remove(this.collection, Manu);
    },

    addCar(id, car) {
        const Car = this.getCar(id);
        Car.Cars.push(car);
    },

    addManu(manu) {
        this.Data.add(this.collection, manu);
    },

    removeAllManu() {
        this.Data.removeAll(this.collection);
    },

    getUserData(userID) {
        return this.Data.findBy(this.collection, { userid: userID });
    },
};

module.exports = dataStore;