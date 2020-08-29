const {Schema,model,}=require("mongoose");
const UrlSchema=new Schema(
    {
        shortUrlCode:String,
        originalUrl:String,
        newUrl:String
    },{
        timestamps:true
    }
);
module.exports=model("Url",UrlSchema);