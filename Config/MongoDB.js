const mongoose = require("mongoose");
const MongoDBURI = "mongodb+srv://dhruvmes8555:Uw6SUWFzEEcOAe0e@cluster0.l2potue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/TO-DO_app"

const new_connection = mongoose
    .connect(process.env.MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true, // Ensure SSL is enabled
        tlsInsecure: true 
    })
    .then(() => console.log("New connections 'TO-DO_app' DB is Connected."))
    .catch((err) => console.log('Connection error! => ', err));

module.exports = new_connection;
