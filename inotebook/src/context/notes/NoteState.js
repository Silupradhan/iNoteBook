import { useState } from "react";
import NoteContext from "./noteContext";
// import AddNotes from "../../components/AddNotes";

const NoteState = (props) =>{
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes,setNotes] = useState(notesInitial)


  //get all notes
  const getNotes = async () =>{
    const response = await fetch(`${host}/api/notes/fetchallnote`,{
      method : "GET",
      headers :{
        "Content-Type" : "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MzIwN2VhNzc4MjMwMjIyZjIxOTEzIn0sImlhdCI6MTcxNzc3MjQxNH0.2Krm0ysw65mQlWmLnQyt1R8J1tPfhpl6bqdZ8LZQ8F8"
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }



  //Add note
const addNotes = async(title,description,tag) =>{
  //api call
  const response = await fetch(`${host}/api/notes/addnote`,{
    method : "POST",
    headers :{
      "Content-Type" : "application/json",
      "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MzIwN2VhNzc4MjMwMjIyZjIxOTEzIn0sImlhdCI6MTcxNzc3MjQxNH0.2Krm0ysw65mQlWmLnQyt1R8J1tPfhpl6bqdZ8LZQ8F8"
    },
    body : JSON.stringify({title,description,tag})
  });
  const json =  response.json()


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
  const Editnote = async (id,title,description,tag) =>{
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method : "PUT",
      headers :{
        "Content-Type" : "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MzIwN2VhNzc4MjMwMjIyZjIxOTEzIn0sImlhdCI6MTcxNzc3MjQxNH0.2Krm0ysw65mQlWmLnQyt1R8J1tPfhpl6bqdZ8LZQ8F8"
      },
      body : JSON.stringify({title,description,tag})
    });
    const json =  response.json()

    //logic for edit note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title
        element.description = description
        element.tag = tag
      }
      
    }
  
  }

  // Delete note
  const  Deletenote = (id) =>{
    console.log("note has been deleted")
    const deletenote = notes.filter((note)=>{return note._id !== id})
    setNotes(deletenote)
  }
  
  return(
    <NoteContext.Provider value={{notes,setNotes,addNotes,Editnote,Deletenote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;