var data;
var grossCon;
var totalWind;
var dateCol;

var index = 0;

var minWind;
var maxWind;
var minCon;
var maxCon;

// preload table data
function preload() {
  data = loadTable(
    'data/cleaned-electricity.csv',
    'csv',
    'header');
}

function setup() {

  createCanvas(800, 800);
  background(0);
  dateCol = data.getColumn("HourDK");
  totalWind = data.getColumn("TotalWind");
  grossCon = data.getColumn("GrossCon");
  print(totalWind);
  print(grossCon);

  minWind = min(totalWind);
  maxWind = max(totalWind);
  print(minWind);
  print(maxWind);

  minCon = min(grossCon);
  maxCon = max(grossCon);
  print(minCon);
  print(maxCon);
}

function draw() {}

function mousePressed() {
  console.log("yes");
  index++;
  if (index >= grossCon.length - 1) {
    index = 0;
  }
  background(0);
  console.log(index);
  var mapTW = map(totalWind[index], minWind, maxWind, 0, width / 4);
  var mapTC = map(grossCon[index], minCon, maxCon, 0, width / 4);
  fill(0, 0, 255, 100);
  ellipse(width / 2, height / 2, mapTW, mapTW);
  fill(255, 0, 0, 100);
  ellipse(width / 2, height / 2, mapTC, mapTC);
 fill(255);
  text(dateCol[index], 10, 10);

}