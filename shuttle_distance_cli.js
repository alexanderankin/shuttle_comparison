#!/usr/bin/env node
var fs = require('fs');

var { MonOaklandCounter: { pathDistance } } = require('./calculate_shuttle_distance');

function input(inputFile = 'coordinates.json') {
  return JSON.parse(fs.readFileSync(inputFile, 'utf8'));
}

function output(contents) {
  fs.writeFileSync('output.json', JSON.stringify(contents), 'utf8');
}

async function main() {
  // var { geometry } = input();
  // var { coordinates } = geometry;
  var coordinates = input();

  /**
   * This is a list of which stops on the path are the stops
   */
  var indexes = [
    0,
    7,
    14,
    21,
    30,
    37,
    45,
    46,
    56,
    60,
    65,
    69,
    81,
  ];

  console.log(pathDistance(coordinates, indexes))
  // console.log(coordinates)
}

if (require.main === module) {
  main().then(() => {});
}
