const router = require("express").Router()
const User = require("../database/auth")
const bycrypt = require("bcrypt")
// const { json } = require("express")
const jwt = require("jsonwebtoken")

const tokenvetifying = require("../token")
// Password Hash


router.get("/", tokenvetifying, async (req, res) => {
    res.json({
        user: req.user,
        post: 5,
        posttitle: "who is Parth Parsaniya"
    })
})

router.post("/", tokenvetifying, async(req, res)=>{
    const user = req.user
    const gender = req.body.gender
    res.json({
        user : user,
        gender : gender
    })

})


router.post("/signup", async (req, res) => {
    email = req.body.email
    password = req.body.password
    if (password.length > 8) {
        const salt = await bycrypt.genSalt(10)
        const passwordHashed = await bycrypt.hash(password, salt)
        const user = new User({
            email: email,
            password: passwordHashed
        })
        user.save().then((data) => {
            res.status(201).json({
                message: "Account hase been Created"
            })
        }).catch((err) => {
            console.log(err)
            res.status(208).json({
                message:"Email is Already Used" ,
                // meg : err.message
            })

        })
    } else {
        res.status(203).json({
            message: "Password must be 8 characters long"
        })
    }

})

router.post("/login", async (req, res) => {
    email = req.body.email
    password = req.body.password
    User.findOne({ email: email }, { __v: 0 }).then((resp) => {
        if (resp != null) {
            bycrypt.compare(req.body.password, resp.password)
                .then((checkPassword) => {
                    if (checkPassword) {
                        const token = jwt.sign({ id: resp.id, email: email }, "parthparsaniyatoken")
                        // res.setHeader("authtoken", token)
                        res.status(202).json({
                            "token": token,
                            "msg": "Login"
                        })
                    } else {
                        res.status(203).json({
                            "msg": "Password Wrong"
                        })
                    }

                }).catch((err) => {
                    res.send(err)
                })
        } else {
            res.status(203).json({
                "msg": "User Not Found"
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})


router.get("/profile", tokenvetifying, async (req, res) => {
    console.log(req)
    const profile = await User.findOne({id : req.user.id},{password : 0, __v : 0})
    res.json({
        "profile" : profile
    })
})

router.post("/profile", tokenvetifying, async (req, res)=>{
    var fullname = req.body.fullname
    var facebook = req.body.facebook
    var twitter = req.body.twitter
    var instagram = req.body.instagram
    User.update(
        {id:req.user.id},
        {fullname : fullname, facebook : facebook, twitter : twitter, instagram : instagram}
    ).then((data)=>{
        res.status(204).json({
            "messagge" : "Your Profile Is Updated"
        })
        })
        .catch((err)=>{
            res.status(203).json({
                "messagge": "Please Try Again"
            })
        })
})



router.post("/profile/updateusername", tokenvetifying, (req, res) => {
    User.findOne({username:req.body.username}).then((data)=>{
        if (data === null){
            User.update(
                {  id : req.user.id},
                {username : req.body.username}
            ).then((data)=>{
                res.status(204).json({
                    "message" : "Username Is Updated"
                })
            })
                .catch((err)=>{
                    res.json({
                        "message" : "somthing Wrong"
                    })
                })
        }
        else{
            res.status(208).json({
                "message" : "Username Is Taken"
            })
        }

    })
        .catch((err)=>{
            res.json({
                "message" : "somthing got wrong"
            })
        })

})

module.exports = router