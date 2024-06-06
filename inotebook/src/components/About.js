import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(()=>{
   a.update()
   //eslint-disable-next-line
  },[])
  
  return (
    <div className='container'>
      <p>this is about . My name is {a.state.name} and i am in class {a.state.class}</p>
    </div>
  )
}

export default About
