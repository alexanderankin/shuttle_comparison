(function (exports) {
  var geolib = require('geolib');
  var moc = exports.MonOaklandCounter = exports.MonOaklandCounter || {};
  var MIPERMETER = moc.MIPERMETER = 0.000621371;

  function pathDistance(coordinates, indexes, milesPerHour = 15, delay = 0) {
    var stop = 0;
    var cumulativeMeters = 0;
    var cumulativeMeterHrPMi = 0;

    var times = [];
    var stopCounter = 0;

    var getCoord = index => coordinates[index % coordinates.length];
    
    for (var i = 0;; i++) {
      var coordinate = getCoord(i);

      console.log(i, indexes[stop])
      if (i === indexes[stop]) {
        times.push({
          minutes: (cumulativeMeterHrPMi * MIPERMETER * 60) + delay,
          meters: cumulativeMeters,
          stopTo: stop,
        });
        cumulativeMeterHrPMi = 0;
        cumulativeMeters = 0;
        stop +=1;

        if (stop >= indexes.length) {
          break;
        }
      }

      var distanceThisNext = geolib.getDistance(getCoord(i), getCoord(i+1));
      cumulativeMeters += distanceThisNext;
      // console.log('to point', i, 'distanceThisNext', distanceThisNext)
      cumulativeMeterHrPMi += distanceThisNext / milesPerHour;
    }

    return times;
  }

  moc.pathDistance = pathDistance;

})(module && module.exports || window);
