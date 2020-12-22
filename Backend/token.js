const jwt = require("jsonwebtoken")
const User = require("./database/auth")
require('dotenv').config()
module.exports = function(req, res,next){
    const token = req.header("token")
    if (!token && token === null && token === undefined){
        // res.json({
        //     "errormessage" : "User Not Found"
        // })
        next()
    }
    try{
      // please use complex string for the token
        const varify = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = varify
        next()
    }catch(err){
        // res.json({
        //     "errormessage" : "User Not Found"
        // })
        next()
    }

}
