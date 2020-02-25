#!/usr/bin/env node
var fs = require('fs');

var geolib = require('geolib');

function input(argument) {
  return JSON.parse(fs.readFileSync('input.json', 'utf8'));
}

function output(contents) {
  fs.writeFileSync('output.json', JSON.stringify(contents), 'utf8');
}

async function main() {
  var { geometry } = input();
  var { coordinates } = geometry;

}

if (require.main === module) {
  main().then(() => {});
}
