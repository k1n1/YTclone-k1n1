const router = require("express").Router()
const tokenvetifying = require("../token")
const User = require("../database/auth")

router.post("/", tokenvetifying, (req, res)=>{
    const username = String(req.body.username)
    const user = String(req.user.username)
    User.update({username:user},{$push : {follows:username}})
    .then((resp)=>{
        console.log(resp);
    })
    .catch((err)=>{
        console.log(err);
    })
    res.json({
        "message" : user
    })
})


module.exports = router