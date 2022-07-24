import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'

export default function Notes() {
    const context = useContext(noteContext)
    const { note, getNote } = context
    useEffect(() => {
        getNote();
    }, [getNote])

    const ref = useRef(null)

    const updateNote = (note) => {
        ref.current.click()
    }

    return (
        <>
            <button ref={ref} className='d-none' data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>

                <h1>Your notes</h1>
                {note.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
