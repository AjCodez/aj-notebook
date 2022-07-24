import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const url = 'http://localhost:5000';

    const initialNotes = []

    const getNote = async () => {
        const response = await fetch(`${url}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZGYwMmIyNWZlYTRjNjk5NTdlZGEzIn0sImlhdCI6MTY1NzczOTExN30.PD_iHlUk6u3LiWXNA-LMObjjwtWWHp69zrvPVQoAx4E'
            }
        });
        const json = await response.json();
        setNote(json);
    }

    const [note, setNote] = useState(initialNotes)



    const addNote = async(title, description, tag) => {
        const addResponse = await fetch(`${url}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZGYwMmIyNWZlYTRjNjk5NTdlZGEzIn0sImlhdCI6MTY1NzczOTExN30.PD_iHlUk6u3LiWXNA-LMObjjwtWWHp69zrvPVQoAx4E'
            },
            body: JSON.stringify({title,description,tag})
        });
        getNote();
    }

    const deleteNote = async (id) => {
        const deleteResponse = await fetch(`${url}/api/notes/deletenote/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZGYwMmIyNWZlYTRjNjk5NTdlZGEzIn0sImlhdCI6MTY1NzczOTExN30.PD_iHlUk6u3LiWXNA-LMObjjwtWWHp69zrvPVQoAx4E'
            }
        });
        getNote();
    }

    const editNote = async(id, title, description, tag) => {
        const updateResponse = await fetch(`${url}/api/notes/updatenote/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZGYwMmIyNWZlYTRjNjk5NTdlZGEzIn0sImlhdCI6MTY1NzczOTExN30.PD_iHlUk6u3LiWXNA-LMObjjwtWWHp69zrvPVQoAx4E'
            },
            body: JSON.stringify({title,description,tag})
        });
        getNote();
    }

    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;