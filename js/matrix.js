function matrix () {
  var m = document.getElementById('matrix');
  var width = m.width;
  var height = m.height;
  var letters = Array(256).join(1).split('');

  function draw () {
    m.getContext('2d').fillStyle = 'rgba(0, 0, 0, 0.05)';
    m.getContext('2d').fillRect(0, 0, width, height);
    m.getContext('2d').fillStyle = '#0F0';
    letters.map(function (yPos, index) {
      text = String.fromCharCode(3e4 + Math.random() * 33);
      xPos = index * 10;
      m.getContext('2d').fillText(text, xPos, yPos);
      letters[index] = (yPos > 758 + Math.random() * 1e4) ? 0 : yPos + 10;
    });
  }
  setInterval(draw, 33);
}
