import fs  from 'fs'

console.time()

const readStream = fs.createReadStream("D:\\Iron Man 3 (2013) 720p Hindi English Vegamovie.NL.mkv")
const writeStream = fs.createWriteStream('iron-man.mp4')

readStream.pipe(writeStream)

// setTimeout(() => {
//     readStream.unpipe(writeStream)
// }, 1200)

// readStream.on('data', (chunk) => {
//     const isEmpty =writeStream.write(chunk)
//     if (!isEmpty) {
//         readStream.pause()
//     }
// })

// writeStream.on('drain', () => {
//     readStream.resume();
// })

// writeStream.end()
// writeStream.on('finish', () => {
//     console.log('write stream is finished')
// })
// writeStream.on('close', () => {
//     console.log('write stream is closed')
// })

readStream.on('end', () => {
    console.timeEnd()
})