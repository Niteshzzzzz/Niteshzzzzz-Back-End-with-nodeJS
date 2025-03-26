import net from 'node:net'

let socketList = []

process.stdin.on('data', input => {
    const [Index, message] = input.toString().split(" ")
    
    const userIndex = parseInt(Index)
    if(typeof userIndex == 'number'){
        socketList[userIndex].write(message)
    } else {
        socketList.forEach(socket => {
            socket.write(input)
        })
    }
})

const server = net.createServer((socket) => {

    socketList.push(socket)
    console.log(socketList.length)

    socket.on('data', chunk => {
        console.log(chunk.toString())
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
