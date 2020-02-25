(function (exports) {
  var geolib = require('geolib');
  var moc = exports.MonOaklandCounter = exports.MonOaklandCounter || {};
  var MIPERMETER = moc.MIPERMETER = 0.000621371;

  function pathDistance(coordinates, indexes, milesPerHour = 15) {
    var stop = 0;
    var cumulativeMeters = 0;
    var cumulativeMeterHrPMi = 0;

    var times = [];

    for (var i = 1; i < coordinates.length - 1; i++) {
      var coordinate = coordinates[i];

      if (i === indexes[stop].index) {
        // console.log(stop, 'to get to', cumulativeMeterHrPMi * MIPERMETER, cumulativeMeters)
        // console.log(cumulativeMeterHrPMi * MIPERMETER, cumulativeMeters)
        times.push({
          minutes: cumulativeMeterHrPMi * MIPERMETER * 60,
          meters: cumulativeMeters
        });
        cumulativeMeterHrPMi = 0;
        cumulativeMeters = 0;
        stop +=1;
      }

      var distanceThisNext = geolib.getDistance(coordinates[i], coordinates[i+1]);
      cumulativeMeters += distanceThisNext;
      console.log('to point', i, 'distanceThisNext', distanceThisNext)
      cumulativeMeterHrPMi += distanceThisNext / milesPerHour;
    }

    return times;
  }

  moc.pathDistance = pathDistance;

})(module && module.exports || window);
