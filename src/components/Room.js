import { ListItemButton,ListItemIcon,ListItemText,Avatar,Divider, IconButton } from "@mui/material"
import { width } from "@mui/system";
import React,{ useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo192.png";
import AddPicture from "./AddPicture";

import { roomsActions } from "../store/room-slice";
import { addEvent } from "../store/rooms-actions";
import { SocketContext } from "../utils/socket";

export default function Room({roomName,roomId,image}){
    const [isSelected,setIsSelected] = useState(-1);
    const [addDialog,setAddDialog] = useState(false);
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const currentRoom = useSelector(state =>state.rooms.currentRoom);
    const user = useSelector(state => state.user.data); 
    const rooms = useSelector(state => state.rooms.rooms);
    const [pic,setPic] = useState('');
    
    const handleDialog = (status) => {
        setAddDialog(status);
    }
    
    const handleClick = ()=>{
        setIsSelected(roomId);
        let userId = user.userId;
        dispatch(roomsActions.setCurrentRoom({roomId,userId}));
        console.log(rooms);
    }
  
    useEffect(() => {
        socket.on(`event_room_${roomId}`,socket => {
        
            if(socket.action === 'rename'){
                dispatch(roomsActions.updateRoom(socket.data));
            }
    
            if(socket.action === 'remove' && socket.data.userId === user.userId){
                dispatch(roomsActions.deleteRoom(socket.data.roomId));
            }
    
            if(socket.action === 'remove' && socket.data.userId !== user.userId){
                dispatch(roomsActions.removeUser(socket.data));
            }
    
         })

        socket.on(`events_${roomId}`,socket => {

            if(socket.action === 'create_event' && socket.data.userId !== user.userId){
                
                dispatch(roomsActions.addEvent(socket.data));
            }

            if(socket.action === 'update_event'){
                dispatch(roomsActions.updateEvent(socket.data));
            }

            if(socket.action === 'delete_event'){
                
                dispatch(roomsActions.deleteEvent(socket.data));
            }

        })

        socket.on(`upload_image_${roomId}`, socket => {

            dispatch(roomsActions.uploadImage(socket.data));
        })

        socket.on(`is_user_online${roomId}`,socket => {
            
            dispatch(roomsActions.isUserOnline(socket.userData))
            
        })

    },[socket,dispatch]);
    
    useEffect(() => {
        if(image === null || image === ''){
            setPic("");
        }
        else{
            setPic(`http://localhost:4000/${image}`);
        }
        
    },[image])
    
    return(
        <React.Fragment>
            <Divider  />
                <ListItemButton onClick ={handleClick} selected={isSelected===currentRoom.roomId} >
                    <ListItemIcon>
                        <IconButton onClick={() => setAddDialog(true)}>
                            <Avatar src={pic} sx={{width:45,height:45}}>
                                
                            </Avatar>
                        </IconButton>
                        <AddPicture dialogState={handleDialog} open={addDialog} type="room" roomId={roomId} />
                    </ListItemIcon>
                    <ListItemText>
                        {roomName}
                    </ListItemText>
                </ListItemButton>
            <Divider />
        </React.Fragment>
            
    )

}