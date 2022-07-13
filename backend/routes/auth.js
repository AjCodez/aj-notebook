const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

router.post('/createuser', [
  body('email', 'enter a valid email').isEmail(),
  body('name', 'length should be greater than 3').isLength({ min: 3 }),
  body('password', 'length should be greater than 8').isLength({ min: 8 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: 'user with this email already exists' })
    }
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePass,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, 'shhhhh');

    res.json({authToken})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error happend")
  }
})

router.post('/loginuser', [
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Enter a password').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  const {email,password} = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "Invalid credentials"});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({error: "Invalid credentials"});
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, 'shhhhh');

    res.json({authToken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error happend")
  }
})

router.post('/getuser',fetchUser, async (req, res) => {
  try {
    const UserId = req.user.id;
    const user = await User.findById(UserId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error happend")
  }
})

module.exports = router;