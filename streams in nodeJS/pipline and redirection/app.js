process.stdin.on('data', (chunk) => {
    console.log("app.js: ",chunk.toString())
})