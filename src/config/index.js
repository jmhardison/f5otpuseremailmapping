////////////////////////////////////////
// f5 email lookup.
//
// Copyright (c) 2017 Jonathan Hardison
////////////////////////////////////////

'use strict'; 
class Config{

 constructor(){
    this.port = process.env.PORT || 3001;
    this.sqlport = process.env.SQLPORT || 1433;
    this.sqlserver = process.env.SQLSERVER || "localhost";
    this.sqluser = process.env.SQLUSER || "user";
    this.sqlpass = process.env.SQLPASS || "pass";
    this.sqldb = process.env.SQLDB || "dbname";
    this.sqlproc = process.env.SQLPROC || "storedprocname";

 }

}
module.exports = Config;