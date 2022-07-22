import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = async (props) => {

    const initialNotes = []

    const getNote = async () => {
        const response = await fetch("localhost:5000/api/notes/fetchallnotes", {
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



    const addNote = (title, description, tag) => {
        const notes = {
            "_id": "62d42a257926486f149e39a47",
            "user": "62cdf02b25fea4c69957eda3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-07-17T15:27:19.249Z",
            "__v": 0
        };
        setNote(note.concat(notes))
    }

    const deleteNote = (id) => {
        const filteredNote = note.filter((note) => { return note._id !== id });
        setNote(filteredNote);
    }

    const updateNote = (id, title, description, tag) => {
        for (let index = 0; index < note.length; index++) {
            const element = note[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }





    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, updateNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;