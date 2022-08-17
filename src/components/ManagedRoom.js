import {  useState } from "react";

import { Avatar,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { fetchRoom } from "../store/admin-actions";

export default function ManagedRoom({roomId,roomName}){

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isSelected,setIsSelected] = useState(-1);

    const handleClick = () => {
        setIsSelected(roomId);
        dispatch(fetchRoom(roomId,user.token))
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