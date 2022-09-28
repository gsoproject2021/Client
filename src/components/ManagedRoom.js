import {  useState } from "react";

import { Avatar,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { fetchRoom } from "../store/admin-actions";

export default function ManagedRoom({roomId,roomName}){

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const [isSelected,setIsSelected] = useState(-1);

    const handleClick = () => {
        setIsSelected(roomId);
        dispatch(fetchRoom(roomId,roomName,token))
    }


    return(    
        <ListItemButton onClick ={handleClick}  >
            <ListItemIcon>
                <Avatar></Avatar>
            </ListItemIcon>
            <ListItemText>
                {roomName}
            </ListItemText>
        </ListItemButton>  
    )
}