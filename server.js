const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const port = 3020;
const app = express();
app.use(express.static(__dirname));
app.get("", (req, res) => {
    // res.send("<h1> Server is created </h1>");
    res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(port, ()=>{
    console.log(`server is running on $ {port}`);
});