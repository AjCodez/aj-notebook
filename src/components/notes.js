import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'

export default function Notes() {
    const context = useContext(noteContext);
    const { note, getNote, editNote } = context;
    useEffect(() => {
        getNote();
    }, [getNote])

    const [notes, setNotes] = useState({title : "", description: "", tag:''})

    const ref = useRef(null)

    const updateNote = (currentNote) => {
        setNotes(currentNote);
        ref.current.click();
    }
    const onChange = (e) => {
        setNotes({...notes, [e.target.name]:e.target.value})
      }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(notes._id, notes.title, notes.description, notes.tag)
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title" id="title" onChange={onChange} value={notes.title} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={notes.description}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={notes.tag}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Changes</button>
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
