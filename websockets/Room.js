 class Client{

    // clientId
    clientName
    socketId

    constructor(id , count){
        // this.clientId = id 
        this.clientName = `client ${count}`
        this.socketId = id
    }
}

 class Manager {
     totalClient
     clients

    constructor(){
        this.clients = new Map()
        this.totalClient = 0
    }

    addNewClient(id , name){
        this.clients.set(id , name)
        this.totalClient += 1 
        return "added a new client "
    }

    getClientName(id){
        return this.clients.get(id)
    }

    printStore(){
        this.clients.forEach((item) => {
            console.log("item name " , item)
        })
    }
}

module.exports = { Manager , Client }

