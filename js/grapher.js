function grapher () {
  var elem = document.getElementById('randGraph');
  var params = { width: 360, height: 120, autostart: true };
  var two = new Two(params).appendTo(elem);


  //make the x axis tick marks
  for (var i = 1; i < 25; i++) {
    var xPixelUnit = 360 / 25;
    var xTick = two.makeLine(xPixelUnit * i, 110, xPixelUnit * i, 120);
    xTick.stroke = '#0B731E';
    xTick.linewidth = 1;
  }

  //make the y axis tick marks
  for (var j = 1; j < 8; j++) {
    var yPixelUnit = 120 / 8;
    var yTick = two.makeLine(0, yPixelUnit * j, 10, yPixelUnit * j);
    yTick.stroke = '#0B731E';
    yTick.linewidth = 1;
  }



  var xPos = 2;
  var yPos = rand(1, 7);
  var lines = [];

  setInterval(function () {
    var xIncrement = 14.4;
    var yIncrement = 15;

    if(xPos === 25) {
      two.remove(lines);
      xPos = 2;
      yPos = rand(1, 7);
      lines = [];
    }

    var randInt = rand(1, 7);

    var line = two.makeLine((xPos - 1) * xIncrement, yPos * yIncrement, xPos * xIncrement, randInt * yIncrement);
    line.stroke = '#0B731E';

    if (yPos - randInt >= 5 || yPos - randInt <= -5) line.stroke = '#FB731E';


    lines.push(line);
    yPos = randInt;
    xPos++;

  }, 100);
}
