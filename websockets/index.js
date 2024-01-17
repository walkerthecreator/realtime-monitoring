const io = require("socket.io")
const { Manager , Client } = require("./Room.js")

const socket = io(3000 , {
    cors : {
        origin : ["http://localhost:5173"]
    }
})

function monitoring(){
    const data = Math.ceil(Math.random() * 10 )
    return data
}

const store = new Manager()

socket.on('connection', (client) => {
    

    const newClient = new Client(client.id , store.totalClient )

    store.addNewClient(newClient.socketId , newClient.clientName)


    // setInterval( ()=>{
    //     const data = monitoring()
    //     socket.emit("monitoring" , data )
    // } , 1000 )

    client.on("chat" , (msg) => {
        socket.emit("chat" , msg )
    })

    client.on("ping" , ( user )=>{

        const senderName = store.getClientName(client.id )

        if(client.id == user) socket.emit(`${ senderName } pinged you `)
        // if(client.id == user) console.log("whi") 
        
    })
})

