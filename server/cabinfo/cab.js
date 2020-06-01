const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Cabs = require('../models/cab');

router.get('/',(req, res) =>
Cabs.findAll()
.then(cabs =>{
    console.log(cabs);
    res.sendStatus(200);
})
.catch(err => console.log(err))
);
 
module.exports = router;