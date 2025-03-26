import {Buffer} from 'buffer'
import fs from 'node:fs/promises'
// const a = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
// const view = new DataView(a)
// for (let i = 0; i < view.byteLength; i++) {
//     view.setInt8(i,i)    
// }
// console.log(view)

const myBuffer = Buffer.alloc(4);
const myBuffer1 = Buffer.allocUnsafe(4);
const myBuffer2 = Buffer.from('abs');

const b = await fs.readFile('favicon\\android-chrome-512x512.png');
console.log(b.toString('base64'))

console.log(myBuffer)
console.log(myBuffer1)
console.log(myBuffer2)
