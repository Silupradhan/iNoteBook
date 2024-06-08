import React from 'react'
import Note from './Note'
import AddNotes from './AddNotes'

const Home = () => {
 
  return (
    
<>
      <div className='container my-3'>
          <AddNotes/>
          <Note></Note>
        
      </div>

    </>
  )
}

export default Home

