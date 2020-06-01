const mongoose = require('mongoose');
const Schema   = mongoose.Schema

const raidSchema = new Schema({
    username:{
        type: String
    },
    user_id:{
        type: String
    },
    cabname:{
        type:String
    },
    cab_id:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model('Raid',raidSchema)