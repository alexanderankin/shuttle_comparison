#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var { MonOaklandCounter: { pathDistance } } = require('./calculate_shuttle_distance');

function input(inputFile = 'coordinates.json') {
  return JSON.parse(fs.readFileSync(inputFile, 'utf8'));
}

function output(contents) {
  fs.writeFileSync('output.json', JSON.stringify(contents), 'utf8');
}

var { stops, pathFeatureCollection } = require('./mapping_features/save');

async function main() {
  // var { features } = input(path.join(__dirname, 'mapping_features', 'path.geojson'));
  // var { coordinates } = features[0].geometry;
  var coordinates = pathFeatureCollection.features[0].geometry.coordinates;

  /**
   * This is a list of which stops on the path are the stops
   */
  var indexes = stops;

  var result = pathDistance(coordinates, indexes);
  console.log(result)
  console.log(result.length)
  output(result)
  // console.log(coordinates)
}

if (require.main === module) {
  main().then(() => {});
}
