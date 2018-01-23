var clock = $('.your-clock').FlipClock(120, {
  clockFace: 'MinuteCounter',
  countdown: true
});

var randomColor = Math.floor(Math.random()*16777215).toString(16);

var hexArray = ['#hexVal','#hexVal','#hexval', '#hexval']
var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

$("#color").css("color",randomColor);
