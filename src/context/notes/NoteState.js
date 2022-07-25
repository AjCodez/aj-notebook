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
                'auth-token': localStorage.getItem('token')
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
                'auth-token': localStorage.getItem('token')
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
                'auth-token': localStorage.getItem('token')
            }
        });
        getNote();
    }

    const editNote = async(id, title, description, tag) => {
        const updateResponse = await fetch(`${url}/api/notes/updatenote/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
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