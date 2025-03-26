import fs from 'fs'

const readStrem = fs.createReadStream('hello.txt', {highWaterMark: 4})

readStrem.on('data', (chunk) => {
    let {bytesRead, readableHighWaterMark} = readStrem;
    if(bytesRead == readableHighWaterMark){
        fs.writeFileSync('chars.txt', chunk);
    } else {
        fs.appendFileSync('chars.txt', chunk);
    }
    readStrem.pause()
    setTimeout(() => {
        readStrem.resume()
    }, 200)
})

readStrem.on('pause', () => {
    console.log('streams paused')
})

readStrem.on('resume', () => {
    console.log('streams resumed')
})

// console.log(readStrem.readableFlowing)
// console.log(readStrem.readableEnded)
// console.log(readStrem.isPaused())

readStrem.on('end', () => {
    console.log(readStrem.readableFlowing)
    console.log(readStrem.readableEnded)
    console.log(readStrem.isPaused())
})