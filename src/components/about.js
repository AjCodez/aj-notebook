import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export const About = () => {
    const context = useContext(noteContext);
    return (
        <div>This is About {context.name} who is in {context.year} year of b.tech </div>
    )
}
