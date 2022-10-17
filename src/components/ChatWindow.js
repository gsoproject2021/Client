import {Box, Typography,IconButton, TextField, Button} from "@mui/material";
import { ExitToApp,  LastPageSharp,  SendOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid"
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import {  useContext, useEffect, useRef, useState } from "react";

import { roomsActions } from "../store/room-slice";
import { blueGrey } from "@mui/material/colors";

import { SocketContext } from "../context/SocketContext";
import { removeUserFromRoom } from "../store/cache-actions";

const useStyles = makeStyles({
    title:{
        display:'flex',
        justifyContent:'space-between',
        padding:16,
        color:blueGrey[100],
        backgroundColor:blueGrey['900']
    },
    messages:{
        width:'100%',
        height:'80%',
        backgroundColor:blueGrey[700],
        marginBottom:25,
        overflow: 'auto'
        
    },
    chatInput:{
        display:'flex',
        marginLeft:6,
        marginRight:6,
        
        backgroundColor:blueGrey[800]
    }
})

export default function ChatWindows({isCurrentRoomAdmin}){
    const lastMessage = useRef()
    const rooms = useSelector(state => state.rooms.rooms);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const user = useSelector( state => state.user.data);
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    const [myMessage,setMyMessage] = useState('');
    const socket = useContext(SocketContext);
    const publicRoomData = useSelector(state => state.rooms.publicRoomData);

    const sendHandler = () => {
        let messageObj = {
            messageId: uuidv4(),
            senderId: user.userId,
            sender: user.firstName,
            content: myMessage,
            roomId: currentRoom.roomId,
            time: new Date().toISOString(),
            roomType: currentRoom.type,

        }
        
        socket.emit("message",messageObj);
        dispatch(roomsActions.newMessage(messageObj))
        setMyMessage('');
    }

    const leaveRoomHandler = () => {
        dispatch(removeUserFromRoom(user.userId,currentRoom,user.userId,token))
    }

    const showMessages = (mes) => {
        let time = mes.time.split("T");
        let hour = time[1].slice(0,5);
       return <Message key={mes.messageId} sender={mes.sender} time={hour} message={mes.content} senderId={mes.senderId} />
    }

    const classes = useStyles();
    return(
        <Box sx={{width:'100%',height:'100vh',bgcolor:blueGrey[800]}}>
            <Box  className={classes.title}>
                <Typography variant="h4" gutterBottom> {currentRoom.roomName} </Typography>
                {!isCurrentRoomAdmin?<> {!user.isAdvertiser?<IconButton onClick={leaveRoomHandler} sx={{color:blueGrey[100]}}>
                    <ExitToApp/>
                </IconButton>:null}</> : null}
            </Box>
            <Box  className={classes.messages}>      
                 {currentRoom.messages.map(showMessages)||<div></div>}   
            </Box>
            <Box className={classes.chatInput}>
                <TextField sx={{backgroundColor:blueGrey[100],mx:2}} fullWidth onChange={(e) => setMyMessage(e.target.value)} value={myMessage}/>
                <Button sx={{ml:2}} variant="contained" onClick={sendHandler}  ><SendOutlined/></Button>
            </Box>
        </Box>
    );
}