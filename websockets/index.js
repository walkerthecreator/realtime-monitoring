const io = require("socket.io")

const socket = io(3000 , {
    cors : {
        origin : ["http://localhost:5173"]
    }
})

function monitoring(){
    const data = Math.ceil(Math.random() * 10 )
    return data
}

socket.on('connection', (client) => {
    console.log(client.id)

    setInterval( ()=>{
        const data = monitoring()
        // console.log(data)
        socket.emit("monitoring" , data )
    } , 1000 )

    client.on("chat" , (msg) => {
        socket.emit("chat" , msg )
    })
})

