import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";
import Rooms from "../components/Rooms";
import Events from "../components/Events";
import ChatWindow from '../components/ChatWindow';
import Members from '../components/Members'
import { motion } from "framer-motion/dist/framer-motion";
import colors from "../utils/colors";
import { io } from "socket.io-client";
import { useSelector,useDispatch } from "react-redux";

import { roomsActions } from "../store/room-slice";
import { useCallback, useContext, useEffect, useState } from "react";
import { SocketContext } from "../utils/socket";



const useStyles = makeStyles({
    root:{
        marginTop:8,
        marginBottom:4,
        height:940,
        
    },
    rooms:{
        height:"100%",
        backgroundColor:colors.blueGray[600],
        borderRight:'2px',
        borderRightColor:colors.blueGray[300],
        boxShadow:'8px 8px 8px 0px'
    },
    chat:{
        
    },
    events:{
        height:"100%",
        
        
    }
});

export default function Main(){

    const socket = useContext(SocketContext);
    const classes = useStyles();
    const user = useSelector(state => state.user.data);
    const rooms = useSelector(state => state.rooms.rooms);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const [newRoom,setNewRoom] = useState();

    
    socket.on(`rooms_${user.userId}`, socket => {
        if(socket.action === 'add' ){
            dispatch(roomsActions.addRoom(socket.data));
        }
        if(socket.action === 'delete'){
            dispatch(roomsActions.deleteRoom(socket.data))
        }
    });
    socket.on(`event_room_${currentRoom.roomId}`,socket => {
        if(currentRoom.roomId === socket.data.roomId && user.userId === socket.data.userId){
            dispatch(roomsActions.removeCurrentRoomBySocket(socket.data));
        }
    })

     
    
    return(
        <Grid component={motion.div} container item xs={10} className={classes.root} >
            <Grid item lg={3} md={3} xs={12} className={classes.rooms} sx={{borderRight:2, borderRightColor:colors.blueGray[700]}} >    
                <Rooms/>
            </Grid>
            <Grid className={classes.chat} item lg={6} md={3} xs={12} sx={{bgcolor:colors.blueGray[600]}}>
                 <ChatWindow/> 
            </Grid>
            <Grid item lg={3} md={3} xs={12} sx={{bgcolor:colors.blueGray[600]}} className={classes.events}>
                <Members/> 
                <Events/>
            </Grid>
        </Grid>
    );
} 