import { useState } from "react";
import NoteContext from "./noteContext";
import AddNotes from "../../components/AddNotes";

const NoteState = (props) =>{
  const notesInitial = [
    {
      "_id": "666323b9080108c371e3ed61",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
    {
      "_id": "666323b9080108c371e3ed614",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
    {
      "_id": "666323b9080108c371e3ed615",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
    {
      "_id": "666323b9080108c371e3ed616",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
    {
      "_id": "666323b9080108c371e3ed617",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    }
  ]

  const [notes,setNotes] = useState(notesInitial)

  //Add note
const addNotes = (title,description,tag) =>{
  const note = {
    "_id": "666323b9080108c371e3ed617",
    "user": "6663207ea778230222f21913",
    "title": title,
    "description":description ,
    "tag": tag,
    "date": "2024-06-07T15:14:01.432Z",
    "__v": 0
  }
  setNotes(notes.concat(note))

}

  // Edit note
  const Editnote = () =>{
  
  }

  // Delete note
  const  Deletenote = () =>{
  
  }
  
  return(
    <NoteContext.Provider value={{notes,setNotes,addNotes,Editnote,Deletenote}}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;