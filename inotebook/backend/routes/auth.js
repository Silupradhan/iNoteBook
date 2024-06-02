const express = require("express")
const router = express.Router();


// app.get("/", (req , res)=>{
  
// })
router.get("/", (req , res)=>{
    // your route logic here
    obj = {
        name : "ashu",
        number: 67
       }
       res.json(obj)
  });
module.exports  = router