const router = require("express").Router()
const tokenvetifying = require("../token")
const User = require("../database/auth")
const multer = require('multer');
const Videos = require("../database/videos")
const { v4: uuidv4 } = require('uuid');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './videos/');
    },
    filename: function (req, file, cb) {
        var videotext = file.mimetype
        videotext = videotext.split('/')
        video_id = uuidv4() + req.user.id
        cb(null, video_id + '.' + videotext[1]);
    }
})
const uploadprofilefolder = multer({ storage: storage })

router.post("/upload", tokenvetifying, uploadprofilefolder.array("file", 2), (req, res) => {
    User.findOne({ email: req.user.email })
        .then((resp) => {
            let username = req.user.username
            let imgpath = null
            let videopath = null
            if (((req.files[0].mimetype).split("/"))[0] == "video") {
                videopath = req.files[0].filename
                imgpath = req.files[1].filename
            }
            else {
                imgpath = req.files[0].filename
                videopath = req.files[1].filename
            }
            var dateObj = new Date();
            var month = dateObj.getMonth() + 1;
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            newdate = day + "-" + month + "-" + year;
            let vid = String(uuidv4())
            const video = new Videos({
                vid: vid,
                vtitle: req.body.title,
                vdesctiptions: req.body.diescrptions,
                vurl: videopath,
                vthumbnailurl: imgpath,
                date: newdate,
                auther: username,
                profile: resp.profilephoto,
            })
            video.save()
            res.json({
                "message": "Done"
            })
        })
        .catch((err) => {
            console.log(err);
            res.json(err)
        })

})


router.get("/:id", tokenvetifying, (req, res)=>{
    Videos.findOne({vid:req.params.id})
    .then((resp)=>{
        User.findOne({username:req.user.username})
        .then((respo)=>{
            if((respo.follows).includes(resp.auther)){
                res.json({data : {
                    "resp" : resp,
                    "follow" : true
                }})
            }
            if(respo.username == resp.auther){
                res.json({data : {
                    "resp" : resp,
                    "follow" : null
                }})
            }
            else{
                res.json({data : {
                    "resp" : resp,
                    "follow" : false
                }})
            }
        })
        .catch((err)=>{
            res.json({data : {
                "resp" : resp,
                "follow" : false
            }})
        })
        
    })
    .catch((err)=>{
        // res.json(err)
        console.log("Error");
    }) 
})






module.exports = router