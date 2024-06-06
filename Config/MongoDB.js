const mongoose = require("mongoose");

const new_connection = mongoose
    .createConnection("mongodb+srv://dhruvmes8555:Uw6SUWFzEEcOAe0e@cluster0.l2potue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/TO-DO_app")
    .on('open', () => console.log("New connections 'TO-DO_app' DB is Connected."))
    .on('error', (err) => console.log('Connection error! => ', err));

module.exports = new_connection;
