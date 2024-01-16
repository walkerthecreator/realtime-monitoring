import './style.css'
import {io} from "socket.io-client"
const input = document.querySelector("input");
const form = document.querySelector("form") ;
const status = document.querySelector('#status') ;
const monitor = document.querySelector('.monitor')
const ul = document.querySelector("#messages")

const socket = io("http://localhost:3000") ;


socket.on("connect" , function (client){
  status.innerHTML = socket.id

  socket.on("chat" , ( msg ) => {
      const li = document.createElement("li")
      li.innerHTML = msg
      ul.appendChild(li)
    })

  socket.on("monitoring" , (data)=>{
    monitor.innerHTML = data
  })

  form.addEventListener("submit" , function (e){
    e.preventDefault() ;
    // sending server that we added a message 
    socket.emit("chat" , input.value )
    input.value = ""
  })
 
  socket.on("disconnect" , function (){
    console.log("disconnected from server")
  })

})