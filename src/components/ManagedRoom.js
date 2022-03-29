import {  useState } from "react";

import { Avatar,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";

export default function ManagedRoom({roomId,roomName}){

    const dispatch = useDispatch();

    const [isSelected,setIsSelected] = useState(-1);

    const handleClick = () => {
        setIsSelected(roomId);
        dispatch()
    }


    return(    
        <ListItemButton onClick ={handleClick} selected={isSelected===roomId} >
            <ListItemIcon>
                <Avatar></Avatar>
            </ListItemIcon>
            <ListItemText>
                {roomName}
            </ListItemText>
        </ListItemButton>  
    )
}