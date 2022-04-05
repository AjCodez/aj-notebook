const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default:'general'
    },
    date: {
        type: Date,
        defualt: Date.now 
    },
})

module.exports = mongoose.model('Notes', NotesSchema);