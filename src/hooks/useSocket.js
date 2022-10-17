import axios from "axios"
import { useCallback, useEffect, useState } from "react";
import { roomsActions } from "../store/room-slice";
import { useDispatch } from "react-redux";



 const useSocket = (socket,rooms)=>{
    const dispatch = useDispatch()
   
   const emitHandler = useCallback((event,data) => {
      socket.emit(event,data);
   },[socket])

   useEffect(() => {
    socket.connect();

    socket.emit("userRooms", rooms);

    socket.on("userConnected",(data) => {
       console.log(data);
       dispatch(roomsActions.isUserOnline(data));
    });

    // socket.emit("newMessage",newMessage);


    socket.on("newMessage", data => {
      console.log(data);
    })
    
    


   },[socket,rooms,dispatch])

   return emitHandler;
}

export default useSocket;