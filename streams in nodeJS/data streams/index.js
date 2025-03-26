import {spawn} from 'child_process'

const childProcess = spawn('node', ['child.js'])

childProcess.stdout.on('data', (chunk) => {
    console.log(chunk.toString())
})

childProcess.stdin.write('writing in child process.')