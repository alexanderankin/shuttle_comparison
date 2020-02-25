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

    var southWest = L.latLng(40.405424809575386,-79.94720935821535);
  var northEast = L.latLng(40.41032648783207,-79.93980646133423);
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
  addGeoJSON(mymap);

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

var coordinates= [[-79.94657903909685,40.44546106426295],[-79.94650930166245,40.445122220066956],[-79.94657903909685,40.44486502393447],[-79.94760900735857,40.44327283549659],[-79.94868189096452,40.44213378524266],[-79.94934707880022,40.44123559580494],[-79.94952946901323,40.44086815121237],[-79.9501195549965,40.44044762882522],[-79.95373517274858,40.44050070461138],[-79.95437890291214,40.44085590302469],[-79.95406776666643,40.44106003919458],[-79.95303779840471,40.44134582879106],[-79.95264083147049,40.44184391632657],[-79.95304316282274,40.44198272694939],[-79.95353132486345,40.44316668825977],[-79.95301634073259,40.44198680961044],[-79.95267838239671,40.44181942030457],[-79.95298951864244,40.44135807688946],[-79.95399266481401,40.441088618208894],[-79.95436817407608,40.44083140664265],[-79.9536493420601,40.44049253910854],[-79.9501356482506,40.44041496678215],[-79.94982853531837,40.44043129780567],[-79.94972124695778,40.44028635983329],[-79.94988217949869,40.439931158410694],[-79.94991973042488,40.43967190101516],[-79.94991973042488,40.439249329731524],[-79.94984462857248,40.438802258670336],[-79.94980439543724,40.43836539183905],[-79.94966223835947,40.43697311505424],[-79.94960322976114,40.43652194586402],[-79.9496313929558,40.43583395805802],[-79.9498674273491,40.4340333157001],[-79.94976282119752,40.42924361730855],[-79.94944095611574,40.42894960936371],[-79.94937658309938,40.42844325933467],[-79.94980573654176,40.427593889434895],[-79.95066404342653,40.42687518344919],[-79.95090007781984,40.427267205848004],[-79.95216608047487,40.42700585783602],[-79.95371103286745,40.42602579374641],[-79.95493412017824,40.425535756346264],[-79.955792427063,40.42645048993864],[-79.95652198791505,40.42658116515058],[-79.95944023132326,40.429047612154825],[-79.9578094482422,40.4300276322111],[-79.95379686355592,40.42605846277947],[-79.95493412017824,40.425535756346264],[-79.95373249053956,40.42452300107238],[-79.95328187942506,40.423738922000645],[-79.95090007781984,40.41893623825741],[-79.95066404342653,40.4182991217984],[-79.9508571624756,40.41635506249118],[-79.95021343231203,40.414247573404246],[-79.9488401412964,40.41231973488292],[-79.94789600372316,40.41075128313748],[-79.94523525238039,40.4112087520061],[-79.94472026824953,40.40841487577552],[-79.94697332382204,40.40781033758519],[-79.94643688201904,40.406568566432306],[-79.94411408901216,40.40700972459731],[-79.94160890579225,40.40736918466787],[-79.94270324707033,40.41075128313748],[-79.94193077087404,40.41091466523327],[-79.94169473648073,40.41127410444777],[-79.94163036346437,40.41155185161675],[-79.94184494018556,40.4119766391873],[-79.94431257247926,40.41666546228339],[-79.9450421333313,40.41735160411116],[-79.94660854339601,40.41885455699726],[-79.94823932647706,40.4207985440818],[-79.9482822418213,40.421370294298534],[-79.94856119155885,40.421598993024574],[-79.94935512542726,40.4221870718929],[-79.95081424713136,40.424081957719146],[-79.95109319686891,40.42460467545006],[-79.95109319686891,40.42502938061542],[-79.95094299316408,40.42516005858834],[-79.95008468627931,40.425486752409896],[-79.94990095496178,40.42557046744627],[-79.94984194636346,40.42561947132165],[-79.94984731078148,40.4256664333354],[-79.95003774762155,40.42564397324597],[-79.95087996125223,40.42545612493153],[-79.95190724730492,40.42496199968643],[-79.95206013321878,40.424933413817385],[-79.95210304856302,40.425060008288106],[-79.95212987065317,40.42517026779427],[-79.95206817984582,40.42525398322455],[-79.9519394338131,40.42560517852838],[-79.95106235146524,40.426515827576345],[-79.95088800787926,40.426673046006954],[-79.95077535510063,40.42668325498325],[-79.95071902871133,40.42675267598096],[-79.95055273175242,40.42701606676179],[-79.94962736964226,40.42809820410657],[-79.94935110211374,40.42844121759296],[-79.94945570826532,40.428953692816194],[-79.94976684451105,40.42924974246043],[-79.94987413287164,40.434045565130745],[-79.94960054755212,40.43652807035294],[-79.94983926415445,40.438802258670336],[-79.94992509484292,40.43923912266282],[-79.94991704821588,40.439673942415865],[-79.94987949728966,40.43992707562481],[-79.94972124695778,40.440290442597366],[-79.94935378432275,40.44082528254573],[-79.94931086897851,40.44123559580494],[-79.94868859648706,40.4421194959592],[-79.94760766625404,40.44327691807928],[-79.94658038020134,40.44486298269137],[-79.94650796055794,40.44511813759635],[-79.94656160473825,40.44546718793752]
];
function addGeoJSON(mymap) {
  L.geoJSON({
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
        "coordinates": [[-79.94657903909685,40.44546106426295],[-79.94650930166245,40.445122220066956],[-79.94657903909685,40.44486502393447],[-79.94760900735857,40.44327283549659],[-79.94868189096452,40.44213378524266],[-79.94934707880022,40.44123559580494],[-79.94952946901323,40.44086815121237],[-79.9501195549965,40.44044762882522],[-79.95373517274858,40.44050070461138],[-79.95437890291214,40.44085590302469],[-79.95406776666643,40.44106003919458],[-79.95303779840471,40.44134582879106],[-79.95264083147049,40.44184391632657],[-79.95304316282274,40.44198272694939],[-79.95353132486345,40.44316668825977],[-79.95301634073259,40.44198680961044],[-79.95267838239671,40.44181942030457],[-79.95298951864244,40.44135807688946],[-79.95399266481401,40.441088618208894],[-79.95436817407608,40.44083140664265],[-79.9536493420601,40.44049253910854],[-79.9501356482506,40.44041496678215],[-79.94982853531837,40.44043129780567],[-79.94972124695778,40.44028635983329],[-79.94988217949869,40.439931158410694],[-79.94991973042488,40.43967190101516],[-79.94991973042488,40.439249329731524],[-79.94984462857248,40.438802258670336],[-79.94980439543724,40.43836539183905],[-79.94966223835947,40.43697311505424],[-79.94960322976114,40.43652194586402],[-79.9496313929558,40.43583395805802],[-79.9498674273491,40.4340333157001],[-79.94976282119752,40.42924361730855],[-79.94944095611574,40.42894960936371],[-79.94937658309938,40.42844325933467],[-79.94980573654176,40.427593889434895],[-79.95066404342653,40.42687518344919],[-79.95090007781984,40.427267205848004],[-79.95216608047487,40.42700585783602],[-79.95371103286745,40.42602579374641],[-79.95493412017824,40.425535756346264],[-79.955792427063,40.42645048993864],[-79.95652198791505,40.42658116515058],[-79.95944023132326,40.429047612154825],[-79.9578094482422,40.4300276322111],[-79.95379686355592,40.42605846277947],[-79.95493412017824,40.425535756346264],[-79.95373249053956,40.42452300107238],[-79.95328187942506,40.423738922000645],[-79.95090007781984,40.41893623825741],[-79.95066404342653,40.4182991217984],[-79.9508571624756,40.41635506249118],[-79.95021343231203,40.414247573404246],[-79.9488401412964,40.41231973488292],[-79.94789600372316,40.41075128313748],[-79.94523525238039,40.4112087520061],[-79.94472026824953,40.40841487577552],[-79.94697332382204,40.40781033758519],[-79.94643688201904,40.406568566432306],[-79.94411408901216,40.40700972459731],[-79.94160890579225,40.40736918466787],[-79.94270324707033,40.41075128313748],[-79.94193077087404,40.41091466523327],[-79.94169473648073,40.41127410444777],[-79.94163036346437,40.41155185161675],[-79.94184494018556,40.4119766391873],[-79.94431257247926,40.41666546228339],[-79.9450421333313,40.41735160411116],[-79.94660854339601,40.41885455699726],[-79.94823932647706,40.4207985440818],[-79.9482822418213,40.421370294298534],[-79.94856119155885,40.421598993024574],[-79.94935512542726,40.4221870718929],[-79.95081424713136,40.424081957719146],[-79.95109319686891,40.42460467545006],[-79.95109319686891,40.42502938061542],[-79.95094299316408,40.42516005858834],[-79.95008468627931,40.425486752409896],[-79.94990095496178,40.42557046744627],[-79.94984194636346,40.42561947132165],[-79.94984731078148,40.4256664333354],[-79.95003774762155,40.42564397324597],[-79.95087996125223,40.42545612493153],[-79.95190724730492,40.42496199968643],[-79.95206013321878,40.424933413817385],[-79.95210304856302,40.425060008288106],[-79.95212987065317,40.42517026779427],[-79.95206817984582,40.42525398322455],[-79.9519394338131,40.42560517852838],[-79.95106235146524,40.426515827576345],[-79.95088800787926,40.426673046006954],[-79.95077535510063,40.42668325498325],[-79.95071902871133,40.42675267598096],[-79.95055273175242,40.42701606676179],[-79.94962736964226,40.42809820410657],[-79.94935110211374,40.42844121759296],[-79.94945570826532,40.428953692816194],[-79.94976684451105,40.42924974246043],[-79.94987413287164,40.434045565130745],[-79.94960054755212,40.43652807035294],[-79.94983926415445,40.438802258670336],[-79.94992509484292,40.43923912266282],[-79.94991704821588,40.439673942415865],[-79.94987949728966,40.43992707562481],[-79.94972124695778,40.440290442597366],[-79.94935378432275,40.44082528254573],[-79.94931086897851,40.44123559580494],[-79.94868859648706,40.4421194959592],[-79.94760766625404,40.44327691807928],[-79.94658038020134,40.44486298269137],[-79.94650796055794,40.44511813759635],[-79.94656160473825,40.44546718793752]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "FINAL STOP (CMU)" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.94650930166245, 40.445122220066956 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.9501195549965, 40.44044762882522 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "HILLMAN" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.95353132486345, 40.44316668825977 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Panther Hollow stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.9501356482506, 40.44041496678215 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "half way through PH" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.94960322976114, 40.43652194586402 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg Bridge" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.95066404342653, 40.42687518344919 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hot metal bridge stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.9578094482422, 40.4300276322111 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "HMB #2 stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.95379686355592, 40.42605846277947 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hazelwood & Gloster" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.94523525238039, 40.4112087520061 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Gloster W Eliz" },
      "geometry": {
        "type": "Point",
        "coordinates": [-79.94398534297945, 40.40701789416569]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sylvan and Hazelwood" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.94184494018556, 40.4119766391873 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bud Hammer stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.94823932647706, 40.4207985440818 ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Swinburg bridge return stop" },
      "geometry": {
        "type": "Point",
        "coordinates": [ -79.95003774762155, 40.42564397324597 ]
      }
    }
  ]
}).addTo(mymap);
}

