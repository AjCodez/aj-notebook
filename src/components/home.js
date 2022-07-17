import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import Notes from './notes'


export const Home = () => {

  const context = useContext(noteContext)
  const { addNote } = context

  const onChange = () => {}
  const handleClick = () => {}

  return (
    <div>
      <div className='container'>
        <h1>Add a note</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" name="desc" onChange={onChange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add the note</button>
        </form>
      </div>
      <Notes />
    </div>
  )
}
