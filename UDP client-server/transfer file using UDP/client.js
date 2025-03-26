import dgram from 'node:dgram'
import { createReadStream } from 'node:fs'
import { readFile } from 'node:fs/promises'

const socket = dgram.createSocket('udp4')

socket.on('message', (message, remoteAdress) => {
    console.log(message.toString())
    socket.close()
})

// const dataBuffer = await readFile("D:\\Snapchat-545996025.mp4")
const readStream = createReadStream("D:\\Snapchat-545996025.mp4", {highWaterMark: 1000})

readStream.on('data', (chunk) => {
    socket.send(chunk, 4000, '192.168.217.97')
})


readStream.on('end', () => {
    socket.send('EOF', 4000, '192.168.217.97')
    
})