import dgram from 'node:dgram' // UDP

const socket = dgram.createSocket('udp4');

socket.on('message', (message, remoteAddress) => {
    console.log(message.toString())
    console.log(remoteAddress)
    socket.send("Messaage recieved successfully.", remoteAddress.port, remoteAddress.address)
})

socket.bind(4000, '192.168.73.125', () => {
    console.log(`Listeninig on port number ${socket.address().port}`)
})