const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routers/auth")
const video = require("./routers/video")
const Videos = require("./database/videos")
const stream = require("./routers/stream")
const follow = require("./routers/follow")
var cors = require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(express.static('./img'))
app.use(express.static("./videos"))
mongoose.connect("mongodb://localhost:27017/YTClone",{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
()=>console.log("DB Connectd")
)

app.use("/account", authRouter)
app.use("/video", video)
app.use("/stream", stream)
app.use("/follow", follow)
app.get('/', (req, res)=>{
    Videos.find({}, {__v :0})
    .then((resp)=>{
        res.json({
            "videos" :resp
        })
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.listen("3000", ()=>{
    console.log(process.env.JWT_TOKEN)
    console.log(`server run at port 3000`);
})
