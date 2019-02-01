// Imports
const express = require('express');
const app = express();

// Variables
var port = process.env.API_PORT || 8080

// Routes
var math = require('./routes/math.js')

// Endpoints
app.use('/math', math);

app.get('/', (req, res) => {
    var msg = {
        name: "calculator-api",
        description: "Simple calculator that is used to demonstrate the concepts of Continuous Integration & Delivery",
        version: process.env.API_VERSION || "Version not set"
    };
    res.status(200).send(msg);
})

// Start Server
app.server = app.listen(port);
console.log(`listening on port ${port}`);

module.exports = app
