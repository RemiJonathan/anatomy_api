const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Require route files
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let helloWorldRouter = require('./routes/hello-world');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello-world', helloWorldRouter);


module.exports = app;
