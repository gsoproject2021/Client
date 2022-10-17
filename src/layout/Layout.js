
import {makeStyles} from "@mui/styles"
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import {Switch,Route,Redirect} from 'react-router-dom';

import About from '../pages/About';
import ContactUs from '../pages/ContactUs';

import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useSocket from "../hooks/useSocket";
import { roomsActions } from "../store/room-slice";
import SideMenu from "../components/SideMenu";
import { SocketContext } from "../context/SocketContext";
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
    
    const publicRooms = useSelector(state => state.rooms.publicRooms);

    const publicRoomData = useSelector(state => state.rooms.publicRoomData);

    const [details,setDetails] = useState(user.data);
    
    const socket = useContext(SocketContext);
    
    useEffect(() => {
        
        socket.on("userConnected",(data) => {            
            dispatch(roomsActions.isUserOnline(data));
         });
     
         socket.on("newMessage", data =>{
            dispatch(roomsActions.newMessage(data))
             
         })

         socket.on("newEvent", data => {
            dispatch(roomsActions.addEvent(data))
         })

         socket.on("deleteEvent", data => {   
            dispatch(roomsActions.deleteEvent(data))
         })

         socket.on("updateEvent", data => {   
            dispatch(roomsActions.updateEvent(data));
         })

         socket.on("addedUserToRoom", data => {
            dispatch(roomsActions.addUser(data));
         })

         socket.on("removeUser", data => {
            let myUserId = user.data.userId
            data = {...data,myUserId};
            dispatch(roomsActions.removeUser(data));
         })

         socket.on(`userChannel-${user.data.userId}`, data => {
            dispatch(roomsActions.addUser(data));
         })  
         
         socket.on("deleteRoom",data => {
            console.log(data)
            dispatch(roomsActions.deleteRoom(data));
         })

         return () => {
            socket.off("userConnected");
            socket.off("newMessage");
            socket.off("newEvent")
            socket.off("deleteEvent");
            socket.off("updateEvent");
            socket.off("addedUserToRoom");
            socket.off(`userChannel-${user.data.userId}`);
            socket.off("removeUser");
            socket.off("deleteRoom");
         }
    },[socket,dispatch,user])
    
    useEffect(() => {
        
        socket.connect();
        socket.emit("userRooms", rooms);       
    })

    useEffect(() => {
        socket.emit("getPublicRoom",{type:"public",publicRoomData});
    },[publicRoomData,socket])
    

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