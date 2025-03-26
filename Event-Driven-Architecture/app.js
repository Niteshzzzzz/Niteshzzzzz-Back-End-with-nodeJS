import eventEmmiter from 'events'

const emitter = new eventEmmiter()

emitter.on("abc", () => {
    console.log("abc event is fired 1")
})

emitter.on("abc", () => {
    console.log("abc event is fired 2")
})

emitter.on("x", () => {
    console.log("x event is fired 2")
})



emitter.emit('abc')
emitter.emit('x')