const express = require('express')
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error happend")
    }
})

router.post('/addnote', fetchUser, [
    body('title', 'enter a valid title').exists(),
    body('description', 'enter something to note description').exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error happend")
    }
})

router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).json({ error: "Not Found" }) }

        if (note.user != req.user.id) {
            return res.status(401).json({ error: "Not allowed" });
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error happend")
    }
})

router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {

        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).json({ error: "Not Found" }) }

        if (note.user != req.user.id) {
            return res.status(401).json({ error: "Not allowed" });
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({success: "Note has been deleted", title: note.title})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error happend")
    }
})

module.exports = router;