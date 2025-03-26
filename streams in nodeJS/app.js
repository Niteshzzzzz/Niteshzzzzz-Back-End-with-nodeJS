import fs from 'fs'

// fs.writeFile('hello.txt', 'Hello', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })

console.time()

let streaCount = 0

const readStream = fs.createReadStream("D:\\Iron Man 3 (2013) 720p Hindi English Vegamovie.NL.mkv", {highWaterMark: 100 * 1024 * 1024})

readStream.on('data', (chunk) => {
    streaCount++;
    fs.appendFileSync('iron-man.mp4', chunk)
})

readStream.on('end', () => {
    console.log(streaCount)
    console.timeEnd()
})