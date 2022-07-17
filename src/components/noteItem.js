import React from 'react'

export default function NoteItem(props) {
    return (
        <div>
            <div className="card container my-3">
                <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.note.title}</h5>
                        <p className="card-text">{props.note.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
