import dgram from 'node:dgram' 

const socket = dgram.createSocket('udp4')

socket.on('message', (message, remoteAddress) => {
    console.log(message.toString())
    console.log(remoteAddress)
    socket.close()
})

socket.send("Hii from laptop.", 4000, '192.168.73.125')