const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routers/auth")
var cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/youtube",{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
()=>console.log("DB Connectd")
)

app.use("/account", authRouter)
app.get('', (req, res)=>{
    res.send("<centre><h1>Mr.k1n1</h1></center>")
})

app.listen("3000", ()=>{
    console.log(`server run at port 3000`);
})