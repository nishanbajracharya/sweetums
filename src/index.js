const dotenv = require('dotenv');
const express = require('express');

const routes = require('./routes');
const constants = require('./constants');

dotenv.config();

const port = process.env.PORT || constants.PORT;

const app = express();

app.use('/slack', routes);

app.listen(port, () => console.log(`Listening on port ${port}!`))
