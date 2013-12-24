function sineWaver () {
  var elem = document.getElementById('sineWaver');
  var params = { width: 210, height: 150, autostart: true };
  var two = new Two(params).appendTo(elem);

  var origin = { //origin of axes
      x: 0,
      y: 75
  };

  var amplitude = 75; // wave amplitude
  var rarity = 1;     // point spacing
  var freq = 0.05;    // angular frequency
  var phase = 0;      // phase angle
  var groupList = [];

  for (var i = 0; i < 500; i++) {
      rect = two.makeRectangle(i * rarity + origin.x, Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y, 1, 1);
      rect.fill = '#0B731E';
      rect.stroke = '#0B731E';

      y = Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y;
      if (y < 5 || y > 145) {rect.fill = '#FB731E'; rect.stroke = '#FB731E';}

      groupList.push(rect);
  }


  wave = two.makeGroup(groupList);
  TweenMax.to(wave.translation, 1, {repeat: -1, x: -125, ease: Linear.easeNone});

  two.update();
}
