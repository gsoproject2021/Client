import { ListItemButton,ListItemIcon,ListItemText,Avatar,Divider } from "@mui/material"
import React,{ useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { cacheActions } from "../store/cache-slice";
import { fetchRoomDetails } from "../store/cache-actions";

export default function Room({roomName,id}){
    const token = useSelector(state => state.user.token);
    const current = useSelector(state =>state.cache.currentRoom);
    const cache = useSelector(state => state.cache.cache);
    const dispatch = useDispatch();
    const [isSelected,setIsSelected] = useState(-1);

    const handleClick = ()=>{
        setIsSelected(id);
        let data = null;
        data = cache.find(room => room.id === id);
        if(data){
            cacheActions.currentRoom(data);
        }else{
            dispatch(fetchRoomDetails(id,roomName,token));
        }
        
    }
    
    
    return(
        <React.Fragment>
            <Divider />
                <ListItemButton onClick ={handleClick} selected={isSelected===current.roomId} >
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