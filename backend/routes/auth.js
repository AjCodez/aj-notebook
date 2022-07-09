const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator')

router.get('/',[
  body('email'),isEmail(),
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 8 }),
], (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  res.send(req.body);
})

module.exports = router;