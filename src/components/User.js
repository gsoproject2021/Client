import { useEffect, useState } from "react";
import { ListItemButton,Avatar,ListItemText, ListItemAvatar, IconButton,Box, Typography, Badge} from "@mui/material";
import { BookmarkAdd, Clear } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { changeAdminState, removeUserFromRoom } from "../store/cache-actions";
import { width } from "@mui/system";
import { makeStyles } from "@mui/styles";





export default function User({firstName,userId,isAdmin,image,isOnline}){
    

    const user = useSelector(state => state.user.data);
    const token = useSelector(state => state.user.token); 
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const [roomAdmin,setRoomAdmin] = useState();
    const [pic,setPic] = useState();
    // const [isOnline,setIsOnline] = useState(false);
    const member = {userId:user.userId,firstName:user.firstName,isAdmin:1}
    

    useEffect(() => {
        setRoomAdmin(currentRoom.users.includes(member));    
    })

    const handleDelete = () =>{
        dispatch(removeUserFromRoom(userId,currentRoom,token));
        
    }

    const handleRoomAdmin = () => {
        dispatch(changeAdminState(userId,isAdmin,currentRoom,token));
    }

    useEffect(() => {
        if(image === null){
            setPic('');
        }else{
            setPic(`http://localhost:4000/${image}`);
        }
    },[image]);
    
    return(
        <ListItemButton>
            <ListItemAvatar>
            <Badge sx={{'& .MuiBadge-badge':{backgroundColor: isOnline ? '#44b700' : '#d32f2f',
    color: isOnline ? '#44b700' : '#d32f2f'}}} variant="dot" overlap="circular"  anchorOrigin={{ horizontal:"right",vertical:"bottom"}}>
                
                    <Avatar sx={{width:45,height:45}} src={pic} />
                
            </Badge>
            </ListItemAvatar>
            <ListItemText >
                   {firstName}{isAdmin ? " (Room Admin)" : null}
             </ListItemText>
             <ListItemText >  
                   
             </ListItemText>
             {roomAdmin?<Box>
                <IconButton onClick={handleRoomAdmin}>
                    <BookmarkAdd/>
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <Clear/>
                </IconButton>
             </Box>:null}
             
        </ListItemButton>
    );
}