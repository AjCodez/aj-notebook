const express = require('express')
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    notes = await Notes.find({user: req.user.id});
    res.json(notes)
})

module.exports = router;