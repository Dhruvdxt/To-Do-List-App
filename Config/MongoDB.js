const mongoose = require("mongoose");
const localhostServer = "mongodb://127.0.0.1:27017/To-Do_App";

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
