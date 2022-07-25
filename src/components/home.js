import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import Notes from './notes'


export const Home = () => {

  const context = useContext(noteContext)
  const { addNote } = context

  const [note, setNote] = useState({title : "", description: "", tag:""})

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({title : "", description: "", tag:""})
  }

  return (
    <div>
      <div className='container'>
        <h1>Add a note</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" name="title" value={note.title} id="title" aria-describedby="emailHelp" onChange={onChange} minLength={3} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" value={note.description} id="description" name="description" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} />
          </div>
          <button disabled={note.title.length===0 && 'true'} type="submit" className="btn btn-primary" onClick={handleClick}>Add the note</button>
        </form>
      </div>
      <Notes />
    </div>
  )
}
