function animateTo (thing, x, y, time, complete) {
  var props = {x: x, y: y, onComplete: complete};
  if (!complete) delete props.onComplete;
  TweenMax.to(thing.translation, time, props);
}

function rand (min, max) {return Math.floor(Math.random() * (max - min) + min);}

$(document).ready(function () {
  coorder();
  verbData();
  grapher();
  foreverGrid();
  matrix();
  sineWaver();
});
