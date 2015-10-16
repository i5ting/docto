#!/usr/bin/env node
var fs = require('fs')
  , path = require("path")
  , file_path = __dirname
  , current_path = process.cwd()
  , argv = process.argv;
  
argv.shift();


// opt simple parser
for(var i in argv){
  var _argv = argv[i];
  
  if(_argv == '-h'  || _argv == '--help'){
    return help();
  }
}


function help(){
  console.log('help')
}