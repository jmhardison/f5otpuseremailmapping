////////////////////////////////////////
// f5 email lookup shiznit.
//
// Copyright (c) 2017 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var config = require('../config');

//import initializeDB from '../db';
var statusController = require('../controllers/status');
var emailController = require('../controllers/emaillookup');


let router = express();

//middleware

// v1 //
var v1Base = "/v1";
    
router.use(`${v1Base}/status`, statusController({config}));
router.use(`${v1Base}/user`, emailController({config}));
    

module.exports = router;