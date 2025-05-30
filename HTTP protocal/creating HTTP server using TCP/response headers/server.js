// import { createReadStream } from 'node:fs'
import { open } from 'node:fs/promises'
import net from 'node:net'

const server = net.createServer( async (socket) => {

    const fileHandle = await open("C:\\Users\\ASUS\\Downloads\\The.Beekeeper.2024.1080p.10Bit.BluRay.Hindi.2.0-English.5.1.HEVC.x265-HDHub4u.Tv.mkv")
    const readStream = fileHandle.createReadStream()
    const { size } = await fileHandle.stat()
    socket.write('HTTP/1.1 200 OKAY\n')
    // socket.write('Access-Control-Allow-Origin:*\n')
    // socket.write('Access-Control-Expose-Headers:*\n')
    socket.write(`Content-Length: ${size}\n`)
    // socket.write('Content-Disposition: inline\n')
    socket.write('Content-Disposition: attachment; filename=Beakeeper.mp4\n')
    // socket.write('Content-Type: image/jpg')
    // socket.write('Content-Type: application/pdf')
    socket.write('Content-Type: video/mp4')
    // socket.write('Content-Type: application/json')
    // socket.write('Content-Type: text/txt; charset=utf-8')
    socket.write('\n\n')
    // readStream.pipe(socket)
    readStream.on('data', chunk => {
        socket.write(chunk)
        // readStream.pause()
        // setTimeout(() => {
        //     readStream.resume()
        // }, 10)
    })

    readStream.on('pause', () => {
        console.log('Stream paused by browser')
    })
    readStream.on('resume', () => {
        console.log('Stream resumed by browser.')
    })

    // socket.write('{"name": "Nitesh kumar"}')
    // socket.end()
    readStream.on('end', () => console.log('file ended.'))
    
    socket.on('data', chunk => {
        console.log(chunk.toString())
        // socket.write('HIi')
        // socket.end()
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
