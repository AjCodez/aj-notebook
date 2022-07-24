import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'
import { UpdateNoteModal } from './updateNoteModal'

export default function Notes() {
    const context = useContext(noteContext)
    const { note, getNote } = context
    useEffect(() => {
      getNote();
    }, [getNote])

    const updateNote = (note) => {

    }
    
    return (
        <div className='row my-3'>
            <UpdateNoteModal/>

            <h1>Your notes</h1>
            {note.map((note) => {
                return <NoteItem key={note._id} updateNote={updateNote} note={note} />
            })}
        </div>
    )
}
