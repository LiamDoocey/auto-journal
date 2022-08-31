'use strict';

const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(req, res) {
    const viewData = {
      title: 'Login or Signup',
    };
    res.render('index', viewData);
  },

  login(req, res) {
    const viewData = {
      title: 'Login to the Service',
    };
    res.render('login', viewData);
    
  },

  logout(req, res) {
    res.cookie('Manufacturer', '');
    res.redirect('/');
  },
 
  signup(req, res) {
    const viewData = {
      title: 'Login to the Service',
    };
    res.render('signup', viewData);
  },
 
  register(req, res) {
    const user = req.body;
    user.id = uuid.v4();
    userstore.addUser(user);
    logger.info('registering' + user.username);
    res.redirect('/dashboard');
  },

  authenticate(req, res) {
    const user = userstore.getUserByUser(req.body.username);

    if (user && user.password === req.body.password) {
      res.cookie('Manufactuer', user.username);
      logger.info('logging in ' + user.username);
      res.redirect('/dashboard');
    } 
    else 
    {
      res.redirect('/login');
    }
  },
  
  getCurrentUser (req) {
    const username = req.cookies.Manufacturer;
    return userstore.getUserByUser(username);
  }
}

module.exports = accounts;