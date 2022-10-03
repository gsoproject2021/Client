import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import Rooms from "../components/Rooms";
import Events from "../components/Events";
import ChatWindow from '../components/ChatWindow';
import Members from '../components/Members'
import { motion } from "framer-motion/dist/framer-motion";

import { useSelector,useDispatch } from "react-redux";

import { roomsActions } from "../store/room-slice";
import {  useContext } from "react";
import { SocketContext } from "../utils/socket";



const useStyles = makeStyles({
    root:{
        marginTop:8,
        marginBottom:4,
        height:'100vh',
        width:'100%'
        
    },
    rooms:{
        
        backgroundColor:blueGrey['900'],
        borderRightColor:blueGrey[400],
        
    },
    chat:{
        
    },
    events:{
        
        
        borderLeft:3,
        borderLeftColor:'white'
    }
});

export default function Main(){

    const socket = useContext(SocketContext);
    const classes = useStyles();
    const user = useSelector(state => state.user.data);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    

    
    

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
        <Grid component={motion.div} container item xs={12} className={classes.root} sx={{height:'100vh'}} >
            <Grid item lg={2} md={3} xs={12} className={classes.rooms}  >    
                <Rooms/>
            </Grid>
            <Grid className={classes.chat} item lg={8} md={3} xs={12} sx={{bgcolor:blueGrey[600],borderRight:2,borderRightColor:blueGrey[500],borderLeft:2,borderLeftColor:blueGrey[500]}}>
                 <ChatWindow/> 
            </Grid>
            <Grid item lg={2} md={3} xs={12} sx={{bgcolor:blueGrey[900]}} className={classes.events}>
                <Members/> 
                <Events/>
            </Grid>
        </Grid>
    );
} 