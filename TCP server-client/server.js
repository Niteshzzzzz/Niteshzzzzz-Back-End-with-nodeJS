import net from 'node:net'

const server = net.createServer((socket) => {

    socket.on('data', chunk => {
        console.log(chunk.toString())
        socket.write('http\n\nMessage received successfully.')
        socket.end()
    })


    socket.on('close', () => {
        console.log(socket.remoteAddress, 'client disconnected.')
    })

    socket.on('error', () => {
        console.log('Client Lost')
    })

    console.log('client connected', socket.remoteAddress)
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Listening on port 4000')
})
