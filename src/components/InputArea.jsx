import React, { useState } from "react";
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';

function InputArea(props){

    const[note,setNote]=useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    } 

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }



    return (
        <div>
            <form>
                <input type="text" name ="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a Note..." />
                <button onClick={submitNote}> <NoteAddTwoToneIcon/> </button>
            </form>
        </div>
    );
}

export default InputArea;