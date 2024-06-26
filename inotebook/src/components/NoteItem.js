import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const {Deletenote} = context
    const { note } = props
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash me-3" onClick={()=>{Deletenote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
