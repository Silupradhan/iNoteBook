import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Note = () => {
    const context = useContext(noteContext)
    const {notes,getNotes} =context
    // eslint-disable-next-line

    useEffect(() =>{
      getNotes()
    },[])
  return (
    <>
      <div className='row my-3 '>
        <h2>Your Note</h2>
        {notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>;
        })}
        </div>
    </>
  )
}

export default Note
