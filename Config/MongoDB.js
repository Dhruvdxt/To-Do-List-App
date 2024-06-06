const mongoose = require("mongoose");

const new_connection = mongoose
    .createConnection("mongodb://127.0.0.1:27017/TO-DO_app")
    .on('open', () => console.log("New connections 'TO-DO_app' DB is Connected."))
    .on('error', (err) => console.log('Connection error! => ', err));

module.exports = new_connection;
