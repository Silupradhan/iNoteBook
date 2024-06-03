const express = require("express")
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');


//creating a user using : POST ""
router.post("/",[
  body('name',"Enter a valid Name").isLength({min : 3}),
  body('email', "Enter a valid Email").isEmail(),
  body('password', "Password must be 6 digit").isLength({min : 6})
], (req , res)=>{
    // console.log(req.body);  //  to use request body we can use app.use(express.json()) in index.js
   //   const user = User(req.body);
    //  user.save();
  
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({error : error.array() })
    }

    User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
    }).then(user => res.json(user))
    .catch(err =>{console.log(err) 
      res.json({error : "please enter a unique email address", message : err.message})
    })
    
   
   
  });
  
  //ANOTHER METHOD TO VALIDATE DATA

  // router.post(
  //   '/',
  //   // username must be an email
  //   body('name').isLength({min : 4}),
  //   body("email").isEmail(),
  //   // password must be at least 5 chars long
  //   body('password').isLength({ min: 5 }),

  //   (req, res) => {
  //     // Finds the validation errors in this request and wraps them in an object with handy functions
  //     const errors = validationResult(req);
  //     if (!errors.isEmpty()) {
  //       return res.status(400).json({ errors: errors.array() });
  //     }
  
  //     User.create({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //     }).then(user => res.json(user));
  //   },
  // );
module.exports  = router