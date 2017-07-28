const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

let ping = null

app.get('/', (req, res) => {
  res.send('Hello')
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('stopInterval', (data) => {
    console.log(`Message from frontEnd: ${data.message}`)
    clearInterval(ping)
  })

  socket.on('startInterval', (data) => {
    console.log(`Message from frontEnd: ${data.message}`)
    ping = setInterval(() => {
      socket.emit('ping', { data: (new Date())/1})
    }, 1000)
  })
})

server.listen(port, () => {
  console.log(`listening on: ${port}`)
})
