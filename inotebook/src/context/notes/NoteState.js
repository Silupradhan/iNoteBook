import { useState } from "react";
import NoteContext from "./noteContext";

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
      "_id": "666323b9080108c371e3ed61",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
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
      "_id": "666323b9080108c371e3ed61",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    },
    {
      "_id": "666323b9080108c371e3ed61",
      "user": "6663207ea778230222f21913",
      "title": "this is my firt note",
      "description": "this is my first description",
      "tag": "personal tag",
      "date": "2024-06-07T15:14:01.432Z",
      "__v": 0
    }
  ]

  const [notes,setNotes] = useState(notesInitial)
  
  return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;