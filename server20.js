<<<<<<< HEAD
const express=require("express");
const app = express();
app.get("/sign",(req,res)=>{
    res.sendFile(__dirname+"/form20.html")
});

application.post("/signup",(req,res)=>{
    let{username,useremail,userpassword} =req.body;
    console.log(username,useremail,userpassword);
}

app.listen(3535,()=>{
    console.log("Srever is running on port 3535")
});
=======
const express=require("express");
const app = express();
app.get("/sign",(req,res)=>{
    res.sendFile(__dirname+"/form20.html")
});

application.post("/signup",(req,res)=>{
    let{username,useremail,userpassword} =req.body;
    console.log(username,useremail,userpassword);
}

app.listen(3535,()=>{
    console.log("Srever is running on port 3535")
});
>>>>>>> 56f36a7a3e700c674daa1bbf3b0ff43b4632f58f
