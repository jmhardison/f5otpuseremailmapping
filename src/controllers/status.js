////////////////////////////////////////
// f5 email lookup.
//
// Copyright (c) 2017 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var Router = express.Router;


module.exports = ({config}) => {
    let api = Router();
    
    // general
    api.get('/', (req, res) => {
        res.json({status: "running"});
    });
    
    return api;
}