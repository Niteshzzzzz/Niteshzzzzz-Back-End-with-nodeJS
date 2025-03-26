import fs from 'fs'

const fd = fs.openSync('text.txt') // fd means file descriptor

const newBuffer = Buffer.alloc(10)

// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)
console.log(fd)

fs.read(fd,{
    buffer: newBuffer,
    position: 2,
    length: 8,
    offset: 2,
} , (err, bytesRead, bufferData) => {
    console.log(bytesRead)
    console.log(bufferData.toString())
    console.log(bufferData)
})
