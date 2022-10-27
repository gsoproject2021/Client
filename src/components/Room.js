import { ListItemButton,ListItemIcon,ListItemText,Avatar,Divider, IconButton } from "@mui/material"
import { Info, Sms } from "@mui/icons-material";
import React,{  useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPicture from "./AddPicture";
import { roomsActions } from "../store/room-slice";

import { blueGrey } from "@mui/material/colors";



export default function Room({roomName,roomId,image,backgroundColor,newMessage}){
    const [isSelected,setIsSelected] = useState(-1);
    const [addDialog,setAddDialog] = useState(false);
    const dispatch = useDispatch();
    
    const currentRoom = useSelector(state =>state.rooms.currentRoom);
    const user = useSelector(state => state.user.data); 
    const rooms = useSelector(state => state.rooms.rooms);
    const [pic,setPic] = useState(image);
    
    const handleDialog = (status) => {
        setAddDialog(status);
    }
    
    const handleClick = ()=>{
        setIsSelected(roomId);
        let userId = user.userId;
        dispatch(roomsActions.setCurrentRoom({roomId,userId}));
      
    }
    
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
                <ListItemButton sx={{bgcolor:blueGrey[900]}} onClick ={handleClick} selected={isSelected===currentRoom.roomId} >
                    <ListItemIcon>
                        <IconButton onClick={() => setAddDialog(true)}>
                            <Avatar src={pic} sx={{  width:40, height:40, }}>
                                {roomName[0]}
                            </Avatar>
                        </IconButton>
                        <AddPicture dialogState={handleDialog} open={addDialog} type="room" roomId={roomId} />
                    </ListItemIcon>
                    <ListItemText>
                        {roomName}
                    </ListItemText>
                    {newMessage ? <Info fontSize="small" color="error" />: null}
                </ListItemButton>
            <Divider />
        </React.Fragment>
            
    )

}