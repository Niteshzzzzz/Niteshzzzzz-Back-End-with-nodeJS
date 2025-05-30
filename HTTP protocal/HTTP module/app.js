import { createReadStream } from 'node:fs'
import http from 'node:http'

const server = http.createServer((req, res) => {
   
    if (req.url === '/') {
        const readStream = createReadStream('./public/index.html')
        readStream.pipe(res)
    } else if(req.url === '/favicon.ico') {
        const readStream = createReadStream('./public/seo.png')
        readStream.pipe(res)
    }
    else {
        const readStream = createReadStream(`./public${req.url}`)
        readStream.pipe(res)
        readStream.on('error', (err) => {
            res.end('Page not found.')
            console.log(err)
        })
    }
    
})

server.listen(4000, '0.0.0.0', () => {
    console.log('server listening on port 4000')
})