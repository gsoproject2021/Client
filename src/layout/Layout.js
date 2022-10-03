
import {makeStyles} from "@mui/styles"
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import {Switch,Route,Redirect} from 'react-router-dom';

import About from '../pages/About';
import ContactUs from '../pages/ContactUs';

import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SocketContext } from "../utils/socket";
import { roomsActions } from "../store/room-slice";
import SideMenu from "../components/SideMenu";
const useStyles = makeStyles({
    left:{
        backgroundColor: blueGrey[700],
        color: blueGrey[200],
    },
    right:{
        backgroundColor:blueGrey[400],
        color: blueGrey[100]
    },
    layout:{
        display:"flex",
        backgroundColor:blueGrey[500],
        height:'100%'
    }
})

export default function Layout(){
    const classes = useStyles();
    
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.user);  
    
    const rooms = useSelector(state => state.rooms.rooms)
    
    const [details,setDetails] = useState(user.data);
    
    const socket = useContext(SocketContext);


    useEffect(() => {
        const roomsId = rooms.map(room =>  room.roomId)
        const userId = user.data.userId
        if(roomsId.length > 0){
            socket.auth = {userId}
           
            socket.emit("userOnline", {userId, roomsId} );
        }
        
    })

    useEffect(() => {
        
        socket.on('userDisconnected',(userId) => {

            dispatch(roomsActions.userOffline(userId))
        })
    })

    useEffect(() => {
        socket.on("whoIsConnected", ({userId,roomId}) => {
          
          dispatch(roomsActions.isUserOnline({userId,roomId}));
           
          const userAnswer = user.data.userId
          
          socket.emit("iAmConnected",{userAnswer,roomId})
        })
      })
    
      useEffect(() => {
        socket.on("userAnswer",({userId,roomId}) => {
          
          dispatch(roomsActions.isUserOnline({userId,roomId}));
        })
      },[socket,dispatch])

    return(
        <Box className={classes.layout} sx={{display:"flex"}}>
                <SideMenu/>
                {/* <Menu/> */}
                <Switch>
                    <Route exact path="/main">
                        <Redirect to="/main/home"/>
                    </Route>
                    <Route path="/main/home">
                        <Main/>
                    </Route>
                    <Route  path="/main/profile">
                        <Profile userDetails = {details} />
                    </Route>
                    { user.data.isAdmin && <Route  path="/main/admin">
                        <Admin/>
                    </Route> }
                    <Route  path="/main/contact">
                        <ContactUs/>
                    </Route>
                    <Route  path="/main/about">
                        <About/>
                    </Route>
                    <Redirect to="/main"/>
                </Switch>  
        </Box>
    );
}