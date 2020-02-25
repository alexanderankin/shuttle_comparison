var fs = require('fs');
var coordinates = JSON.parse(fs.readFileSync(__dirname + '/path.geojson', 'utf8')).features[0].geometry.coordinates;

var list = [[-79.94972057640554, 40.44028840121534]];
// var list = [coordinates[30]];

for (var i = 0; i < list.length; i++) {
  var listi = list[i]/*.reverse();*/

  for (var j = 0; j < coordinates.length; j++) {
    var coordinate = coordinates[j];

    var diffLat = Math.abs(listi[0] - coordinate[0]);
    var diffLng = Math.abs(listi[1] - coordinate[1]);

    if (diffLat < 0.0001 && diffLng < 0.0001) {
      console.log(i, 'is', j);
    }
  }
}

// coordinates.splice(60, 0, [-79.94411408901216, 40.40700972459731])
// console.log(coordinates+'')