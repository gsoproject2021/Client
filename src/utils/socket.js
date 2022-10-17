import { io } from "socket.io-client";

 const socketConn = (token) =>  io('http://localhost:4000',{
    autoConnect:false,
    withCredentials: true,
    auth: {
        token: token,
    },

});



export default socketConn;