const mongoose = require('mongoose');
const Schema   = mongoose.Schema

const cabSchema = new Schema({
    name:{
        type: String
    },
    lan:{
        type: Number
    },
    lon:{
        type:Number
    },
    avaliable:{
        type:Boolean,
        default: true,
    }
},{timestamps:true})

module.exports = mongoose.model('Cab',cabSchema)