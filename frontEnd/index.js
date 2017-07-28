(function() {
  var socket = io.connect('http://localhost:3000');

  socket.on('connect', function(data) {
    socket.emit('join', 'Client is connected!');
  });

  socket.on('ping', function(data) {
    console.log('the date: ', data)
    document.getElementById('date').innerHTML = '<p>' + data.data + '<p>';
  });

  function stopPing(message, e) {
    console.log('Button stop clicked')
    socket.emit('stopInterval', {message: message})
  }

  function startPing(message, e) {
    console.log('Button start clicked')
    socket.emit('startInterval', {message: message})
  }

  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  buttonStart.addEventListener('click', startPing.bind(null, 'Starting'))
  buttonStop.addEventListener('click', stopPing.bind(null, 'Stopping'))
}());
