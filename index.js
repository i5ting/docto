#!/usr/bin/env node

var ccli = require('ccli')(__dirname)

console.log(ccli.fp);
console.log(ccli.cp);
console.log(ccli.argv);

var project_name = ccli.argv['_'][0].split('/')

console.log(project_name)

var user = project_name[0];
var project = project_name[1];

console.log(user);
console.log(project);

function copy () {
  var files_arr = ['tpl/README.md', 'tpl/gulpfile.js']
  
  files_arr.forEach(function(file){
    var d = ccli.cp + '/' + file.split('/').pop()
    ccli.tpl(ccli.fp + '/' +file, {
      user    : user,
      project : project
    }, d)
  })
  
}

function link () {
  console.log(ccli.cp )
  ccli.linkfolder('node_modules/','node_modules/');
}

function main (){
  copy() 
  link();
}

main();
