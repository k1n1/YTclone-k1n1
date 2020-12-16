const jwt = require("jsonwebtoken")
const User = require("./database/auth")

module.exports = function(req, res,next){
    const token = req.header("token")
    if (!token && token === null && token === undefined){
        // res.json({
        //     "errormessage" : "User Not Found"
        // })
        next()
    }
    try{
        const varify = jwt.verify(token, "parthparsaniyatoken")
        req.user = varify
        next()
    }catch(err){
        // res.json({
        //     "errormessage" : "User Not Found"
        // })
        next()
    }

}