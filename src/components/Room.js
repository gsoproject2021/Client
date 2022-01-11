import { ListItemButton,ListItemIcon,ListItemText,Avatar,Divider } from "@mui/material"
import React,{useContext,useEffect,useState} from "react";
import RoomsContext from "../store/rooms-context";


export default function Room({roomName,id}){
    const roomsCtx = useContext(RoomsContext);
    const [isSelected,setIsSelected] = useState(0);

    const handleClick = ()=>{
        roomsCtx.setRoom({id:id,roomName:roomName});
        console.log(roomsCtx.room);
        setIsSelected(id);  
    }
    useEffect(async ()=>{
        await roomsCtx.getEvents();
    },[isSelected]);
    
    return(
        <React.Fragment>
            <Divider />
                <ListItemButton onClick ={handleClick} selected={isSelected===roomsCtx.roomId} >
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                        {roomName}
                    </ListItemText>
                </ListItemButton>
            <Divider />
        </React.Fragment>
            
    )

}