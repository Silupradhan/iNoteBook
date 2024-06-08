import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Home = () => {
  const context = useContext(noteContext)
  const {notes,setNotes} =context
  return (
    <>
      <div className='container my-3'>
        <h2>Add a Notes</h2>
        <form className='my-3'>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        <div className='container'>
        <h2>Your Note</h2>
        {notes.map((note)=>{
          return note.title;
        })}
        </div>
      </div>

    </>
  )
}

export default Home

