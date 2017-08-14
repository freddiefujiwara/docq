#!/usr/bin/env node

let fs = require('fs');
let program = require('commander');
let pkg = require('./package');
let queryValue = undefined;
let fileValue = undefined;
let type = undefined;
let stream = undefined;

program
    .version(pkg.version)
    .description(pkg.description)
    .arguments('<query> [file.html]')
    .option('-t --type <type>', 'Output type: (inner|outer|text|value)'
    , /^(inner|outer|text|value)$/i, 'outer')
    .action(function(query,file){
        queryValue = query;
        fileValue = file;
    });
program.parse(process.argv);

if (typeof queryValue === 'undefined') {
    program.help();
}

let getStream = require('get-stream');
if((typeof fileValue) === 'string'){
    stream = fs.createReadStream(fileValue);
}else{
    stream = process.stdin;
}

getStream(stream).then((html) => {
    let Docq = require('./lib/docq');
    let dq = new Docq(html, queryValue,program.type);
    console.log(dq.run());
});
