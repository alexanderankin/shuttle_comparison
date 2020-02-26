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

  var southWest = L.latLng(40.426578102453206,-79.95096042752266);
  var northEast = L.latLng(40.42719063915278,-79.95003506541252);
  var initialBounds = L.latLngBounds(southWest, northEast);

  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  mymap.fitBounds(initialBounds);

  // add the OpenStreetMap tiles
  // OSM : https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
  // Open Cycle Map: http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
  L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
    maxZoom: 30,
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
  var coordinates = geoJSON.features[0]["geometry"]["coordinates"]
  addGeoJSON(mymap, geoJSON);
  addMarker(coordinates, mymap)

  // setTimeout(function() {

  // addMarker(1, '0 is index 1')
  // addMarker(7, '1 is index 7')
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


function addMarker(coordinates, mymap) {
  console.log('coords');
  coordinates.forEach(function (item, index) {
    label = String(index)
    console.log(index, item);
    L.marker(item.reverse(), { title: String(index)}).bindTooltip(label, {permanent: true, opacity: 0.7}).addTo(mymap);
  });
}

function addGeoJSON(mymap, geoJSON) {
  L.geoJSON(geoJSON, {
    pointToLayer: function(feature,latlng) {
      console.log('hey');
      label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
      return new L.CircleMarker(latlng, {
        radius: 5,
        color: "red",
      }).bindTooltip(label, {permanent: true, opacity: 0.7}).openTooltip();
    }
  }).addTo(mymap);
}
