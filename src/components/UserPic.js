import { useEffect, useState } from "react";
import { Avatar,IconButton,Box,  Badge } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import {  useSelector } from "react-redux";

import AddPicture from "./AddPicture";

import { blueGrey } from "@mui/material/colors";
export default function UserPic(){

    
    const [pic,setPic] = useState('');
    const user = useSelector(state => state.user);
    
    
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
                <Avatar alt={user.data.firstName} src={pic}  sx={{width:135,height:135,my:2}} />
                    
                    
            </Badge>
            <AddPicture open={addDialog} dialogState={handleDialog} type="user" />
        </Box>
    )
}