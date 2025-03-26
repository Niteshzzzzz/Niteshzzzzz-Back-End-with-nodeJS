import net from 'node:net'

const socket = net.createConnection({host:'172.21.208.1', port: 4000})

process.stdin.on('data', (input) => {
    socket.write(input)
})

socket.on('error', () => {
    console.log('Server Lost!')
})

socket.on('data', chunk => {
    console.log(chunk.toString())
})
