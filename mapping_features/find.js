var coordinates = [[-79.94657903909685,40.44546106426295],[-79.94650930166245,40.445122220066956],[-79.94657903909685,40.44486502393447],[-79.94760900735857,40.44327283549659],[-79.94868189096452,40.44213378524266],[-79.94934707880022,40.44123559580494],[-79.94952946901323,40.44086815121237],[-79.9501195549965,40.44044762882522],[-79.95373517274858,40.44050070461138],[-79.95437890291214,40.44085590302469],[-79.95406776666643,40.44106003919458],[-79.95303779840471,40.44134582879106],[-79.95264083147049,40.44184391632657],[-79.95304316282274,40.44198272694939],[-79.95353132486345,40.44316668825977],[-79.95301634073259,40.44198680961044],[-79.95267838239671,40.44181942030457],[-79.95298951864244,40.44135807688946],[-79.95399266481401,40.441088618208894],[-79.95436817407608,40.44083140664265],[-79.9536493420601,40.44049253910854],[-79.9501356482506,40.44041496678215],[-79.94982853531837,40.44043129780567],[-79.94972124695778,40.44028635983329],[-79.94988217949869,40.439931158410694],[-79.94991973042488,40.43967190101516],[-79.94991973042488,40.439249329731524],[-79.94984462857248,40.438802258670336],[-79.94980439543724,40.43836539183905],[-79.94966223835947,40.43697311505424],[-79.94960322976114,40.43652194586402],[-79.9496313929558,40.43583395805802],[-79.9498674273491,40.4340333157001],[-79.94976282119752,40.42924361730855],[-79.94944095611574,40.42894960936371],[-79.94937658309938,40.42844325933467],[-79.94980573654176,40.427593889434895],[-79.95066404342653,40.42687518344919],[-79.95090007781984,40.427267205848004],[-79.95216608047487,40.42700585783602],[-79.95371103286745,40.42602579374641],[-79.95493412017824,40.425535756346264],[-79.955792427063,40.42645048993864],[-79.95652198791505,40.42658116515058],[-79.95944023132326,40.429047612154825],[-79.9578094482422,40.4300276322111],[-79.95379686355592,40.42605846277947],[-79.95493412017824,40.425535756346264],[-79.95373249053956,40.42452300107238],[-79.95328187942506,40.423738922000645],[-79.95090007781984,40.41893623825741],[-79.95066404342653,40.4182991217984],[-79.9508571624756,40.41635506249118],[-79.95021343231203,40.414247573404246],[-79.9488401412964,40.41231973488292],[-79.94789600372316,40.41075128313748],[-79.94523525238039,40.4112087520061],[-79.94472026824953,40.40841487577552],[-79.94697332382204,40.40781033758519],[-79.94643688201904,40.406568566432306],[-79.94160890579225,40.40736918466787],[-79.94270324707033,40.41075128313748],[-79.94193077087404,40.41091466523327],[-79.94169473648073,40.41127410444777],[-79.94163036346437,40.41155185161675],[-79.94184494018556,40.4119766391873],[-79.94431257247926,40.41666546228339],[-79.9450421333313,40.41735160411116],[-79.94660854339601,40.41885455699726],[-79.94823932647706,40.4207985440818],[-79.9482822418213,40.421370294298534],[-79.94856119155885,40.421598993024574],[-79.94935512542726,40.4221870718929],[-79.95081424713136,40.424081957719146],[-79.95109319686891,40.42460467545006],[-79.95109319686891,40.42502938061542],[-79.95094299316408,40.42516005858834],[-79.95008468627931,40.425486752409896],[-79.94990095496178,40.42557046744627],[-79.94984194636346,40.42561947132165],[-79.94984731078148,40.4256664333354],[-79.95003774762155,40.42564397324597],[-79.95087996125223,40.42545612493153],[-79.95190724730492,40.42496199968643],[-79.95206013321878,40.424933413817385],[-79.95210304856302,40.425060008288106],[-79.95212987065317,40.42517026779427],[-79.95206817984582,40.42525398322455],[-79.9519394338131,40.42560517852838],[-79.95106235146524,40.426515827576345],[-79.95088800787926,40.426673046006954],[-79.95077535510063,40.42668325498325],[-79.95071902871133,40.42675267598096],[-79.95055273175242,40.42701606676179],[-79.94962736964226,40.42809820410657],[-79.94935110211374,40.42844121759296],[-79.94945570826532,40.428953692816194],[-79.94976684451105,40.42924974246043],[-79.94987413287164,40.434045565130745],[-79.94960054755212,40.43652807035294],[-79.94983926415445,40.438802258670336],[-79.94992509484292,40.43923912266282],[-79.94991704821588,40.439673942415865],[-79.94987949728966,40.43992707562481],[-79.94972124695778,40.440290442597366],[-79.94935378432275,40.44082528254573],[-79.94931086897851,40.44123559580494],[-79.94868859648706,40.4421194959592],[-79.94760766625404,40.44327691807928],[-79.94658038020134,40.44486298269137],[-79.94650796055794,40.44511813759635],[-79.94656160473825,40.44546718793752]]

var list = [[-79.9506761133671, 40.42687722523843]];

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