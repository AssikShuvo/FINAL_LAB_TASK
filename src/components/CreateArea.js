import React, { useState } from 'react'
import '../../src/CreateArea.css'



function CreateArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }


    return <div className="area">

        <input name="title" onChange={handleChange} value={note.title} placeholder="Title"></input><br/>

        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note " rows="3"> </textarea> <br/>

        <button onClick={submitNote} >Add </button>


    </div>
}

export default CreateArea