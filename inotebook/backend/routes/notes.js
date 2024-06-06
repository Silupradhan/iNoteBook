const express = require("express")
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")
const Note = require("../models/Note")
const { body, validationResult } = require('express-validator');



//ROUTE 1 : Gets all notes using : GET "/api/notes/fetchallnote" :  login requird

router.get("/fetchallnote", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id })
    res.json(notes)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Some error occured")
  }
});



//ROUTE 2 : Add a new notes using : POST "/api/notes/addnote" :  login requird

router.post("/addnote", fetchUser, [
  body('title', "Enter a valid title").isLength({ min: 3 }),
  body('description', "description must be 6 charecter").isLength({ min: 6 })
], async (req, res) => {
  const { title, description, tag } = req.body
  //if there are error returns bad request and the error
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }

    const note = new Note({
      title, description, tag, user: req.user.id
    })
    const saveNotes = await note.save()
    res.json(saveNotes)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Some error occured")
  }
});

//ROUTE 3 : update existing  notes using : PUT "/api/notes/updatenote" : login requird
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    //  create a newNote object
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    //find the note to be update and update it
    let note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("Not Found")
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json(note)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Some error occured")
  }
});

//ROUTE 4 : Delete existing  notes using : DELETE "/api/notes/deletenote" : login requird
router.delete("/deletenote/:id", fetchUser, async (req, res) => {

  try {
    //find the note to be Delete and Delete it
    let note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("Not Found")
    }

    //Allow deletion if user won this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndDelete(req.params.id)
    res.json({ "Sucess": "Note has been deleted", note: note })

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Some error occured")
  }
});


module.exports = router