var shortRun = {
  type: 'Feature',
  properties: { author: '"David Ankin"<daveankin@gmail.com>' },
  geometry: {
    type: 'LineString',
    coordinates: [
      [-79.9470765888691, 40.444042397950625],
      [-79.94705513119699, 40.44394849955547],
      [-79.94708731770515, 40.44383418828868],
      [-79.94727775454521, 40.44336061096965],
      [-79.94743064045906, 40.443125862354826],
      [-79.94756475090982, 40.442952351982186],
      [-79.94789198040962, 40.44246039660818],
      [-79.94851961731912, 40.441739808171],
      // [-79.95036095380783,40.43611160383588],[-79.95029389858247,40.43581762591774],[-79.95040118694307,40.43560530773302],[-79.95047628879549,40.434290553274934],[-79.95047628879549,40.43372707920887],[-79.95051249861717,40.4333698015397],[-79.95050713419916,40.4333187617177],[-79.95045885443689,40.433265680261734],[-79.95042130351067,40.43324322271005],[-79.9503864347935,40.43320443237585],[-79.95034620165825,40.43319626598686],[-79.95032742619514,40.433177891608],[-79.95032474398613,40.433157475625585],[-79.95030328631401,40.43310439404229],[-79.9503381550312,40.4330227299862],[-79.9503703415394,40.432926774593554],[-79.9503864347935,40.432853276753356],[-79.95040521025659,40.43275527950819],[-79.95045080780983,40.43261440821802],[-79.95045349001886,40.4325102857704],[-79.95045080780983,40.43236328909928],[-79.95044544339181,40.43208358621266],[-79.95053395628929,40.43185696477255],[-79.95057687163353,40.431750799510866],[-79.95074048638344,40.4315915513041],[-79.950839728117,40.431317970171],[-79.95084241032602,40.431107679439],[-79.95082631707191,40.43088922138023],[-79.95079681277277,40.430709554407535],[-79.95076462626457,40.43057480386302],[-79.95069220662117,40.43051151184742],[-79.95053395628929,40.43044617809138],[-79.9503515660763,40.43037471922306],[-79.95019063353539,40.43028488510942],[-79.9500833451748,40.43020321762927],[-79.95002165436746,40.43009909144824],[-79.95000824332239,40.42994800611456],[-79.94997873902322,40.429745877907635],[-79.94985535740855,40.42945799729139],[-79.94978561997414,40.429376328807095],[-79.94955494999886,40.42914561480308],[-79.94959518313411,40.429076196275304],[-79.94947716593744,40.42895165109]
    ]
  }
};
