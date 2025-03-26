import net from 'node:net'

const socket = net.createConnection({host:'172.21.208.1', port: 4000})

socket.on('error', () => {
    console.log('Server Lost!')
})

setTimeout(() => {
    socket.write("Hii from client")
    socket.end()
}, 2000)

socket.on('data', chunk => {
    console.log(chunk.toString())
})
