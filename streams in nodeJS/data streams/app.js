import fs from 'fs'
// console.log(process.stdin)
// console.log(process.stdout)
// console.log(process.stderr)
// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)

// process.stdout.write('hii')

const writeStream = fs.createWriteStream('std.txt')

process.stdin.on('data', (chunk) => {
    writeStream.write(chunk)
})
