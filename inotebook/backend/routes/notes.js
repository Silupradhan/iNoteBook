const express = require("express")
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")
const Note = require("../models/Note")
const { body, validationResult } = require('express-validator');



//ROUTE 1 : Gets all notes using : GET "/api/notes/fetchallnote" :  
router.get("/fetchallnote",fetchUser,async(req , res)=>{
    try {
      const notes = await Note.find({user : req.user.id})
       res.json(notes)
    } catch (error) {
      console.error(error.message)
    res.status(500).send("Some error occured")
    }
  });



  //ROUTE 2 : Add a new notes using : POST "/api/notes/addnote" :  
router.post("/addnote",fetchUser,[
  body('title', "Enter a valid title").isLength({ min: 3 }),
  body('description', "description must be 6 charecter").isLength({ min: 6 })
],async(req , res)=>{
  const {title,description, tag} = req.body
  //if there are error returns bad request and the error
  try {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() })
  }

  const note = new Note({
    title,description, tag,user : req.user.id
  })
  const saveNotes = await note.save()
  res.json(saveNotes)
} catch (error) {
  console.error(error.message)
  res.status(500).send("Some error occured")
}
});
module.exports  = router