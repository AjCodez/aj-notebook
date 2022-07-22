import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'

export default function Notes() {
    const context = useContext(noteContext)
    const { note, getNote } = context
    useEffect(() => {
      getNote();
    }, [])
    
    return (
        <div className='row my-3'>

            <h1>Your notes</h1>
            {note.map((note) => {
                return <NoteItem key={note._id} note={note} />
            })}
        </div>
    )
}
