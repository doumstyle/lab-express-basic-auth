const mongoose = require('mongoose');
const { Router } = require('express');
const router = new Router();

const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const saltRounds = 10;

// GET Routes
router.get('/signup', (req, res) => res.render('auth/signup'));

// POST Routes



module.exports = router;