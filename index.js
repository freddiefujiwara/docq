#!/usr/bin/env node
if (process.argv.length !== 3) {
  let usage = `Usage: ${process.argv[0]} ${process.argv[1]} `;
  usage += `<qery selector>`;
  console.error(usage);
  process.exit(0);
}

var getStream = require('get-stream');
var stream = process.stdin;

getStream(stream).then(html => {
    var Docq = require('./lib/docq');
    var dq = new Docq(html,process.argv[2]);
    console.log(dq.run());
});
