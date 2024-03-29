import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext'
import NoteItem from './noteItem'

export default function Notes() {
    const context = useContext(noteContext);
    const { note, getNote, editNote } = context;
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) { 
            getNote(); 
        }
        else {
            history.push('/login')
        }
    }, [])

    const [notes, setNotes] = useState({ title: "", description: "", tag: '' })

    const ref = useRef(null)

    const updateNote = (currentNote) => {
        setNotes(currentNote);
        ref.current.click();
    }
    const onChange = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value })
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
                                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={notes.description} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={notes.tag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={notes.title.length === 0 && 'true'} className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Update Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>

                <h1>Your Notes</h1>
                <div className={`${note.length !== 0 && 'd-none'} mx-3 my-3 bold fw-bold text-nowrap bg-light border`} style={{ width: '12rem' }}>
                    {note.length === 0 && 'No Note to display'}
                </div>
                {note.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
