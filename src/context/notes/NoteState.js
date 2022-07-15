import React from "react";
import NoteContext from "./NoteContext";

const noteState = (props) => {
    const state = {
        "name": "Ajit",
        "year": "3rd"
    } 
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState;