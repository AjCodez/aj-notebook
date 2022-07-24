import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function NoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote, updateNote } = context
    return (
        <div className='col-md-4'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">

                        <h5 className="card-title">{props.note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(props.note._id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { }}></i>
                    </div>
                    <p className="card-text">{props.note.description}</p>
                </div>
            </div>
        </div>
    )
}
