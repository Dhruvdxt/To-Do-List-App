const mongoose = require("mongoose");

const new_connection = mongoose
    .connect(process.env.MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        tlsInsecure: true 
    })
    .then(() => console.log("New connections 'TO-DO_app' DB is Connected."))
    .catch((err) => console.log('Connection error! => ', err));

module.exports = new_connection;
