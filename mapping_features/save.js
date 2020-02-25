var fs = require('fs');
var path = require('path');
var coordinates = JSON.parse(fs.readFileSync(path.join(__dirname, '../coordinates.json'), 'utf8'))

var stopIndex = 0;
var stops = [
  0,   // FINAL STOP (CMU)
  7,   // Panther Hollow stop
  14,  // HILLMAN
  21,  // Panther Hollow stop
  30,  // half way through PH
  37,  // Swinburg Bridge
  40,  // PTC
  45,  // Hot metal bridge stop
  46,  // PTC return
  56,  // Hazelwood & Gloster
  60,  // Eliz and Second
  66,  // Sylvan and Hazelwood
  70 + 1,  // Bud Hammer stop
  81 + 1,  // Swinburg bridge return stop
  95,      // 
  102,  // half way through PH
  107,  // Panther Hollow stop
];
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
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "HILLMAN" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "half way through PH" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg Bridge North" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "PTC" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hot Metal Bridge" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "PTC return" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hazelwood & Gloster" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Eliz and Second" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sylvan and Hazelwood" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bud Hammer stop" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg bridge South" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg bridge North return" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "half way through PH return" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop return" },
      "geometry": {
        "type": "Point",
        "stopIndex": stopIndex,
        "coordinates": coordinates[stops[stopIndex++]]
      }
    }
  ]
}

if (require.main === module) {
  fs.writeFileSync(path.join(__dirname, 'path.geojson'), JSON.stringify(a, null, 2), 'utf8');
}

module.exports = {
  stops,
  pathFeatureCollection: a
};
