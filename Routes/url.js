const express=require('express');
const router=express.Router();
const validurl=require('valid-url');
const shortid=require("shortid");
const {BASE_URL}=require("../config");
const Url= require("../Model/Url");
const { json } = require('body-parser');
router.post('/shorter',async(req,res)=>{
    const {originalUrl}=req.body;
    if(!validurl.isUri(BASE_URL)){
        return res.status(401).json("invalid base url");
    }
    const shortUrlCode=shortid.generate();
    if(validurl.isUri(originalUrl)){
        try {
           let url= await Url.findOne({originalUrl});
           if(url){
               res.json(url)
           }else{
               const newUrl=BASE_URL+ "/"+ shortUrlCode;
               url=new Url({
                   originalUrl,newUrl,shortUrlCode
               });
             await  url.save();
               res.json(url);
           }

        } catch (err) {
            console.log(err);
            res.status(500).json("server error");
        }
    }else{
        res.status(401).json("invalid long url")
    }
});

module.exports=router;