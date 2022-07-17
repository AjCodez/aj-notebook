import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "62c2f4aa68d45d87d7d67630a",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My first note",
            "description": "First note created with api",
            "tag": "personal",
            "date": "2022-07-13T22:43:50.634Z",
            "__v": 0
        },
        {
            "_id": "62d42a57926486f149e39a247",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My second note",
            "description": "Second note created with api",
            "tag": "personal",
            "date": "2022-07-17T15:27:19.249Z",
            "__v": 0
        }, {
            "_id": "62cf4aa68d45d87d27d67630a",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My first note",
            "description": "First note created with api",
            "tag": "personal",
            "date": "2022-07-13T22:43:50.634Z",
            "__v": 0
        },
        {
            "_id": "62d242a57926486f149e39a47",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My second note",
            "description": "Second note created with api",
            "tag": "personal",
            "date": "2022-07-17T15:27:19.249Z",
            "__v": 0
        }, {
            "_id": "62cf4aa68d45d287d7d67630a",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My first note",
            "description": "First note created with api",
            "tag": "personal",
            "date": "2022-07-13T22:43:50.634Z",
            "__v": 0
        },
        {
            "_id": "62d42a257926486f149e39a47",
            "user": "62cdf02b25fea4c69957eda3",
            "title": "My second note",
            "description": "Second note created with api",
            "tag": "personal",
            "date": "2022-07-17T15:27:19.249Z",
            "__v": 0
        }
    ]

    const addNote = () => {}

    const deleteNote = () => {}

    const updateNote = () => {}


    const [note, setNote] = useState(initialNotes)


    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;