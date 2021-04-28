import React, { useState } from 'react';
import Header from './components/Header'
import Note from './components/Note'
import CreateArea from './components/CreateArea'
import notes from './notes'



function App(){

  const [notes, setNotes] = useState([])


  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  

  return ( <div>
    <Header />

    <CreateArea onAdd={addNote} />

    {notes.map( (noteItem) => {
      return <Note 
        title={noteItem.title}
        content={noteItem.content}
      />

    })}        
    
  </div>
  )
}

export default App;
