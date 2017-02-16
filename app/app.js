var socket = io();

function moveForward() {
  socket.emit('forward');
}

function turnRight() {
  socket.emit('right');
}

function turnLeft() {
  socket.emit('left');
}

function moveReverse() {
  socket.emit('reverse');
}

function stop() {
  socket.emit('stop');
}

function leftWheel() {
  socket.emit('left-wheel');
}

function rightWheel() {
  socket.emit('right-wheel');
}

function off() {
  socket.emit('off');
}

function onForward() {
  socket.emit('on-forward');
}

document.getElementById('forward').onclick = moveForward;
document.getElementById('right').onclick = turnRight;
document.getElementById('left').onclick = turnLeft;
document.getElementById('reverse').onclick = moveReverse;
document.getElementById('stop').onclick = stop;
document.getElementById('left-wheel').onclick = leftWheel;
document.getElementById('right-wheel').onclick = rightWheel;
document.getElementById('off').onclick = off;
document.getElementById('on-forward').onclick = onForward;
