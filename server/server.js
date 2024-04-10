// const express= require('express');
import express, { urlencoded } from "express";
import  mongoose from "mongoose";

const app= express();

app.use(urlencoded({extended:true}));


mongoose.connect("mongodb://localhost:27017/",{
    dbName:"LoginUserData"
}).then(()=>{console.log("database connect successfully")})
.catch((e)=>{console.log(e)});


const userSchema= new mongoose.Schema({
    username:String,
    password:String,
    email:String
});

const user= mongoose.model("user", userSchema);


app.listen(5000,()=>{
    console.log("server 5000 is working");
});

app.get("/api",(req,res)=>{
    res.json({"users":["ashish","classmate", "realme"]});
})