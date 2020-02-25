var fs = require('fs');
var coordinates = JSON.parse(fs.readFileSync('../coordinates.json', 'utf8'))

var stopIndex = 0;
var a = {
  "type": "FeatureCollection",
  "properties": {
    "author": "\"David Ankin\"<daveankin@gmail.com>"
  },
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "IGS Path" },
      "geometry": {
        "type": "LineString",
        "stopIndex": stopIndex,
        "coordinates": coordinates
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "FINAL STOP (CMU)" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "HILLMAN" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "half way through PH" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg Bridge" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hot metal bridge stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "HMB #2 stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hazelwood & Gloster" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Gloster W Eliz" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sylvan and Hazelwood" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bud Hammer stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg bridge return stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "half way through PH" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stopIndex++]
      }
    },
  ]
}


fs.writeFileSync('path.geojson', JSON.stringify(a), 'utf8');
// fs.writeFileSync('perch-resources-boundary-street-to-saline-street-south-of-junction-hollow.geojson', JSON.stringify(a), 'utf8');

// var { exec } = require('child_process');

// exec('readlink -f path.geojson | xclip -sel clip', {shell:true}, () => {});