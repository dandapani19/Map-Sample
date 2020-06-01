const mongoose = require('mongoose');
const Schema   = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String
    },
    lan:{
        type: Number
    },
    lon:{
        type:Number
    },
    in_raid:{
        type:Boolean,
        default: false,
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)