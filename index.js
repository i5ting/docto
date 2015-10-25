#!/usr/bin/env node
var debug = require('debug')('docto');
var fs = require('fs');
var ccli = require('ccli')(__dirname)
var gitConfig = require('git-config');


var git_global_config = gitConfig.sync(); 
var git_current_config; 

var dirList = fs.existsSync(ccli.cp + '/.git');

if (dirList == true){
  git_current_config = gitConfig.sync(ccli.cp + '/.git/config'); 
}else{
  return console.log('当前不是git仓库，无法使用')
}

debug(git_global_config);
debug(git_current_config);

// user: { name: 'i5ting', email: 'i5ting@126.com' },

var user,project;

debug(ccli.fp);
debug(ccli.cp);
debug(ccli.argv);

if (ccli.argv['_'].length > 0) {
  var project_name = ccli.argv['_'][0].split('/')

  debug(project_name)

  if (project_name.length >= 2) {
    user = project_name[0];
    project = project_name[1];
  }else if (project_name.length === 1) {
    user = git_global_config.user.name;
    project = project_name[0];
  }else{
    return console.log('error');
  }
  console.log(user);
  console.log(project);
}else{
  var cfg = require('get-git-info')(ccli.cp);
  console.log(cfg)
  user = cfg.user;
  project = cfg.project;
}

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
