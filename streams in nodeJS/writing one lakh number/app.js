import fs from 'fs'

console.time()

const fd = fs.openSync('number.txt', 'w');

for (let i = 0; i <= 100000; i++) {
    fs.writeSync(fd,`${i}, `) 
}

fs.closeSync(fd)

console.timeEnd()