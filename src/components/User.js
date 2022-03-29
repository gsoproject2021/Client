
import { ListItemButton,Avatar,ListItemText, ListItemAvatar, IconButton,Box, Typography} from "@mui/material";
import { BookmarkAdd, Clear } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { changeAdminState, removeUserFromRoom } from "../store/cache-actions";


export default function User({username,id,isAdmin}){
    const token = useSelector(state => state.user.token); 
    const currentRoom = useSelector(state => state.cache.currentRoom);
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(removeUserFromRoom(id,currentRoom,token));
    }

    const handleRoomAdmin = () => {
        dispatch(changeAdminState(id,isAdmin,currentRoom,token));
    }

    
    return(
        <ListItemButton>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText >
                   {username}{isAdmin ? " (Room Admin)" : null}
             </ListItemText>
             <ListItemText >  
                   
             </ListItemText>
             <Box>
                <IconButton onClick={handleRoomAdmin}>
                    <BookmarkAdd/>
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <Clear/>
                </IconButton>
             </Box>
             
        </ListItemButton>
    );
}