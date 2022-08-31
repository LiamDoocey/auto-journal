'use strict';

const express = require('express');
const logger = require('./utils/logger');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false, }));

app.use(cookieParser());

app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
}));
app.set('view engine', '.hbs');

const routes = require('./routes');
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function() {
    logger.info('Your app is listening on port ' + listener.address().port);
});