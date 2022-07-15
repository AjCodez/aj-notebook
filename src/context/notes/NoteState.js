import React from "react";
import NoteContext from "./NoteContext";

const noteState = (props) => {
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState;