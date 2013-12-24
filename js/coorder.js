function coorder () {
  var elem = document.getElementById('randCoords');
  var params = { width: 210, height: 210, autostart: true };
  var two = new Two(params).appendTo(elem);


  var xLine = two.makeLine(0, 0, 0, 210);
  xLine.linewidth = 1.5;
  xLine.stroke = '#0B731E';
  xLine.opacity = 1;

  var yLine = two.makeLine(0, 0, 210, 0);
  yLine.linewidth = 1.5;
  yLine.stroke = '#0B731E';
  yLine.opacity = 1;



  function animLinesCoord(x,y) {
    TweenMax.to(xLine.translation, 1, {x: x});
    TweenMax.to(yLine.translation, 1, {y: y});
    function leaveDot () {
      var dot = two.makeRectangle(x, y, 2, 2);
      dot.fill = '#FB731E';
      dot.linewidth = 0;
      allDots.push(dot);
    }
    setTimeout(leaveDot, 1000);
  }

  var allDots = [];
  setInterval(function () {
    animLinesCoord(rand(0, 210), rand(0, 210));
    if (allDots.length === 200) {
      for (var i = 0; i < allDots.length; i++) {two.remove(allDots[i]);}
      allDots = [];
    }
  }, 1000);
}
