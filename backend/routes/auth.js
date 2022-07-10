const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator')

router.post('/', [
  body('email', 'enter a valid email').isEmail(),
  body('name', 'length should be greater than 3').isLength({ min: 3 }),
  body('password', 'length should be greater than 8').isLength({ min: 8 }),
], async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let user = User.findOne({email: req.body.email});
  if(user){
    return res.status(400).json({error: 'user with this email already exists'})
  }
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  
  // .then(user => res.json(user)).catch(err => {
  //   console.log(err);
  //   res.json({
  //     error: 'enter a unique value',
  //     message: err.message
  //   })
  // })
})

module.exports = router;