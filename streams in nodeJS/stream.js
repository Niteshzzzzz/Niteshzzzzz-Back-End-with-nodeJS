import { error } from 'console'
import fs from 'fs'

const readStream = fs.createReadStream('hello.txt', {highWaterMark: 4})

readStream.setEncoding('utf-8')

readStream.on('data', (chunk) => {
    console.log(chunk)
    readStream.destroy('error')
})

// readStream.on('readable', () => {
//     // console.log(readStream.readable)
//     console.log(readStream.readableLength)
//     console.log(readStream.read(3))
//     console.log(readStream.readableLength)
// })

readStream.on('close', () => {
    console.log("Strem closed")
})
readStream.on('end', () => {
    console.log("Strem ended!")
})
readStream.on('error', (err) => {
    console.log(err)
})
