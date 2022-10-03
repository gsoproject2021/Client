import { useEffect, useState } from "react";
import { ListItemButton,Avatar,ListItemText, ListItemAvatar, IconButton,Box,  Badge} from "@mui/material";
import { BookmarkAdd, Clear } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { changeAdminState, removeUserFromRoom } from "../store/cache-actions";



export default function User({firstName,userId,isAdmin,image,isOnline,isRoomAdmin}){
    
    
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
                
                    <Avatar sx={{width:45,height:45}} src={image} >{firstName[0]}</Avatar>
                
            </Badge>
            </ListItemAvatar>
            <ListItemText >
                   {user.userId === userId ? "Me" : firstName}{isAdmin ? " (Room Admin)" : null}
             </ListItemText>
             <ListItemText >  
                   
             </ListItemText>
             {isRoomAdmin?<Box>
                <IconButton color="warning" onClick={handleRoomAdmin}>
                    <BookmarkAdd/>
                </IconButton>
                <IconButton color="error" onClick={handleDelete}>
                    <Clear/>
                </IconButton>
             </Box>:null}
             
        </ListItemButton>
    );
}