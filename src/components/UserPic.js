import { useEffect,useRef, useState } from "react";
import { Avatar,Input,IconButton,Box, InputLabel, Badge } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import AddPicture from "./AddPicture";
import logo from '../images/logo192.png';
import { blueGrey } from "@mui/material/colors";
export default function UserPic(){

    const [count,setCount] = useState(0);
    const [pic,setPic] = useState('');
    const user = useSelector(state => state.user);
    const [isPic,setIsPic] = useState(false);
    
    const [addDialog,setAddDialog] = useState(false);

    const handleDialog = (status) => {
        setAddDialog(status)
        
    }
    useEffect(() => {
        if(user.image === null){
            setPic('');
        }
        else{
            setPic(`http://localhost:4000/${user.data.image}`);
        }
        
    },[user.data.image])
    
    // let f = user.firstName[0];
    // let l = user.lastName[0];
    return(
        <Box>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={    
                    <IconButton onClick={() => setAddDialog(true)} sx={{color:blueGrey['A100']}} aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                    
                }>
                <Avatar  src={pic}  sx={{width:135,height:135,my:2}} />
                    
                    
            </Badge>
            <AddPicture open={addDialog} dialogState={handleDialog} type="user" />
        </Box>
    )
}