import crypto from 'node:crypto'

const salt = crypto.randomBytes(16)

console.log(salt.toString('hex'))

crypto.pbkdf2('Nitesh123@', 'my_salt', 100000, 32, 'sha256', (err, data) => {
    if (err) {
        console.log(err)
    } else{
        console.log(data.toString('hex'))
    }
})