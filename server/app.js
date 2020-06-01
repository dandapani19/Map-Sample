const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Database
const db = require('./config/database');
// Test DB
db.authenticate()
.then(()=> console.log('Database connected....'))
.catch(err => console.log('Error:'+ err))

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Router which should handle router
// cabRoutes.cabRoutes(app);

app.use('/cab',require('./cabinfo/cab'));


app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Conten-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        req.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
        return res.status(200).json({});
    }
    next();
   });


   app.use((req, res, next) =>{
    const error = new Error('Not fount');
    error.status=404;
    next(error);
    });

    app.use((error, req, res, next) =>{
        res.status(error.status || 500 );
        res.json({
            error:{
                message: error.message
                
            }
        })
        });
    module.exports = app;

