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
    0,   // FINAL STOP (CMU)
    7,   // Panther Hollow stop
    14,  // HILLMAN
    21,  // Panther Hollow stop
    30,  // half way through PH
    37,  // Swinburg Bridge
    45,  // Hot metal bridge stop
    46,  // HMB #2 stop
    56,  // Hazelwood & Gloster
    60,  // Gloster W Eliz
    65,  // Sylvan and Hazelwood
    69,  // Bud Hammer stop
    81,  // Swinburg bridge return stop
    99,  // half way through PH
    104,  // Panther Hollow stop
  ];

  console.log(pathDistance(coordinates, indexes))
  // console.log(coordinates)
}

if (require.main === module) {
  main().then(() => {});
}
