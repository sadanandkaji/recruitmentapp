
import { WebSocketServer } from "ws"
import {client} from "@repo/db/client"


const server =new WebSocketServer({
    port:3002
})


server.on("connection" , (socket)=>{

   
  
    socket.send("hi there you are connected")
})