function verbData() {
  $('#verb').text('Extrapolating');

  setInterval(function () {
    var verbChoices = ['Extrapolating', 'Investigating', 'Receiving', 'Coordinating', 'Squeezing', 'Speculating', 'Philosophizing', 'Adulterating', 'Abominating', 'Examining', 'Shedding Light', 'Collaborating', 'Simulating', 'Constructing', 'Compressing', 'Compiling', 'Extracting', 'Stretching'];
    $('#verb').text(verbChoices[rand(0, verbChoices.length - 1)]);
  }, 5000);

  setInterval(function () {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var text = $('#data').text();
    var randNum = rand(0, chars.length - 1);
    var newText = text.substring(1, text.length) + chars.substring(randNum, randNum + 1);
    $('#data').text(newText);
  }, 50);
}
