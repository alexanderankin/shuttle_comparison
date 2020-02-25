/*
var b = mymap.getBounds();
console.log(`
  var southWest = L.latLng(${b._southWest.lat},${b._southWest.lng});
  var northEast = L.latLng(${b._northEast.lat},${b._northEast.lng});
`)
*/
$(async () => {
  // var southWest = L.latLng(40.39493401873283, -80.01686096191408);
  // var northEast = L.latLng(40.44720833010993, -79.89841461181642);
  // var southWest = L.latLng(40.443523913870344, -79.94822323322298);
  // var northEast = L.latLng(40.44434042242287, -79.9463725090027);
  // var southWest = L.latLng(40.432412288025354,-79.95860338211061);
  // var northEast = L.latLng(40.43894515841954,-79.9437975883484);

  var southWest = L.latLng(40.408790667048834,-79.98364448547365);
  var northEast = L.latLng(40.447992135544304,-79.92442131042482);
  var initialBounds = L.latLngBounds(southWest, northEast);

  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  mymap.fitBounds(initialBounds);

  // add the OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(mymap);

  // show the scale bar on the lower left corner
  L.control.scale().addTo(mymap);

  // tell me where im clicking
  window.points = [];
  var popup = L.popup();
  function onMapClick(e) {
    // console.log({ lat: e.latlng.lat, lng: e.latlng.lng });
    window.points.push([ e.latlng.lng, e.latlng.lat ]);
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
  }
  mymap.on('click', onMapClick);

  // show me what i made
  var response = await fetch('/path.geojson');
  var geoJSON = JSON.parse(await response.text());
  addGeoJSON(mymap, geoJSON);

  // setTimeout(function() {

  //   addMarker(1, '0 is index 1')
  //   addMarker(7, '1 is index 7')
  //   addMarker(14, '2 is index 14')
  //   addMarker(21, '3 is index 21')
  //   addMarker(30, '4 is index 30')
  //   addMarker(37, '5 is index 37')
  //   addMarker(45, '6 is index 45')
  //   addMarker(46, '7 is index 46')
  //   addMarker(56, '8 is index 56')
  //   addMarker(60, '9 is index 60')
  //   addMarker(65, '10 is index 65')
  //   addMarker(69, '11 is index 69')
  //   addMarker(81, '12 is index 81')
  // }, 10);


  window.mymap = mymap;
});

function addMarker(index, title) {
  L.marker(coordinates[index].reverse(), { title: 'stop #' + index + (title?(' '+ title):'')}).addTo(window.mymap);
}

function addGeoJSON(mymap, geoJSON) {
  L.geoJSON(geoJSON).addTo(mymap);
}
