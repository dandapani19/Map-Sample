const express    = require('express')
const app        = express()
const mongoose   = require('mongoose')
const morgan     = require('morgan')
const bodyparser = require('body-parser')

let http = require("http").Server(app);
let io = require("socket.io")(http);
let userlit = '';


const CabRoute = require('./routes/cab')

mongoose.connect('mongodb://localhost:27017/map-sampledb',{useNewUrlParser: true ,useUnifiedTopology :true})
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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

var cabsdata;
app.use('/cab',CabRoute)

app.use((req,res, next) =>{
    cabsdata = req.cabs;
    console.log('------------data cabs-------->',cabsdata)
    return cabsdata;
    next()
})

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

  io.on("connection", socket => {
    console.log("user connected");

    socket.on('join', function(data) {
        console.log(data);
    });

    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
    socket.emit('broadcast', cabsdata);
    socket.emit('newclientconnect',{ description: userlit}); 
    
  });

const port = process.env.PORT || 3000;
http.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
  });
