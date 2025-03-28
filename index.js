#!/usr/bin/env node
const path = require('path');
const { execFile } = require('node:child_process');

if (!process.argv?.[2]) {
  console.log('Please provide a package name');
  process.exit(1);
}

execFile(path.join(__dirname, './force-unlink.sh'), [process.argv?.[2]], (error, stdout, stderr) => {
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
});