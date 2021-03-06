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
  var mapTW = map(totalWind[index], minCon, maxCon, 10, width / 8);
  var mapTC = map(grossCon[index], minCon, maxCon, 10, width / 8);
  noStroke();
   fill(255, 212, 108);
  ellipse(475, height / 2, mapTW, mapTW);
 fill(0, 158, 168);
  ellipse(250, height / 2, mapTC, mapTC);
 fill(0,23,47);
 textFont('Open Sans');
 textSize(20);
   textSize(45);
  text(percentage[index], 130, 230);
  text("at", 240, 230)
  text(dateCol[index], 300, 230);
   textSize(25);
  text("How much of Denmark's energy\ndemand is met by wind power in a day?", 130, 110);
   textSize(15);
  text("total energy demand", 410, 570);
   textSize(15);
  text("wind energy produced", 175, 570);
   textSize(10);
  text("*data from 2018-06-30", 130, 620)

}