const mongoose = require("mongoose")

const videotable = new mongoose.Schema({
    vid : {
        type : String,
        unique : true
    },
    vtitle :{
        type: String,
        required : true
    },
    vdesctiptions :{
        type: String,
        required : true
    },
    vurl :{
        type: String,
        required : true
    },
    vthumbnailurl :{
        type: String,
        required : true
    },
    date : {
        type: String,
    },
    auther :{
        type:String
    },
    profile :{
        type:String
    }
})

module.exports = mongoose.model('Videos', videotable)
