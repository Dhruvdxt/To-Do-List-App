const express = require('express');
const bodyParser = require('body-parser')
const UserRouter = require('./Routes/User');
const ToDoRouter = require('./Routes/ToDo');
const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({extended: false }));
app.use(express.json());

// app.use('/', (req, res, next) => {
//     // res.json({msg: "Welcome"});
//     console.log("Welcome");
//     next();
// });

app.use('/User', UserRouter);
app.use('/ToDo', ToDoRouter);

module.exports = app;