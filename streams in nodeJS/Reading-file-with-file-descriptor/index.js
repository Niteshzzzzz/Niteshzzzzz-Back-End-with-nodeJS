import fs from 'fs'
// file opening modes
// 'r' = read mode
// 'w' = write mode
// 'w+' = write and read both mode(if file is not present then it create file)
// 'r+' = write and read both mode(if file is not present then it show the error)

const fd = fs.openSync('text.txt', 'w')
const buff = Buffer.from('123')

// fs.write(fd, 'abcdefgh', (err, bytesLength, writtenData) => {
//     console.log(bytesLength)
//     console.log(writtenData)
// } )

fs.write(fd, buff, (err, bytesLength, writtenData) => {
    console.log(bytesLength)
    console.log(writtenData)
} )