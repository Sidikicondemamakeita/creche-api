import { Body } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from "socket.io";


@WebSocketGateway(
{
  cors:{
    origin:'*'
  }
}
)
export class SocketGateway {
  @WebSocketServer()
  server: Server


  CreatRoom(data: string, client: Socket){
    client.join(data)
    return{event: 'message', room:'room'}
 }

//connexion
 handleConnection(client: Socket){
  this.CreatRoom("room", client)
  console.log(`client connected :${client.id}`);
 }

 // receive event
@SubscribeMessage('message')
handleEvent(@MessageBody() data: string, room:string, @ConnectedSocket() client: Socket){
  this.server.emit('message', client.id, {room: room, message: data})
  console.log(`data ${data}, room ${room}`);
}


 // Deconnexion
 handleDisconnect(client: Socket){
  console.log(`client disconnected: ${client.id}`);
 }
}
