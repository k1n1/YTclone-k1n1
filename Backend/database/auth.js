const mongoose = require("mongoose")
const authTable = new mongoose.Schema({
    id : {
        type : String,
        default : Date.now()
    },
    email : {
        type : String,
        required : true,
        maxlength : 100,
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
        require : false,
        unique : true,
        default : Date.now()
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
    }
})

module.exports = mongoose.model('Users', authTable)