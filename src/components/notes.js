import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'

export default function Notes() {
    const context = useContext(noteContext)
    const { note, setNote } = context
    return (
        <div className='container'>

            <h1>Your notes</h1>
            {note.map((note) => {
                return <NoteItem note={note}/>
            })}
        </div>
    )
}
