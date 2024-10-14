const exp=require('express');
const userApi=exp.Router();
const users=require('../models/userModal');
const bcryptjs=require('bcrypt');
userApi.use(exp.json())



userApi.get('/getUsers', async(req, res)=>{
    let Users= await users.findOne({});
    res.send(Users);
});

userApi.post('/create-user', async(req,res)=>{
    let isExistedUser=await users.findOne({username:req.body.username});
    console.log(isExistedUser);
    if(isExistedUser===null){
        password=req.body.password;
        hashPassword=await bcryptjs.hash(password, 3);
        req.body.password=hashPassword;
        req.body.products=[];
        let userObj= new users(req.body);
        await userObj.save();
        res.send("user saved");
    }
    else{
        res.send('user already existed');
    }

    }
);



module.exports=userApi;