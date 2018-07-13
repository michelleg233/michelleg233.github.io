var data;
var grossCon;
var totalWind;
var dateCol;
var percentage;

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
  background(245, 244, 246);
  dateCol = data.getColumn("HourDK");
  percentage = data.getColumn("PerPower ");
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
  background(245, 244, 246);
  console.log(index);
  var mapTW = map(totalWind[index], minWind, maxWind, 0, width / 4);
  var mapTC = map(grossCon[index], minCon, maxCon, 0, width / 4);
  noStroke();
  fill(0, 158, 168);
  ellipse(250, height / 2, mapTW, mapTW);
  fill(255, 212, 108);
  ellipse(475, height / 2, mapTC, mapTC);
 fill(0,23,47);
 textFont('Open Sans');
 textSize(20);
  text(dateCol[index], 130, 70);
   textSize(75);
  text(percentage[index], 130, 155);
   textSize(25);
  text("of Denmark's energy demand met by wind", 130, 200);
   textSize(15);
  text("total energy demand", 170, 550);
   textSize(15);
  text("wind energy produced", 420, 550);

}