import {createWriteStream} from 'fs'

console.log('child process')

const writeStream = createWriteStream('std.txt')

process.stdin.on('data', (chunk) => {
    writeStream.write(chunk)
})