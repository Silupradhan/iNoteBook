const express = require("express")
const router = express.Router();
const User = require("../models/User")


//creating a user using : POST ""
router.post("/", (req , res)=>{
    console.log(req.body);  //  to use request body we can use app.use(express.json()) in index.js
     const user = User(req.body);
     user.save();
    res.send(req.body);
   
  });
module.exports  = router