const express=require('express');
const Url=require("../Model/Url")
const router=express.Router();


router.get('/:code',async(req,res)=>{
    // res.json("index");
    try {
        const myurl=await Url.findOne({shortUrlCode:req.params.code});
        if(myurl){
            return res.redirect(myurl.originalUrl);
        }else{
            return res.status(404).json("invalid");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("server error")
        }
});

module.exports=router;