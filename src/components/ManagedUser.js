import { ListItemButton,ListItemAvatar,Avatar,ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/admin-actions";




export default function ManagedUser({userId,firstName}){
    
    const dispatch = useDispatch();

    const fetchManagedUser = () => {   

        dispatch(fetchUser(userId));
    }
    
    return(

        <ListItemButton onClick={fetchManagedUser}>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText primary={firstName} />
        </ListItemButton>
            
    );
}