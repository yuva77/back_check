const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorLogger');

const cors = require("cors")
const app = express();

app.use(cors())
app.use(bodyParser.json());
const ip='10.7.120.195';
app.use('/', router);
app.use(errorLogger);

const port = 8080;

app.listen(port,ip,()=>{
    console.log(`Server running at http://${ip}:${port}/`);

});
console.log("Server listening in port 1050");


module.exports = app;
