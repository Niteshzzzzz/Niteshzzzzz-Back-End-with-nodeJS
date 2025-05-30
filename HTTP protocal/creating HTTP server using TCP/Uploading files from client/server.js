import { createReadStream } from 'node:fs'
import net from 'node:net'

const server = net.createServer((socket) => {

    socket.write('HTTP/1.1 200 OKAY')
    socket.write('\n\n')
    // socket.end()
    // readStream.pipe(socket)
    // readStream.on('end', () => console.log('file ended.'))
    
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
