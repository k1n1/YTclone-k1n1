const mongoose = require("mongoose")
const authTable = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type :String,
        required : true,
    },
    date : {
        type: Date,
        default : Date.now
    },
    fullname : {
        type : String,
        require : false,
    },
    username : {
        type: String,
        unique : true,
    },
    profilephoto : {
        type : String,
        require : false
    },
    facebook : {
        type : String,
        require : false
    },
    twitter : {
        type : String,
        require : false
    },
    instagram :{
        type : String,
        require : false
    },
    follows : {
        type:Array,
    }
})






module.exports = mongoose.model('Users', authTable)
