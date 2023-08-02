import React,{useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

import notes from "../notes";


function App(){

    const[notes,setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNote => {
           return [...prevNote , newNote];
        });
    }
    function deleteNote(id){
        setNotes(prevNote => {
            return prevNote.filter((noteItem,index)=>{
                return index !== id;
            });
        })
    }

   
    return (<div> <Heading />

                <InputArea  onAdd={addNote} />
                {notes.map((noteItem,index) => {
                    return (
                    <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete = {deleteNote} />
                );
                })}
                <Footer />
            </div>);
}

export default App;