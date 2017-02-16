var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(3000));
var five = require('johnny-five');

//Setting the path to static assets
app.use(express.static(__dirname + '/app'));

//Serving the static HTML file
app.get('/', function(res) {
  res.sendFile('/index.html')
});

var board = new five.Board({
  repl: false
});

board.on('ready', function() {
  console.log('board ready');

  var speed, commands, motors;
  motors = {
    a: new five.Motor([3, 12]),
    b: new five.Motor([11, 13])
  };

  commands = null;
  //speed = 255;

  speed = 120;
  motors.a.rev(speed);
  motors.b.rev(speed);
  motors.a.stop();
  motors.b.stop();

  io.on('connection', function(socket) {

    socket.on('stop', function() {
      console.log('stop');
      motors.a.stop();
      motors.b.stop();
    });

    socket.on('forward', function() {
      console.log('forward');
      speed = 150;
      motors.a.fwd(speed);
      motors.b.fwd(speed);
    });

    socket.on('reverse', function() {
      console.log('reverse');
      speed = 120;
      motors.a.rev(speed);
      motors.b.rev(speed);
    });

    socket.on('left', function() {
      console.log('left');
      var aSpeed = 220;
      var bSpeed = 50;
      motors.a.fwd(aSpeed);
      motors.b.rev(bSpeed);
    });

    socket.on('right', function() {
      console.log('right')
      var aSpeed = 50;
      var bSpeed = 220;
      motors.a.rev(aSpeed);
      motors.b.fwd(bSpeed);
    });

    socket.on('off', function() {
      console.log('off');
      speed = 120;
      motors.a.rev(speed);
      motors.b.rev(speed);
      motors.a.stop();
      motors.b.stop();
    });

    socket.on('on-forward', function() {
      console.log('on-forward');
      speed = 120;
      motors.a.rev(speed);
      motors.b.rev(speed);
      speed = 150;
      motors.a.fwd(speed);
      motors.b.fwd(speed);
      motors.a.stop();
      motors.b.stop();
    });

    socket.on('left-wheel', function() {
      console.log('left-wheel');
      speed = 120;
      motors.a.rev(speed);
      motors.b.rev(speed);
      motors.a.stop();
      motors.b.stop();
      speed = 150;
      motors.a.fwd(speed);
      motors.b.fwd(speed);
      var aSpeed = 220;
      var bSpeed = 50;
      motors.a.fwd(aSpeed);
      motors.b.rev(bSpeed);
      motors.a.stop();
      motors.b.stop();
    });

    socket.on('right-wheel', function() {
      console.log('right-wheel');
      speed = 120;
      motors.a.rev(speed);
      motors.b.rev(speed);
      motors.a.stop();
      motors.b.stop();
      speed = 150;
      motors.a.fwd(speed);
      motors.b.fwd(speed);
      var aSpeed = 50;
      var bSpeed = 220;
      motors.a.rev(aSpeed);
      motors.b.fwd(bSpeed);
      motors.a.stop();
      motors.b.stop();
    });
  });
});
