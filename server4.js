const express=require("express");
const app=express();


//  app.get("/profile",(req,res)=>{
//     const {username}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username);
//  });

// app.get("/profile",(req,res)=>{
//     const {username,clas,group}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username+clas+group);
//  });
// app.get("/profile/:id",(req,res)=>{
//     const {id}=req.params;
//     console.log(id);
//     res.send("profile page of user"+ id);
// });
app.get("/profile/:id/:username",(req,res)=>{
    const {id,username}=req.params;
    console.log(id);
    res.send("profile page of user "+ id +" "+ username);
})

app.listen(3333,()=>{
   
    console.log("Server is running on port 3333");
})