swal({
  title: 'Emergency Alert!',
  text:
    'BALLISTIC MISSILE INBOUND. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL.',
  icon: 'warning',
  button: 'Ok, I want to see what to do until then!'
});

var clock = $('.your-clock').FlipClock(420, {
  clockFace: 'MinuteCounter',
  countdown: true
});

var randomColor = Math.floor(Math.random() * 16777215).toString(16);

var hexArray = ['#hexVal', '#hexVal', '#hexval', '#hexval'];
var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

$('#color').css('color', randomColor);

// alert(
//   'Emergency Alert!\nEmergency Alert\nBALLISTIC MISSILE INBOUND. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL'
// );
