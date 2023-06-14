const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorlogger');

const cors = require("cors")
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/', router);
app.use(errorLogger);



app.listen(1050);
console.log("Server listening in port 1050");


module.exports = app;