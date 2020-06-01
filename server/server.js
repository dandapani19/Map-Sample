const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const CabRoute = require('./routes/cab')

mongoose.connect('mongodb://localhost:27017/mapdb',{useNewUrlParser: true ,useUnifiedTopology :true})
const db = mongoose.connection

db.on('error',(err)=>{
    Console.log(err)
})
db.once('open',() =>{
    console.log('Database Connection Established!!')
})

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json)

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
    })
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
app.use('/cab',CabRoute)