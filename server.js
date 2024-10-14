const exp=require('express')
const app=exp();
const userApi=require('./backend/API/userApi')

const mongoose =require('mongoose')
require('dotenv').config()

mongoose.connect("mongodb+srv://cdb27:cdb27@atlascluster.e4ptmwb.mongodb.net/productInfo?retryWrites=true&w=majority");

const db=mongoose.connection;

db.on("open", ()=>console.log('DB connection success...'));
db.on('error', (err)=>console.log('error in db connection', err));

app.use("/users",userApi)

app.listen(5000, ()=>console.log('server is running on 5000...'))