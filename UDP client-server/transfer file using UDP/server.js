import dgram from 'node:dgram'
import { createWriteStream } from 'node:fs'
import { writeFile } from 'node:fs/promises'

const socket = dgram.createSocket('udp4')

const writeStream = createWriteStream('my.mp4')
socket.on('message', async (message, remoteAdress) => {

    if (message.toString() == 'EOF') {
        socket.send('Message received successfully.', remoteAdress.port, remoteAdress.address)   
    } else {
        writeStream.write(message) 
    }

})

socket.bind(4000, '192.168.217.97', () => {
    console.log(`Listening on port number ${socket.address().port}`)
})