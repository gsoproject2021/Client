import {Box, Typography,IconButton, TextField, Button} from "@mui/material";
import { ExitToApp,  SendOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../utils/socket";
import { roomsActions } from "../store/room-slice";
import { blueGrey } from "@mui/material/colors";

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
        marginBottom:25
        
    },
    chatInput:{
        display:'flex',
        marginLeft:6,
        marginRight:6,
        
        backgroundColor:blueGrey[800]
    }
})

export default function ChatWindows(){
    const socket = useContext(SocketContext);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const user = useSelector( state => state.user.data)
    const dispatch = useDispatch();
    const [myMessage,setMyMessage] = useState('');


    
    const sendHandler = () => {
        let messageObj = {
            senderId: user.userId,
            sender: user.firstName,
            content: myMessage,
            roomId: currentRoom.roomId
        }
        socket.emit("message",messageObj);
        dispatch(roomsActions.newMessage(messageObj))
        setMyMessage('');
    }

    useEffect(() => {
        socket.on("newMessage", data =>{
            console.log(data)
            dispatch(roomsActions.newMessage(data))
            
        })
    },[socket,dispatch])

    const showMessages = (mes) => {
       return <Message key={mes.messageId} sender={mes.sender} time={mes.time} message={mes.content} senderId={mes.senderId} />
    }

    const classes = useStyles();
    return(
        <Box sx={{width:'100%',height:'100vh',bgcolor:blueGrey[800]}}>
            <Box  className={classes.title}>
                <Typography variant="h4" gutterBottom> {currentRoom.roomName} </Typography>
                {!user.isAdvertiser?<IconButton sx={{color:blueGrey[100]}}>
                    <ExitToApp/>
                </IconButton>:null}
            </Box>
            
            <Box className={classes.messages}>
                 
                 {currentRoom.messages.map(showMessages)||<div></div>}
                 
            </Box>
            <Box className={classes.chatInput}>
                <TextField sx={{backgroundColor:blueGrey[100],mx:2}} fullWidth onChange={(e) => setMyMessage(e.target.value)} value={myMessage}/>
                <Button sx={{ml:2}} variant="contained" onClick={sendHandler}  ><SendOutlined/></Button>
            </Box>
        </Box>
    );
}