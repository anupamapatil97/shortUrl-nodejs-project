const express=require('express');
const {PORT,MONGODB_URL,BASE_URL}=require("./config");
const {connect}=require("mongoose");

const app=express();

connect(MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err)throw err;
    console.log("Database connected successfully");
});

app.use(express.json({extended:false}))

app.use("/",require("./Routes/index"));
app.use("api/url", require("./Routes/url"));




app.listen(PORT,(err)=>{
    if(err)throw err;
    console.log("server running on port number:"+PORT);
});