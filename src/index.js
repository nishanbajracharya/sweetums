const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const constants = require('./constants');

dotenv.config();

const port = process.env.PORT || constants.PORT;

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/slack', routes);

app.get('/', function(req, res) {
  return res.json({
    name: 'Sweetums',
    version: '1.0.0'
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
