import { ListItemButton,ListItemText,Box,Typography } from "@mui/material";
import { useContext, useState } from "react";
import RoomsContext from "../store/rooms-context";


export default function Event({id,subject,date,description}){
    const roomsCtx = useContext(RoomsContext);
    const [isSelected,setIsSelected] = useState(0);

    const handleClick = ()=>{
        roomsCtx.setEventId(id);
        setIsSelected(id);
    }
    
    return(
                <ListItemButton onClick={handleClick} selected={isSelected===roomsCtx.eventId}>
                    <ListItemText sx={{borderRadius:20}} >
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant='h6' gutterBottom>   
                                {subject}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {date}
                            </Typography>
                        </Box>
                        <Typography>
                            {description}
                        </Typography>
                    </ListItemText> 
                </ListItemButton>
    );
}