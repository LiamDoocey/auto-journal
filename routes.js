const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const Registration = require('./controllers/Registration.js');
const Dashboard = require('./controllers/Dashboard.js');
const Car = require('./controllers/Car.js')
const accounts = require('./controllers/accounts.js');

router.get('/start', start.index);
router.get('/Registration', Registration.index);
router.get('/Dashboard', Dashboard.index);
router.get('/Car/:id', Car.index);
router.get('/Car/:id/delCar/:carID', Car.delCar);
router.get('/dashboard/delManu/:id', Dashboard.delManu);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);

router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.post('/Car/:id/addCar', Car.addCar);
router.post('/dashboard/addManu', Dashboard.addManu);

module.exports = router;