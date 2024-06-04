const express = require("express")
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "ashutosh$boy"



//creating a user using : POST "/api/auth/createUser"
router.post("/createUser",[
  body('name',"Enter a valid Name").isLength({min : 3}),
  body('email', "Enter a valid Email").isEmail(),
  body('password', "Password must be 6 digit").isLength({min : 6})
], async(req , res)=>{
    // console.log(req.body);  //  to use request body we can use app.use(express.json()) in index.js
   //   const user = User(req.body);
    //  user.save();
  
    //if there are error returns bad request and the error
    try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({error : error.array() })
    }

    //check weather the user with this email exist already
    let user = await User.findOne({email : req.body.email})
    if(user){
      return res.status(400).json({error : "Sorry a user with this email is already exist" })
    }


    const salt = await bcrypt.genSalt(10);
   const securePass = await bcrypt.hash(req.body.password, salt)

    //Create a new user
   user=await User.create({
      name : req.body.name,
      email :req.body.email ,
      password : securePass,
    })

    const data = {
      user : {
        id : user.id
      }
    }

    const token = jwt.sign(data, JWT_SECRET)
    // console.log(token)  //return a token in the console

    // res.json(user)
    res.json({token})
    
    // .then(user => res.json(user))
    // .catch(err =>{console.log(err) 
    //   res.json({error : "please enter a unique email address", message : err.message})
    // })


    //catch errors
  } catch (error) {
      console.error(error.message)
      res.status(500).send("Some error occured")
  }
    
   
   
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

  // authenticate  a user using : POST "/api/auth/createUser"
  router.post("/login",[
    body('email', "Enter a valid Email").isEmail(),
    body('password', "password can not be blank").exists()
  ], async(req , res)=>{
     //if there are error returns bad request and the error
    
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({error : error.array() })
      }
    
      const {email,password} = req.body
      try{
   let user =await User.findOne({email})
   if(!user){
    return res.status(400).json({error : "Please try to login with correct credintial" })
   }

   const comparePassword =await bcrypt.compare(password, user.password)
   if(!comparePassword){
    return res.status(400).json({error : "Please try to login with correct credintial" })
   }
   const data = {
    user : {
      id : user.id
    }
  }

  const token = jwt.sign(data, JWT_SECRET)
  res.json({token})

      }
      catch(error){
        console.error(error.message)
      res.status(500).send("Some error occured")
      }

  })

module.exports  = router